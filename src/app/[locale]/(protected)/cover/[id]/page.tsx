import React from "react";
import EditCVPage from "@/app/[locale]/(protected)/cover/_CoverLetterutils/EditCvPage";

export const dynamic = "force-dynamic";

const Page = async ({ params }: { params: { id: string } }) => {
	return <EditCVPage id={params.id} isCoverLetter={true} />;
};

export default Page;
