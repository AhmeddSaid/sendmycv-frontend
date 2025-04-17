"use client";
import Link from "next/link";
import React from "react";
import { Provider, useSelector } from "react-redux";
import { toast } from "sonner";
import styled from "styled-components";
import styles from "./../../Grids/Spaces.module.css";
import { Col, Flexbox, Row, Section } from "@/Library/Grids/Grids";
import Logo from "@/Library/components/Logo/Logo";
import { Resume } from "@/Library/components/Resume";
import { ResumeForm } from "@/Library/components/ResumeForm";
import { Button } from "@/Library/components/UI/Button";
import { store } from "@/_lib/redux/store";
import { editCoverAction } from "@/app/[locale]/(protected)/cover/action";

const MainContainer = styled(Section)`
	position: relative;
	overflow: hidden;
`;

const CoverNavBat = styled(Section)`
	background: #0e0822; //height: 50px;
	display: flex;
	justify-content: space-between;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	width: 90%;
	//margin: auto;
	padding-block: 14px;
	z-index: 555;
	padding-inline: 24px;
	//margin-bottom: 50px;
`;

const GridContainer = styled(Row)`
	.fixed {
		position: relative;

		& > * {
			position: fixed;
			top: 0;
		}
	}
`;

const CoverPage = ({
	content,
	reference,
	isCoverLetter,
	autodownload = false,
}: {
	content: any;
	reference: string;
	isCoverLetter: boolean;
	autodownload?: boolean;
}) => {
	return (
		<>
			{/*@ts-ignore*/}
			<Section className={autodownload ? "" : null}>
				<Provider store={store}>
					<MainContainer>
						{!autodownload && (
							<SaveCoverLetter reference={reference} isCoverLetter={isCoverLetter} />
						)}
						<GridContainer className={styles.marginTop64}>
							<Col $lg={6}>
								<ResumeForm content={content} isCoverLetter={isCoverLetter} />
							</Col>

							<Col $lg={6} className={"fixed"}>
								<Resume isCoverLetter={isCoverLetter} />
							</Col>
						</GridContainer>
					</MainContainer>
				</Provider>
			</Section>
		</>
	);
};

const SaveCoverLetter = ({
	reference,
	isCoverLetter,
}: {
	reference: string;
	isCoverLetter: boolean;
}) => {
	const data = useSelector(state => state);
	const handleForm = async () => {
		// @ts-ignore
		const res = await editCoverAction(data, reference);
		if (res.status === 200) {
			toast.success(
				isCoverLetter ? "Cover letter updated successfully." : "CV updated successfully.",
			);
		} else {
			toast.error("Something went wrong.");
		}
	};
	return (
		<>
			<CoverNavBat>
				<Logo />
				<Flexbox $gap={16}>
					<Button onClick={handleForm}>
						{isCoverLetter ? "Update cover letter" : "Update CV"}
					</Button>
					<Link href={"/documents"}>
						<Button $bg={"transparent"}>Exit</Button>
					</Link>
				</Flexbox>
			</CoverNavBat>
		</>
	);
};

export default CoverPage;
