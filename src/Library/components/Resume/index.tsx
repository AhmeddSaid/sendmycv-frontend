"use client";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { FlexboxSpacer } from "@/Library/components/FlexboxSpacer";
import {
	ResumeControlBarBorder,
	ResumeControlBarCSR,
} from "@/Library/components/Resume/ResumeControlBar";
import { ResumeIframeCSR } from "@/Library/components/Resume/ResumeIFrame";
import { ResumePDF } from "@/Library/components/Resume/ResumePDF";
import { NonEnglishFontsCSSLazyLoader } from "@/Library/components/fonts/NonEnglishFontsCSSLoader";
import {
	useRegisterReactPDFFont,
	useRegisterReactPDFHyphenationCallback,
} from "@/Library/components/fonts/hooks";
import { DEBUG_RESUME_PDF_FLAG } from "@/_lib/constants";
import { useAppSelector } from "@/_lib/redux/hooks";
import { selectResume } from "@/_lib/redux/resumeSlice";
import { selectSettings } from "@/_lib/redux/settingsSlice";
import { ResumeCertificates, ResumeLanguages } from "@/_lib/redux/types";

interface FakeData {
	resume: {
		profile: {
			name: string;
			summary: string;
			email: string;
			phone: string;
			location: string;
			url: string;
		};
		workExperiences: {
			company: string;
			jobTitle: string;
			date: string;
			descriptions: string;
		}[];
		educations: {
			school: string;
			degree: string;
			gpa: string;
			date: string;
			descriptions: string;
		}[];
		projects: {
			project: string;
			date: string;
			descriptions: string;
		}[];
		skills: {
			featuredSkills: {
				skill: string;
				rating: number;
			}[];
			descriptions: string;
		};
		custom: {
			descriptions: string;
		};

		languages: ResumeLanguages;
		certificates: ResumeCertificates[];
	};
	settings: {
		themeColor: string;
		fontFamily: string;
		fontSize: string;
		documentSize: string;
		formToShow: {
			workExperiences: boolean;
			educations: boolean;
			projects: boolean;
			skills: boolean;
			custom: boolean;
		};
		formToHeading: {
			workExperiences: string;
			educations: string;
			projects: string;
			skills: string;
			custom: string;
		};
		formsOrder: string[];
		showBulletPoints: {
			educations: boolean;
			projects: boolean;
			skills: boolean;
			custom: boolean;
		};
	};
	textAreaStore?: {
		textAreaValue: string;
	};
}

const Container = styled.div`
	position: static;
	top: 0;
	display: flex;
	justify-content: center;
	margin-top: 60px;
	@media (min-width: 768px) {
		justify-content: flex-start;
	}
`;

const Spacer = styled(FlexboxSpacer)`
	display: none;
	max-width: 50px;

	@media (min-width: 768px) {
		display: block;
	}
`;

const ResumeWrapper = styled.div`
	position: relative;
`;

const Section = styled.section<{ preview?: boolean }>`
	height: ${({ preview }) => (preview ? "auto" : "calc(100vh - 3.5rem - 3rem)")};
	overflow: ${({ preview }) => (preview ? "unset" : "hidden")};
	@media (min-width: 768px) {
		padding: 1.5rem;
	}
`;

export const Resume = ({
	size = 0.8,
	toolbar = true,
	data,
	isCoverLetter,
}: {
	size?: number;
	toolbar?: boolean;
	data?: FakeData;
	isCoverLetter?: boolean;
}) => {
	const [scale, setScale] = useState(size);
	const resume = useAppSelector(selectResume);
	const settings = useAppSelector(selectSettings);
	const document = useMemo(
		() => (
			<ResumePDF isCoverLetter={isCoverLetter} resume={resume} settings={settings} isPDF={true} />
		),
		[resume, settings, isCoverLetter],
	);

	useRegisterReactPDFFont();
	useRegisterReactPDFHyphenationCallback(settings.fontFamily);

	return (
		<>
			<NonEnglishFontsCSSLazyLoader />
			<Container>
				{/*<Spacer maxWidth={50}/>*/}
				<ResumeWrapper>
					<Section preview={!!data}>
						<ResumeIframeCSR
							documentSize={settings.documentSize}
							scale={scale}
							enablePDFViewer={DEBUG_RESUME_PDF_FLAG}
						>
							<ResumePDF
								isCoverLetter={isCoverLetter}
								//@ts-ignore
								resume={data ? data.resume : resume}
								settings={settings}
								isPDF={DEBUG_RESUME_PDF_FLAG}
							/>
						</ResumeIframeCSR>
					</Section>
					{toolbar ? (
						<ResumeControlBarCSR
							pdf={<ResumePDF resume={resume} settings={settings} isPDF={DEBUG_RESUME_PDF_FLAG} />}
							scale={scale}
							setScale={setScale}
							documentSize={settings.documentSize}
							document={document}
							fileName={`${resume.profile.name} - Resume`}
							isCoverLetter={isCoverLetter}
						/>
					) : null}
				</ResumeWrapper>

				{data ? null : <ResumeControlBarBorder />}
			</Container>
		</>
	);
};
