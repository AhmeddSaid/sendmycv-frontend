import React from "react";
import CoverPage from "@/Library/_Pages/CoverPage/CoverPage";
import {
	CVData,
	CVSettings,
	getDocumentById,
} from "@/app/[locale]/(protected)/cover/_CoverLetterutils/GetDocumentById";

export const dynamic = "force-dynamic";

const EditCVPage = async ({ id, isCoverLetter }: { id: string; isCoverLetter: boolean }) => {
	const { cvData } = (await getDocumentById(id)) as unknown as {
		cvData: CVData & { content: { content: any } };
	};

	return (
		<CoverPage
			isCoverLetter={isCoverLetter}
			content={{
				settings: JSON.parse(cvData.settings).settings as CVSettings,
				resume: cvData.content.content,
				title: cvData.title,
			}}
			reference={cvData.reference}
		/>
	);
};

export default EditCVPage;
