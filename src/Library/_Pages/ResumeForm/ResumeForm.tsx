"use client";
import React, {useState} from "react";
import {FlexboxSpacer} from "@/Library/components/FlexboxSpacer"; // const formTypeToComponent: { [type in ShowForm]: () => JSX.Element } = {
import {ProfileForm} from "@/Library/components/ResumeForm/ProfileForm";
import {ThemeForm} from "@/Library/components/ResumeForm/ThemeForm";
import {cx} from "@/_lib/cx";

// const formTypeToComponent: { [type in ShowForm]: () => JSX.Element } = {
//     workExperiences: WorkExperiencesForm,
//     educations: EducationsForm,
//     projects: ProjectsForm,
//     skills: SkillsForm,
//     custom: CustomForm,
// };

const ResumeForm = () => {
	// const formsOrder = useAppSelector(selectFormsOrder);
	const [isHover, setIsHover] = useState(false);

	return (
		<div
			className={cx(
				"flex justify-center scrollbar-thin scrollbar-track-gray-100 md:h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end md:overflow-y-scroll",
				isHover ? "scrollbar-thumb-gray-200" : "scrollbar-thumb-gray-100",
			)}
			onMouseOver={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<section className="flex max-w-2xl flex-col gap-8 p-[var(--resume-padding)] bg-sky-600">
				<ProfileForm />
				{/*{formsOrder.map((form) => {*/}
				{/*    const Component = formTypeToComponent[form];*/}
				{/*    return <Component key={form}/>;*/}
				{/*})}*/}
				<ThemeForm />
				<br />
			</section>
			{/*<FlexboxSpacer maxWidth={50} className="hidden md:block" />*/}
		</div>
	);
};

export default ResumeForm;
