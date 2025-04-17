import CoverPage from "@/Library/_Pages/CoverPage/CoverPage";
import {
	CVData,
	CVSettings,
	getDocumentById,
} from "@/app/[locale]/(protected)/cover/_CoverLetterutils/GetDocumentById";

const Page = async ({ params }: { params: { id: string } }) => {
	const { cvData } = (await getDocumentById(params.id, true)) as unknown as {
		cvData: CVData & { content: { content: any } };
	};

	return (
		<CoverPage
			autodownload={true}
			isCoverLetter={!(cvData.type === "CV")}
			content={{
				settings: JSON.parse(cvData.settings).settings as CVSettings,
				resume: cvData.content.content,
				title: cvData.title,
			}}
			reference={cvData.reference}
		/>
	);
};

export default Page;
