"use client";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { CertificatesForm } from "@/Library/components/ResumeForm/CertificatesForm";
import { CustomForm } from "@/Library/components/ResumeForm/CustomForm";
import { EducationsForm } from "@/Library/components/ResumeForm/EducationsForm";
import { LanguageForm } from "@/Library/components/ResumeForm/LanguageForm";
import { ProfileForm } from "@/Library/components/ResumeForm/ProfileForm";
import { ProjectsForm } from "@/Library/components/ResumeForm/ProjectsForm";
import { SkillsForm } from "@/Library/components/ResumeForm/SkillsForm";
import { ThemeForm } from "@/Library/components/ResumeForm/ThemeForm";
import { WorkExperiencesForm } from "@/Library/components/ResumeForm/WorkExperiencesForm";

import { useAppSelector, useSetInitialStore } from "@/_lib/redux/hooks";
import { selectFormsOrder, Settings, ShowForm } from "@/_lib/redux/settingsSlice";
import { Resume } from "@/_lib/redux/types";

const formTypeToComponent: { [type in ShowForm]: () => ReactNode | ReactNode[] | null } = {
	workExperiences: WorkExperiencesForm,
	educations: EducationsForm,
	projects: ProjectsForm,
	skills: SkillsForm,
	custom: CustomForm,
	language: LanguageForm,
	certificates: CertificatesForm,
	default: () => null,
} as unknown as { [type in ShowForm]: () => ReactNode | ReactNode[] | null };

export const FormContainer = styled.div`
	//background-color: lightgreen;
	margin-top: 20px;
	padding: 24px;
	border-radius: 36px;
	border: 1px solid rgba(255, 255, 255, 0.48);
`;

const ResumeFormContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const AIButtonStyles = styled.button<{ loading?: boolean }>`
	padding: 8px;
	color: #fff;
	border: none;
	cursor: pointer;
	background: linear-gradient(90deg, #5a5aff 0%, #000099 100%);
	background-size: 200% 200%;
`;

interface AIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	loading?: boolean;
}

export const AIButton = ({ children, loading = false, ...rest }: AIButtonProps) => {
	return (
		<>
			<AIButtonStyles {...rest}>{loading ? "Loading..." : children}</AIButtonStyles>
		</>
	);
};

export const ResumeForm = ({
	isCoverLetter = false,
	content,
}: {
	isCoverLetter?: boolean;
	content?: { resume: Resume; settings: Settings; title: string; coverLetter: any } | undefined;
}) => {
	useSetInitialStore(content);
	const formsOrder = useAppSelector(selectFormsOrder);

	return (
		<div>
			<ResumeFormContainer className="flex max-w-2xl flex-col gap-8 p-[var(--resume-padding)] bg-sky-600">
				<FormContainer>
					<ProfileForm />
				</FormContainer>
				{isCoverLetter ? (
					<CustomForm isCoverLetter={isCoverLetter} />
				) : (
					formsOrder.map((form: any) => {
						const Component = formTypeToComponent[form as keyof typeof formTypeToComponent];
						return <Component key={form} />;
					})
				)}

				<ThemeForm isCoverLetter={isCoverLetter} />
			</ResumeFormContainer>
		</div>
	);
};
