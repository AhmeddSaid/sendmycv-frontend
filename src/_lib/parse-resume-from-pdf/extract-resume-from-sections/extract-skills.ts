import { deepClone } from "@/_lib/deep-clone";
import {
	getBulletPointsFromLines,
	getDescriptionsLineIdx,
} from "@/_lib/parse-resume-from-pdf/extract-resume-from-sections/lib/bullet-points";
import { getSectionLinesByKeywords } from "@/_lib/parse-resume-from-pdf/extract-resume-from-sections/lib/get-section-lines";
import type { ResumeSectionToLines } from "@/_lib/parse-resume-from-pdf/types";
import { initialFeaturedSkills } from "@/_lib/redux/resumeSlice";
import type { ResumeSkills } from "@/_lib/redux/types";

export const extractSkills = (sections: ResumeSectionToLines) => {
	const lines = getSectionLinesByKeywords(sections, ["skill"]);
	if (lines) {
		const descriptionsLineIdx = getDescriptionsLineIdx(lines) ?? 0;

		const descriptionsLines = lines?.slice(descriptionsLineIdx);
		const descriptions = getBulletPointsFromLines(descriptionsLines);

		const featuredSkills = deepClone(initialFeaturedSkills);
		if (descriptionsLineIdx !== 0) {
			const featuredSkillsLines = lines?.slice(0, descriptionsLineIdx);
			const featuredSkillsTextItems = featuredSkillsLines
				.flat()
				.filter(item => item?.text.trim())
				.slice(0, 6);
			for (let i = 0; i < featuredSkillsTextItems.length; i++) {
				// @ts-ignore
				// featuredSkills[i]?.skill = featuredSkillsTextItems[i]?.text;
			}
		}
		const skills: ResumeSkills = {
			featuredSkills,
			// @ts-ignore
			descriptions,
		};
		return { skills };
	}
};
