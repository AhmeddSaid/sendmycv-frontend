import { useState } from "react";
import { toast } from "sonner";
import { Form, FormSection } from "@/Library/components/ResumeForm/Form";
import { Textarea } from "@/Library/components/ResumeForm/Form/InputGroup";
import { AIButton, FormContainer } from "@/Library/components/ResumeForm/index";
import { CreateHandleChangeArgsWithDescriptions } from "@/Library/components/ResumeForm/types";
import CvInput from "@/Library/components/UI/CVInput";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { changeProjects, selectProjects } from "@/_lib/redux/resumeSlice";
import { ResumeProject } from "@/_lib/redux/types";
import { validateSentenceByLength } from "@/app/[locale]/(protected)/cover/_CoverLetterutils/SentenceLength";
import { GenerateWithAiAction } from "@/app/[locale]/(protected)/cover/action";

export const ProjectsForm = () => {
	const projects = useAppSelector(selectProjects);
	const dispatch = useAppDispatch();
	const showDelete = projects.length > 1;

	const [loading, setLoading] = useState(false);

	const GenerateWithAIContent = async (idx: number, context: string) => {
		if (!validateSentenceByLength(context)) {
			toast.error("Too short description, please enter more context.");
			return;
		}
		setLoading(true);
		try {
			const res = await GenerateWithAiAction({
				context: projects[idx]?.descriptions[0]!,
				jobDescription: context,
				scope: "PROJECT",
			});

			dispatch(changeProjects({ idx, field: "descriptions", value: [res.content] } as any));

			toast.success("Generated successfully!");
		} catch {
			toast.error("Something went wrong!");
		}

		setLoading(false);
	};

	return (
		<FormContainer>
			<Form form="projects" addButtonText="Add Project">
				{projects.map(({ project, date, descriptions }, idx) => {
					const handleProjectChange = (
						...[field, value]: CreateHandleChangeArgsWithDescriptions<ResumeProject>
					) => {
						dispatch(changeProjects({ idx, field, value } as any));
					};
					const showMoveUp = idx !== 0;
					const showMoveDown = idx !== projects.length - 1;

					return (
						<FormSection
							key={idx}
							form="projects"
							idx={idx}
							showMoveUp={showMoveUp}
							showMoveDown={showMoveDown}
							showDelete={showDelete}
							deleteButtonTooltipText={"Delete project"}
						>
							<CvInput
								name="project"
								label="Project Name"
								placeholder="OpenResume"
								value={project}
								onChange={handleProjectChange}
							/>
							<CvInput
								name="date"
								label="Date"
								placeholder="Winter 2022"
								value={date}
								onChange={handleProjectChange}
							/>
							{/*<BulletListTextarea*/}
							{/*  name="descriptions"*/}
							{/*  label="Description"*/}
							{/*  placeholder="Bullet points"*/}
							{/*  value={descriptions}*/}
							{/*  onChange={handleProjectChange}*/}
							{/*  labelClassName="col-span-full"*/}
							{/*/>*/}

							<Textarea
								label="Description"
								name="descriptions"
								placeholder="Entrepreneur and educator obsessed with making education free for anyone"
								value={descriptions}
								onChange={handleProjectChange}
								generateWithAI={
									<AIButton
										loading={loading}
										onClick={() => GenerateWithAIContent(idx, descriptions)}
									>
										Generate with ai
									</AIButton>
								}
							/>

							{/*<input type="text" onChange={(e) => dispatcha(setValue(e.target.value))}/>*/}
						</FormSection>
					);
				})}
			</Form>
		</FormContainer>
	);
};
