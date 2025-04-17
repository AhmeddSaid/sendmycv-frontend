import {
	hasLetterAndIsAllUpperCase,
	hasOnlyLettersSpacesAmpersands,
	isBold,
} from "@/_lib/parse-resume-from-pdf/extract-resume-from-sections/lib/common-features";
import type { Line, Lines, ResumeSectionToLines } from "@/_lib/parse-resume-from-pdf/types";
import type { ResumeKey } from "@/_lib/redux/types";

export const PROFILE_SECTION: ResumeKey = "profile";

/**
 * Step 3. Group lines into sections
 *
 * Every section (except the profile section) starts with a section title that
 * takes up the entire line. This is a common pattern not just in resumes but
 * also in books and blogs. The resume parser uses this pattern to group lines
 * into the closest section title above these lines.
 */
export const groupLinesIntoSections = (lines: Lines): ResumeSectionToLines => {
	const sections: ResumeSectionToLines = {};
	let sectionName = PROFILE_SECTION;
	let sectionLines: Lines = []; // array of Line

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i]; // line is guaranteed a Line (an array of TextItems)
		// If you allow empty lines, just check length:
		if (!line || line.length === 0) {
			// maybe skip or handle empty line
			continue;
		}

		// textItem[0] is guaranteed if line.length > 0
		const text = line[0]!.text.trim();

		if (isSectionTitle(line, i)) {
			sections[sectionName] = [...sectionLines];
			// @ts-ignore
			sectionName = text; // e.g. 'EDUCATION'
			sectionLines = [];
		} else {
			sectionLines.push(line);
		}
	}

	if (sectionLines.length > 0) {
		sections[sectionName] = [...sectionLines];
	}

	return sections;
};

const SECTION_TITLE_PRIMARY_KEYWORDS = ["experience", "education", "project", "skill"];
const SECTION_TITLE_SECONDARY_KEYWORDS = [
	"job",
	"course",
	"extracurricular",
	"objective",
	"summary", // LinkedIn generated resume has a summary section
	"award",
	"honor",
	"project",
];
const SECTION_TITLE_KEYWORDS = [
	...SECTION_TITLE_PRIMARY_KEYWORDS,
	...SECTION_TITLE_SECONDARY_KEYWORDS,
];

const isSectionTitle = (line: Line, lineNumber: number): boolean => {
	const isFirstTwoLines = lineNumber < 2;
	const hasMoreThanOneItemInLine = line.length > 1;
	const hasNoItemInLine = line.length === 0;
	if (isFirstTwoLines || hasMoreThanOneItemInLine || hasNoItemInLine) {
		return false;
	}

	const textItem = line[0]!;
	if (isBold(textItem) && hasLetterAndIsAllUpperCase(textItem)) {
		return true;
	}

	const text = textItem.text.trim();
	const textHasAtMost2Words = text.split(" ").filter(s => s !== "&").length <= 2;
	const startsWithCapitalLetter = /^[A-Z]/.test(text);

	if (
		textHasAtMost2Words &&
		hasOnlyLettersSpacesAmpersands(textItem) &&
		startsWithCapitalLetter &&
		SECTION_TITLE_KEYWORDS.some(keyword => text.toLowerCase().includes(keyword))
	) {
		return true;
	}

	return false;
};
