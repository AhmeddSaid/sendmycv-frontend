import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const cookie: string = process.env.COOKIE_NAME ?? "";

export default function ProtectedLayout({
	children,
}: Readonly<{ children: ReactNode }>): ReactNode {
	const cookieJar = cookies();
	if (!cookieJar?.get(cookie)?.value) {
		redirect("/auth/login");
	}

	return <>{children}</>;
}
