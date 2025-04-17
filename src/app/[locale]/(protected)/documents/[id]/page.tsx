import React from "react";
import ResumeDetails from "@/Library/_Pages/ResumeDetails/ResumeDetails";
import {
	CVData,
	getDocumentById,
} from "@/app/[locale]/(protected)/cover/_CoverLetterutils/GetDocumentById";

const Page = async ({ params }: { params: { id: string } }) => {
	const { cvData } = (await getDocumentById(params.id)) as unknown as {
		cvData: CVData & { content: { content: any } };
	};
	return (
		<ResumeDetails
			// isCoverLetter
			content={{
				settings: JSON.parse(cvData.settings),
				resume: cvData.content,
				title: cvData.title,
			}}
			// reference={cvData.reference}
		/>
	);
};

export default Page;
