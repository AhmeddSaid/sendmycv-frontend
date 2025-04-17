"use client";
import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import { CoverLetterInit } from "../../../../../../CVInit";
import styles from "../../../../../Library/Grids/Spaces.module.css";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import ImportResume from "@/Library/_Pages/PdfImport/PdfImport";
import { Resume } from "@/Library/components/Resume";
import { ResumeForm } from "@/Library/components/ResumeForm";
import { store } from "@/_lib/redux/store";
import { SaveCoverLetter } from "@/app/[locale]/(protected)/cover/_CoverLetterutils/SaveCVorCoverletter";

const MainContainer = styled(Section)`
	position: relative;
	overflow: hidden;
`;
const GridContainer = styled(Row)`
	.fixed {
		position: relative;

		& > * {
			@media screen and (min-width: 991px) {
				position: fixed;
			}
			top: 0;
		}
	}
`;

const CreateCVPage = ({ isCoverLetter }: { isCoverLetter: boolean }) => {
	const [show, setShow] = React.useState(true);

	// @ts-ignore
	return (
		<>
			<Provider store={store}>
				<Section>
					{show && !isCoverLetter ? (
						<ImportResume setShow={setShow} />
					) : (
						<MainContainer>
							<SaveCoverLetter isCoverLetter={isCoverLetter} />
							<GridContainer className={styles.marginTop64}>
								<Col $lg={6}>
									{/*@ts-ignore*/}
									<ResumeForm content={CoverLetterInit} isCoverLetter={isCoverLetter} />
								</Col>
								<Col $lg={6} className={"fixed"}>
									<Resume isCoverLetter={isCoverLetter} />
								</Col>
							</GridContainer>
						</MainContainer>
					)}
				</Section>
			</Provider>
		</>
	);
};

export default CreateCVPage;
