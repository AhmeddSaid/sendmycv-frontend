import { redirect } from "next/navigation";
import { GetData, GetDataResponse } from "@/Library/axios/AxiosFetch";

export interface CVSettings {
	themeColor: string;
	fontFamily: string;
	fontSize: string;
	documentSize: string;
	formToShow: Record<string, boolean>;
	formToHeading: Record<string, string>;
	formsOrder: string[];
	showBulletPoints: Record<string, boolean>;
}

export interface CVData {
	id: string;
	user: string;
	title: string;
	content: any[];
	settings: string;
	reference: string;
	type: string;
	createdAt: string;
	updatedAt: string;
	isDeleted: boolean;
}

interface ApiResponse {
	data: {
		message: { en: string; ar: string };
		success: boolean;
		data: CVData | null;
	};
	status: number;
	error: boolean;
}

export async function getDocumentById(id: string, isPublic: boolean = false) {
	const url = isPublic ? `/public/cv/${id}` : `/cv/single-cv/${id}`;
	const coverLetterResponse: GetDataResponse<ApiResponse> = await GetData(url);

	const cvData = coverLetterResponse?.data?.data;
	if (!cvData) {
		redirect("/404");
	}

	return { cvData: cvData };
}
