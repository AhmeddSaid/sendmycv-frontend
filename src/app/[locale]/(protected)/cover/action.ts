"use server";

import { revalidatePath } from "next/cache";
import { PostData } from "@/Library/axios/AxiosFetch";
import { Settings } from "@/_lib/redux/settingsSlice";

export const submitCoverAction = async (
	values: {
		settings: Settings;
		resume: [];
		coverLetter: { descriptions: string };
	},
	type?: "CV" | "COVERLETTER",
) => {
	try {
		const payload = {
			title: values.coverLetter.descriptions,
			settings: values.settings,
			content: values.resume,
			type: type ?? "CV",
		};

		const cv = await PostData("/cv/create", payload);
		revalidatePath("/documents");
		return { status: cv.status, failed: false };
	} catch (err) {
		return { failed: true };
	}
};

export const editCoverAction = async (
	values: {
		settings: Settings;
		resume: [];
		coverLetter: { descriptions: string };
	},
	reference: string,
) => {
	try {
		const payload = {
			title: values.coverLetter.descriptions,
			settings: values.settings,
			content: values.resume,
		};

		const cv = await PostData(`/cv/update/${reference}`, payload, "PUT");
		revalidatePath("/documents");
		return { status: cv.status, failed: false };
	} catch (err) {
		return { failed: true };
	}
};

export const GenerateWithAiAction = async ({
	context,
	jobDescription,
	scope,
}: {
	context: string;
	jobDescription: string;
	scope: "WORK" | "PROJECT" | "SKILL";
}) => {
	try {
		const payload = {
			scope,
			context,
			jobDescription,
		};
		const res = await PostData("/ai/chat", payload);

		// @ts-ignore
		return { content: res.data.data.choices[0].message.content, failed: false };
	} catch (err) {
		return { failed: true };
	}
};
