"use server";
import { HttpStatusCode } from "axios";
import { PostData } from "@/Library/axios/AxiosFetch";

export const resendVerifyAction = async (email: string) => {
	try {
		if (!email) {
			return {
				res: HttpStatusCode.BadRequest,
				failed: true,
				message: "Email is required",
			};
		}

		const response = await PostData(
			"/auth/verify-email/resend",
			{
				email: email.trim(),
			},
			"POST",
		);

		if (response.error) {
			return {
				res: response.status,
				failed: true,
				message: response.message || "Resend failed",
			};
		}

		return { status: response.status, failed: false };
	} catch (error) {
		console.log(error, "error from action");
		return { failed: true, message: "An error occurred during resending email." };
	}
};
