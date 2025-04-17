"use server";
import { HttpStatusCode } from "axios";
import HttpStatus from "@/Library/Utils/httpStatus";
import { PostData } from "@/Library/axios/AxiosFetch";

export default async function sendAction(summary: any) {
	try {
		const res = await PostData("/sendemail", summary);
		if (res.status === 200) {
			// @ts-ignore
			return { failed: false, status: HttpStatus.SUCCESS, message: res?.data?.message! };
		} else if (res.status === HttpStatusCode.Created) {
			// @ts-ignore
			return { failed: true, status: HttpStatus.ALREADY_REPORTED, message: res?.data?.message! };
		} else {
			return { failed: false, status: HttpStatus.INTERNAL_SERVER_ERROR, message: res.message };
		}
	} catch (error) {
		return { failed: true, status: HttpStatus.INTERNAL_SERVER_ERROR };
	}
}
