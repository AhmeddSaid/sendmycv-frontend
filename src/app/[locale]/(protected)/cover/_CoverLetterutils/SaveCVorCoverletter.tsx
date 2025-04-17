"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import styled from "styled-components";
import { Flexbox, Section } from "@/Library/Grids/Grids";
import Logo from "@/Library/components/Logo/Logo";
import { Button } from "@/Library/components/UI/Button";
import { Settings } from "@/_lib/redux/settingsSlice";
import { submitCoverAction } from "@/app/[locale]/(protected)/cover/action";

const CoverNavBat = styled(Section)`
	background: #0e0822;
	display: flex;
	justify-content: space-between;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	width: 90%;
	padding-block: 14px;
	z-index: 555;
	padding-inline: 24px;
`;

export const SaveCoverLetter = ({ isCoverLetter }: { isCoverLetter?: boolean }) => {
	const data = useSelector(state => state) as unknown as {
		settings: Settings;
		resume: [];
		coverLetter: { descriptions: string };
	};

	const router = useRouter();
	const handleForm = async () => {
		if (data.coverLetter.descriptions.trim() === "" || !data.coverLetter.descriptions) {
			toast.error("Please enter a title.");
			return;
		} else if (data.coverLetter.descriptions.trim().length > 150) {
			toast.error("Maximum title length is 150 characters.");
			return;
		}

		const res = await submitCoverAction(data, isCoverLetter ? "COVERLETTER" : "CV");
		if (res.status === 201) {
			toast.success(isCoverLetter ? "Cover letter saved successfully." : "CV saved successfully.");
			router.push("/send");
		} else {
			toast.error("Something went wrong.");
		}
	};
	return (
		<>
			<CoverNavBat>
				<Logo />
				<Flexbox $gap={16}>
					<Button onClick={handleForm}>Save</Button>
					<Link href={"/documents"}>
						<Button $bg={"transparent"}>Exit</Button>
					</Link>
				</Flexbox>
			</CoverNavBat>
		</>
	);
};
