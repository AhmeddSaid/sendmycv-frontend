"use server";

import { revalidatePath } from "next/cache";
import { PostData } from "@/Library/axios/AxiosFetch";

export const DeleteDuplicateAction = async (reference: string, action: string) => {
	try {
		action = action.toUpperCase();

		if (!reference || !action) return { success: false, status: 500 };

		const url =
			action === "DELETE"
				? `/cv/delete/${reference}`
				: action === "DUPLICATE"
					? `/cv/user-cv-duplicate/${reference}`
					: "/404";
		const method = action === "DELETE" ? "DELETE" : "POST";
		const res = await PostData(url, {}, method);
		revalidatePath("/documents");
		return { success: true, status: res.status };
	} catch {
		return { success: false, status: 500 };
	}
};
