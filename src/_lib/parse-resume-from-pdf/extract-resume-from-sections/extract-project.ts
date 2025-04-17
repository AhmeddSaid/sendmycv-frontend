import {
	getBulletPointsFromLines,
	getDescriptionsLineIdx,
} from "@/_lib/parse-resume-from-pdf/extract-resume-from-sections/lib/bullet-points";
import {
	DATE_FEATURE_SETS,
	getHasText,
	isBold,
} from "@/_lib/parse-resume-from-pdf/extract-resume-from-sections/lib/common-features";
import { getTextWithHighestFeatureScore } from "@/_lib/parse-resume-from-pdf/extract-resume-from-sections/lib/feature-scoring-system";
import { getSectionLinesByKeywords } from "@/_lib/parse-resume-from-pdf/extract-resume-from-sections/lib/get-section-lines";
import { divideSectionIntoSubsections } from "@/_lib/parse-resume-from-pdf/extract-resume-from-sections/lib/subsections";
import type { FeatureSet, ResumeSectionToLines } from "@/_lib/parse-resume-from-pdf/types";
import type { ResumeProject } from "@/_lib/redux/types";

export const extractProject = (sections: ResumeSectionToLines) => {
	const projects: ResumeProject[] = [];
	const projectsScores = [];
	const lines = getSectionLinesByKeywords(sections, ["project"]);

	if (lines) {
		const subsections = divideSectionIntoSubsections(lines);
		for (const subsectionLines of subsections) {
			const descriptionsLineIdx = getDescriptionsLineIdx(subsectionLines) ?? 1;

			const subsectionInfoTextItems = subsectionLines.slice(0, descriptionsLineIdx).flat();
			const [date, dateScores] = getTextWithHighestFeatureScore(
				subsectionInfoTextItems,
				DATE_FEATURE_SETS,
			);
			const PROJECT_FEATURE_SET: FeatureSet[] = [
				[isBold, 2],
				[getHasText(date), -4],
			];
			const [project, projectScores] = getTextWithHighestFeatureScore(
				subsectionInfoTextItems,
				PROJECT_FEATURE_SET,
				false,
			);

			const descriptionsLines = subsectionLines.slice(descriptionsLineIdx);
			const descriptions = getBulletPointsFromLines(descriptionsLines);

			// @ts-ignore
			projects.push({ project, date, descriptions });
			projectsScores.push({
				projectScores,
				dateScores,
			});
		}

		return { projects, projectsScores };
	}
};
