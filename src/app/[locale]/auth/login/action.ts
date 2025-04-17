"use server";
import axios, { HttpStatusCode } from "axios";
import { cookies } from "next/headers";
import { axiosInstance } from "@/Library/axios/AxiosFetch";

const cookie = process.env.COOKIE_NAME ?? "SMCV_userId";
export const loginAction = async (values: {
	email: string;
	terms?: boolean;
	password: string;
}): Promise<{ status: number }> => {
	try {
		const res = await axiosInstance.post(
			"/auth/login",
			{
				email: values.email,
				password: values.password,
				rememberMe: true,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			},
		);

		if (res.status === 200) {
			const setCookieHeader = res.headers["set-cookie"];

			if (setCookieHeader) {
				const match = setCookieHeader[0]?.match(/userId=([^;]+)/);

				if (match && match[1]) {
					const accessToken = match[1];
					const cookiesStore = cookies();

					if (process.env.ENV === "PRODUCTION") {
						cookiesStore.set(cookie, accessToken ?? "", {
							httpOnly: true,
							secure: true,
							sameSite: "lax",
							path: "/",
							domain: "sendmycv.ai",
							maxAge: 60 * 60 * 24 * 3,
						});
					} else {
						cookiesStore.set(cookie, accessToken ?? "", {
							httpOnly: false,
							maxAge: 60 * 60 * 24 * 3,
						});
					}
				} else {
					return { status: HttpStatusCode.InternalServerError };
				}
			} else {
				return { status: HttpStatusCode.InternalServerError };
			}
		}

		return { status: res.status };
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			return { status: error.response?.status || HttpStatusCode.InternalServerError };
		} else if (error instanceof Error) {
			return { status: HttpStatusCode.InternalServerError };
		} else {
			return { status: HttpStatusCode.InternalServerError };
		}
	}
};
