import React from "react";
import VerifyAuth from "@/Library/_Pages/Auth/Verify/Verify.auth";
import { PostData } from "@/Library/axios/AxiosFetch";

export const dynamic = "force-dynamic";

const Page = async ({
	searchParams,
}: {
	searchParams?: { verify?: string; token?: string; email?: string };
}) => {
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

	return (
		<>
			<VerifyAuth email={searchParams?.email} isVerified={await verified()} />
		</>
	);
};

export default Page;
