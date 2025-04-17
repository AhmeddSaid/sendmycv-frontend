import Documents from "@/Library/_Pages/Documents/Documents";
import { GetData } from "@/Library/axios/AxiosFetch";

export const dynamic = "force-dynamic";

export default async function page() {
	const [docsData, userData] = await Promise.all([
		await GetData("/cv/user-cv"),
		await GetData("/user"),
	]);

	return (
		<Documents
			// @ts-ignore
			docs={docsData?.data?.data}
			// @ts-ignore
			username={userData.data.data.UserInformation?.fullname}
			// @ts-ignore
			hasSubscription={userData.data.data.Subscription.length > 0}
		/>
	);
}
