"use server";
import { HttpStatusCode } from "axios";
import { PostData } from "@/Library/axios/AxiosFetch";

export const signUpAction = async (values: {
	email: string;
	terms: boolean;
	fullName: string;
	password: string;
	repeatPassword: string;
}) => {
	try {
		const email = values.email.trim();
		const password = values.password;
		const repeatPassword = values.repeatPassword;
		const fullName = values.fullName.trim();

		if (!email || !password || !fullName || !values.terms || !repeatPassword) {
			return {
				res: HttpStatusCode.BadRequest,
				failed: true,
				message: "All fields are required",
			};
		}

		const payload = {
			email,
			password,
			repeatPassword,
			fullName,
			terms: values.terms,
		};

		const response = await PostData("/auth/register", payload, "POST");
		if (response.error) {
			return {
				res: response.status,
				failed: true,
				message: response.message || "Registration failed",
			};
		}

		return { status: response.status, failed: false };
	} catch (error) {
		return { success: false, message: "An error occurred during sign up" };
	}
};
