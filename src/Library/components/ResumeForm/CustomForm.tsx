import { Form } from "@/Library/components/ResumeForm/Form";
import { Textarea } from "@/Library/components/ResumeForm/Form/InputGroup";
import { FormContainer } from "@/Library/components/ResumeForm/index";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { changeCustom, selectCustom } from "@/_lib/redux/resumeSlice";
// import {selectShowBulletPoints} from "@/_lib/redux/settingsSlice";

export const CustomForm = ({ isCoverLetter }: { isCoverLetter: boolean }) => {
	const custom = useAppSelector(selectCustom);
	const dispatch = useAppDispatch();
	const { descriptions } = custom;
	const form = "custom";
	// const showBulletPoints = useAppSelector(selectShowBulletPoints(form));

	const handleCustomChange = (field: "descriptions", value: string) => {
		dispatch(changeCustom({ field, value }));
	};

	// const handleShowBulletPoints = (value: boolean) => {
	//     dispatch(changeShowBulletPoints({field: form, value}));
	// };

	return (
		<FormContainer>
			<Form isCoverLetter={isCoverLetter} form={form}>
				<div className="col-span-full grid grid-cols-6 gap-3">
					<div className="relative col-span-full">
						<Textarea
							label={` ${isCoverLetter ? " Cover Letter   " : " Custom Section"}    `}
							name="descriptions"
							placeholder="Enter your cover letter details"
							value={descriptions}
							onChange={handleCustomChange}
						/>
					</div>
				</div>
			</Form>
		</FormContainer>
	);
};
