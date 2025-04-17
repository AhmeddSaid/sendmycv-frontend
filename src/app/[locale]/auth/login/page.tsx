import { Metadata } from "next";
import Login from "@/Library/_Pages/Auth/Login/Login";
import { MetaTags } from "@/Library/components/Metatags/Metatags";

export const metadata: Metadata = MetaTags({
	title: "Login",
	description: "Login",
	keywords: "Login",
	url: `${process.env.DOMAIN}/auth/login`,
	language: "en",
	image: "/logo.svg",
});

export default function page() {
	return <Login />;
}
