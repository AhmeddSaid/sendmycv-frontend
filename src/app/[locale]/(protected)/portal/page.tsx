import { redirect } from "next/navigation";
import { GetData } from "@/Library/axios/AxiosFetch";

const Page = async () => {
	const res = await GetData("/subscription/portal");
	if (res.status === 200) {
		// @ts-ignore
		redirect(res?.data?.url);
	} else {
		redirect("/documents");
	}
};

export default Page;
