"use client";

import { Form, FormSection } from "@/Library/components/ResumeForm/Form";
import { StyledDiv5 } from "@/Library/components/ResumeForm/Form/EducationsForm.styles";
import { Textarea } from "@/Library/components/ResumeForm/Form/InputGroup";
import { FormContainer } from "@/Library/components/ResumeForm/index";
import { CreateHandleChangeArgsWithDescriptions } from "@/Library/components/ResumeForm/types";
import CvInput from "@/Library/components/UI/CVInput";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { changeEducations, selectEducations } from "@/_lib/redux/resumeSlice";

import { changeShowBulletPoints, selectShowBulletPoints } from "@/_lib/redux/settingsSlice";
import { ResumeEducation } from "@/_lib/redux/types";

export const EducationsForm = () => {
	const educations: {
		school: string;
		degree: string;
		date: string;
		gpa: string;
		descriptions: string;
	}[] = useAppSelector(selectEducations);
	const dispatch = useAppDispatch();
	const showDelete = educations.length > 1;
	const form = "educations";
	const showBulletPoints = useAppSelector(selectShowBulletPoints(form));

	return (
		<FormContainer>
			<Form form={form} addButtonText="Add School">
				{educations.map(({ school, degree, gpa, date, descriptions }, idx) => {
					const handleEducationChange = (
						...[field, value]: CreateHandleChangeArgsWithDescriptions<ResumeEducation>
					) => {
						dispatch(changeEducations({ idx, field, value } as any));
					};

					const handleShowBulletPoints = (value: boolean) => {
						dispatch(changeShowBulletPoints({ field: form, value }));
					};

					const showMoveUp = idx !== 0;
					const showMoveDown = idx !== educations.length - 1;

					return (
						<FormSection
							key={idx}
							form="educations"
							idx={idx}
							showMoveUp={showMoveUp}
							showMoveDown={showMoveDown}
							showDelete={showDelete}
							deleteButtonTooltipText="Delete school"
						>
							<CvInput
								label="School"
								name="school"
								placeholder="Cornell University"
								value={school}
								onChange={handleEducationChange}
							/>
							<CvInput
								label="Date"
								name="date"
								placeholder="May 2018"
								value={date}
								onChange={handleEducationChange}
							/>
							<CvInput
								label="Degree & Major"
								name="degree"
								placeholder="Bachelor of Science in Computer Engineering"
								value={degree}
								onChange={handleEducationChange}
							/>
							<CvInput
								label="GPA"
								name="gpa"
								placeholder="3.81"
								value={gpa}
								onChange={handleEducationChange}
							/>
							<StyledDiv5 className="relative col-span-full">
								{/*<BulletListTextarea*/}
								{/*  label="Additional Information (Optional)"*/}
								{/*  labelClassName="col-span-full"*/}
								{/*  name="descriptions"*/}
								{/*  placeholder="Free paragraph space to list out additional activities, courses, awards etc"*/}
								{/*  value={descriptions}*/}
								{/*  onChange={handleEducationChange}*/}
								{/*  showBulletPoints={showBulletPoints}*/}
								{/*/>*/}

								<Textarea
									label="Additional Information (Optional)"
									// labelClassName="col-span-full"
									name="descriptions"
									placeholder="Entrepreneur and educator obsessed with making education free for anyone"
									value={descriptions}
									onChange={handleEducationChange}
								/>

								{/*<StyledDiv6 className="absolute left-[15.6rem] top-[0.07rem]">*/}
								{/*    <BulletListIconButton*/}
								{/*        showBulletPoints={showBulletPoints}*/}
								{/*        onClick={handleShowBulletPoints}*/}
								{/*    />*/}
								{/*</StyledDiv6>*/}
							</StyledDiv5>
						</FormSection>
					);
				})}
			</Form>
		</FormContainer>
	);
};
