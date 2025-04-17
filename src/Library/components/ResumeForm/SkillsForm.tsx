import { useState } from "react";
import { toast } from "sonner";
import { Row } from "@/Library/Grids/Grids";
import { Form } from "@/Library/components/ResumeForm/Form";
import { FeaturedSkillInput } from "@/Library/components/ResumeForm/Form/FeaturedSkillInput";
import { InputGroupWrapper, Textarea } from "@/Library/components/ResumeForm/Form/InputGroup";
import { AIButton, FormContainer } from "@/Library/components/ResumeForm/index";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { changeSkills, selectSkills } from "@/_lib/redux/resumeSlice";
import { selectThemeColor } from "@/_lib/redux/settingsSlice";
import { validateSentenceByLength } from "@/app/[locale]/(protected)/cover/_CoverLetterutils/SentenceLength";
import { GenerateWithAiAction } from "@/app/[locale]/(protected)/cover/action";

export const SkillsForm = () => {
	const skills = useAppSelector(selectSkills);
	const dispatch = useAppDispatch();
	const { featuredSkills, descriptions } = skills;
	const form = "skills";
	// const showBulletPoints = useAppSelector(selectShowBulletPoints(form));
	const themeColor = useAppSelector(selectThemeColor) || "#38bdf8";

	const handleSkillsChange = (field: "descriptions", value: string) => {
		dispatch(changeSkills({ field, value }));
	};
	const handleFeaturedSkillsChange = (idx: number, skill: string, rating: number) => {
		dispatch(changeSkills({ field: "featuredSkills", idx, skill, rating }));
	};

	const [loading, setLoading] = useState(false);

	const GenerateWithAIContent = async (context: string) => {
		if (!validateSentenceByLength(context, 10)) {
			toast.error("Too short description, Write your target job to get skills.");
			return;
		}
		setLoading(true);
		try {
			const res = await GenerateWithAiAction({
				context: descriptions,
				jobDescription: context,
				scope: "SKILL",
			});

			dispatch(changeSkills({ field: "descriptions", value: res.content }));
			toast.success("Generated successfully!");
		} catch {
			toast.error("Something went wrong!");
		}

		setLoading(false);
	};

	return (
		<FormContainer>
			<Form form={form}>
				<div className="col-span-full grid grid-cols-6 gap-3">
					<div className="relative col-span-full">
						{/*<BulletListTextarea*/}
						{/*  label="Skills List"*/}
						{/*  labelClassName="col-span-full"*/}
						{/*  name="descriptions"*/}
						{/*  placeholder="Bullet points"*/}
						{/*  value={descriptions}*/}
						{/*  onChange={handleSkillsChange}*/}
						{/*  showBulletPoints={showBulletPoints}*/}
						{/*/>*/}

						<Textarea
							label="Skills List"
							// labelClassName="col-span-full"
							name="descriptions"
							placeholder="Write your target job. Example: I have skills of junior frontend eningeer"
							value={descriptions}
							onChange={handleSkillsChange}
							generateWithAI={
								<AIButton loading={loading} onClick={() => GenerateWithAIContent(descriptions)}>
									Generate with ai
								</AIButton>
							}
						/>

						{/*<div className="absolute left-[4.5rem] top-[0.07rem]">*/}
						{/*  <BulletListIconButton*/}
						{/*    showBulletPoints={showBulletPoints}*/}
						{/*    onClick={handleShowBulletPoints}*/}
						{/*  />*/}
						{/*</div>*/}
					</div>
					<div className="col-span-full mb-4 mt-6 border-t-2 border-dotted border-gray-200" />
					<InputGroupWrapper label="Featured Skills (Optional)">
						<p>
							Featured skills is optional to highlight top skills, with more circles mean higher
							proficiency.
						</p>
					</InputGroupWrapper>
					<Row>
						{featuredSkills.map(({ skill, rating }, idx) => (
							<FeaturedSkillInput
								key={idx}
								className="col-span-3"
								skill={skill}
								rating={rating}
								setSkillRating={(newSkill, newRating) => {
									handleFeaturedSkillsChange(idx, newSkill, newRating);
								}}
								placeholder={`Featured Skill ${idx + 1}`}
								circleColor={themeColor}
							/>
						))}
					</Row>
				</div>
			</Form>
		</FormContainer>
	);
};
