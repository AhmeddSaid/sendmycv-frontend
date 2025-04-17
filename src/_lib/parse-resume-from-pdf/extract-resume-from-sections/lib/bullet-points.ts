import type { Lines, TextItem } from "@/_lib/parse-resume-from-pdf/types";

export const BULLET_POINTS = ["⋅", "∙", "🞄", "•", "⦁", "⚫︎", "●", "⬤", "⚬", "○"];

export const getBulletPointsFromLines = (lines: Lines): string[] => {
	// If no bullet points at all, just map each line
	const firstBulletPointLineIndex = getFirstBulletPointLineIdx(lines);
	if (firstBulletPointLineIndex === undefined) {
		// Safely map lines. If a line is empty, it’ll join to an empty string.
		return lines.map(line => line.map(item => item.text).join(" "));
	}

	// Otherwise, flatten all lines into a single string
	let lineStr = "";
	const flattened = lines.flat(); // all TextItems
	for (const item of flattened) {
		// item.text might be string | undefined => use ?? or fix your types
		const text = item.text ?? "";
		if (!lineStr.endsWith(" ") && !text.startsWith(" ")) {
			lineStr += " ";
		}
		lineStr += text;
	}

	const commonBulletPoint = getMostCommonBulletPoint(lineStr);
	const firstBulletPointIndex = lineStr.indexOf(commonBulletPoint!);
	if (firstBulletPointIndex !== -1) {
		lineStr = lineStr.slice(firstBulletPointIndex);
	}

	// Split on the bullet point, trim, filter out empty strings
	return lineStr
		.split(commonBulletPoint!)
		.map(s => s.trim())
		.filter(Boolean);
};

function getMostCommonBulletPoint(str: string) {
	const bulletToCount: Record<string, number> = BULLET_POINTS.reduce(
		(acc, cur) => {
			acc[cur] = 0;
			return acc;
		},
		{} as Record<string, number>,
	);

	let bulletWithMostCount = BULLET_POINTS[0];
	let bulletMaxCount = 0;

	for (const char of str) {
		if (bulletToCount[char] !== undefined) {
			bulletToCount[char]++;
			if (bulletToCount[char] > bulletMaxCount) {
				bulletMaxCount = bulletToCount[char];
				bulletWithMostCount = char;
			}
		}
	}
	return bulletWithMostCount;
}

function getFirstBulletPointLineIdx(lines: Lines): number | undefined {
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		for (const item of line!) {
			if (BULLET_POINTS.some(bullet => item.text.includes(bullet))) {
				return i;
			}
		}
	}
	return undefined;
}

const isWord = (str: string) => /^[^0-9]+$/.test(str);
const hasAtLeast8Words = (item: TextItem) => item.text.split(/\s+/).filter(isWord).length >= 8;

export const getDescriptionsLineIdx = (lines: Lines): number | undefined => {
	// First, see if we have bullet points
	let idx = getFirstBulletPointLineIdx(lines);

	// If no bullet points, fallback: find a line with at least 8 words
	if (idx === undefined) {
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			// Check line length
			if (line?.length === 1 && hasAtLeast8Words(line[0]!)) {
				idx = i;
				break;
			}
		}
	}

	return idx;
};
