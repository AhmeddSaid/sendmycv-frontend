export const filterAndCountByType = (
	docs: {
		id: string;
		img: string;
		title: string;
		updatedAt: string;
		createdAt: string;
		reference: string;
		type: "CV" | "COVERLETTER";
	}[],
) => {
	return docs.reduce(
		(acc, doc) => {
			// @ts-ignore
			acc[doc.type].push(doc);
			acc.count[doc.type]++;
			return acc;
		},
		{ CV: [], COVERLETTER: [], count: { CV: 0, COVERLETTER: 0 } },
	);
};
