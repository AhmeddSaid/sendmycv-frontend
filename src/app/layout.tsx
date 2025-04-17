import { NextFontWithVariable } from "next/dist/compiled/@next/font";
// eslint-disable-next-line
import { Inter, Lexend_Exa, Roboto } from "next/font/google";
import MainLayout from "@/Library/Layouts/MainLayout";

const lexendExa: NextFontWithVariable = Lexend_Exa({
	variable: "--font-lexend-exa",
	subsets: ["latin"],
	style: ["normal"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter: NextFontWithVariable = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	style: ["normal"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto: NextFontWithVariable = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	style: ["normal"],
	display: "swap",
	weight: "700",
});

export const metadata = {
	title: {
		default: "SendMyCv",
		template: "%s | SendMyCv",
	},
	description: "SendMyCv AI resume builder.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			dir={"ltr"}
			className={`${lexendExa.variable} ${inter.variable} ${roboto.variable}`}
		>
			<MainLayout>{children}</MainLayout>
		</html>
	);
}
