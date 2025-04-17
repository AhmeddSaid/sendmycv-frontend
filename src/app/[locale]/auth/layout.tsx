import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import AuthLayout from "@/Library/Layouts/AuthLayout";

const cookie: string = process.env.COOKIE_NAME ?? "";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
	const cookieJar = cookies();
	if (cookieJar?.get(cookie)?.value) {
		redirect("/documents");
	}
	return <AuthLayout>{children}</AuthLayout>;
}
