import { redirect } from "next/navigation";

export const metadata = {
	title: "Checkout",
};

export default function page() {
	redirect("/404");
	// return <Checkout />;
}
