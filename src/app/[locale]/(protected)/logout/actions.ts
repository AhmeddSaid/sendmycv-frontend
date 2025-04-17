"use server";
import { cookies } from "next/headers";
import httpStatus from "@/Library/Utils/httpStatus";
import HttpStatus from "@/Library/Utils/httpStatus";
import { axiosInstance } from "@/Library/axios/AxiosFetch";

const cookie = process.env.COOKIE_NAME ?? "SMCV_userId";

export default async function logoutAction() {
	try {
		const requestCookies = cookies().getAll();
		const cookieHeader = requestCookies.map(c => `${c.name}=${c.value}`).join("; ");

		const res = await axiosInstance.get("/logout", {
			headers: {
				Cookie: cookieHeader,
			},
			withCredentials: true,
		});

		if (
			res.status === HttpStatus.SUCCESS ||
			res.status === HttpStatus.UNAUTHORIZED ||
			res.status === HttpStatus.FORBIDDEN
		) {
			const setCookieHeader = res.headers["set-cookie"];
			if (setCookieHeader) {
				const match = setCookieHeader[0]?.match(/userId=([^;]+)/);
				if (match) {
					const accessToken = match[1];
					const cookiesStore = cookies();
					cookiesStore.set(cookie, accessToken ?? "", {
						httpOnly: true,
						secure: true,
						sameSite: "lax",
						path: "/",
						domain: "sendmycv.ai",
						maxAge: 0,
					});
				} else {
					return { status: httpStatus.INTERNAL_SERVER_ERROR };
				}
			}
		}

		return { status: HttpStatus.SUCCESS };
	} catch (error) {
		const cookiesStore = cookies();
		cookiesStore.set(cookie, "", {
			httpOnly: true,
			secure: true,
			sameSite: "lax",
			path: "/",
			domain: "sendmycv.ai",
			maxAge: 0,
		});
		return { status: HttpStatus.INTERNAL_SERVER_ERROR };
	}
}
