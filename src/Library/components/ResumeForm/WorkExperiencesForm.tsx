import { useState } from "react";
import { toast } from "sonner";
import { Form, FormSection } from "@/Library/components/ResumeForm/Form";
import { Textarea } from "@/Library/components/ResumeForm/Form/InputGroup";
import { AIButton, FormContainer } from "@/Library/components/ResumeForm/index";
import CvInput from "@/Library/components/UI/CVInput";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { changeWorkExperiences, selectWorkExperiences } from "@/_lib/redux/resumeSlice";
import { ResumeWorkExperience } from "@/_lib/redux/types";
import { validateSentenceByLength } from "@/app/[locale]/(protected)/cover/_CoverLetterutils/SentenceLength";
import { GenerateWithAiAction } from "@/app/[locale]/(protected)/cover/action";

export const WorkExperiencesForm = () => {
	const workExperiences: {
		company: string;
		jobTitle: string;
		date: string;
		descriptions: string;
	}[] = useAppSelector(selectWorkExperiences);
	const dispatch = useAppDispatch();

	const showDelete = workExperiences.length > 1;
	const [loading, setLoading] = useState(false);

	const GenerateWithAIContent = async (idx: number, context: string) => {
		if (!validateSentenceByLength(context)) {
			toast.error("Too short description, please enter more context.");
			return;
		}
		setLoading(true);
		try {
			const res = await GenerateWithAiAction({
				context: workExperiences[idx]?.descriptions[0]!,
				jobDescription: context,
				scope: "WORK",
			});

			dispatch(
				changeWorkExperiences({
					idx,
					field: "descriptions",
					value: [res.content],
				} as any),
			);

			toast.success("Generated successfully!");
		} catch {
			toast.error("Something went wrong!");
		}

		setLoading(false);
	};

	return (
		<FormContainer>
			<Form form="workExperiences" addButtonText="Add Job">
				{workExperiences.map(({ company, jobTitle, date, descriptions }, idx) => {
					const handleWorkExperienceChange = (
						field: keyof ResumeWorkExperience,
						value: string | string[],
					) => {
						dispatch(
							changeWorkExperiences({
								idx,
								field,
								value: field === "descriptions" ? [value] : value,
							} as any),
						);
					};
					const showMoveUp = idx !== 0;
					const showMoveDown = idx !== workExperiences.length - 1;

					return (
						<FormSection
							key={idx}
							form="workExperiences"
							idx={idx}
							showMoveUp={showMoveUp}
							showMoveDown={showMoveDown}
							showDelete={showDelete}
							deleteButtonTooltipText="Delete job"
						>
							<CvInput
								label="Company"
								name="company"
								placeholder="Khan Academy"
								value={company}
								onChange={handleWorkExperienceChange}
							/>
							<CvInput
								label="Job Title"
								name="jobTitle"
								placeholder="Software Engineer"
								value={jobTitle}
								onChange={handleWorkExperienceChange}
							/>
							<CvInput
								type={"text"}
								label="Date"
								name="date"
								placeholder="Jun 2022 - Present"
								value={date}
								onChange={handleWorkExperienceChange}
							/>
							<Textarea
								label="Description"
								name="descriptions"
								placeholder="Entrepreneur and educator obsessed with making education free for anyone"
								value={descriptions}
								onChange={handleWorkExperienceChange}
								generateWithAI={
									<AIButton
										loading={loading}
										onClick={() => GenerateWithAIContent(idx, descriptions)}
									>
										Generate with ai
									</AIButton>
								}
							/>
						</FormSection>
					);
				})}
			</Form>
		</FormContainer>
	);
};
