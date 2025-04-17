import { headers } from "next/headers";
import Pricing from "@/Library/_Pages/Pricing/Pricing";
import { RegionDetector } from "@/app/[locale]/pricing/_pricingUtils/RegionDetector";

export const dynamic = "force-dynamic";

export default function page() {
	const headersList = headers();
	const country = headersList.get("cf-ipcountry") ?? "US";
	return <Pricing pricingPlan={RegionDetector(country)} />;
}
