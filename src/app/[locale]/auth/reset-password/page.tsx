import React from "react";
import ResetPassword from "@/Library/_Pages/Auth/ResetPassword/ResetPassword";
import { PostData } from "@/Library/axios/AxiosFetch";

export default function Page({
	searchParams,
}: {
	searchParams?: { verify?: string; token?: string; email?: string };
}) {
	const verified: () => Promise<boolean> = async () => {
		if (searchParams?.verify || searchParams?.token) {
			const payload = {
				verify: searchParams.verify,
				token: searchParams.token,
			};
			const res = await PostData("/auth/verify-email/validate", payload, "POST");

			return res.status === 200;
		}

		return false;
	};

	return <ResetPassword />;
}
