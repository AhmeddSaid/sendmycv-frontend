"use client";
import Link from "next/link";
import { NavLinks } from "@/Library/_Pages/Documents/Documents.styles";

export default function NavBarLinks() {
	// const DropDowns = [
	// 	{
	// 		dropDown: [
	// 			{
	// 				title: "Create New",
	// 				value: "English",
	// 			},
	// 			{
	// 				title: "Arabic",
	// 				value: "Arabic",
	// 			},
	// 		],
	// 	},
	// 	{
	// 		dropDown: [
	// 			{
	// 				title: "English",
	// 				value: "English",
	// 			},
	// 			{
	// 				title: "Arabic",
	// 				value: "Arabic",
	// 			},
	// 		],
	// 	},
	// ];
	return (
		<NavLinks $gap="3.5rem" className="nav">
			<Link href="/documents">Documents</Link>
			<Link href="/send">Send</Link>
			{/*<Link href="#">Help</Link>*/}
			{/*{DropDowns.map(() => (*/}
			{/*	<LanguageSelect key={uuid()} />*/}
			{/*))}*/}
		</NavLinks>
	);
}
