"use client";
import { useDispatch, useSelector } from "react-redux";
import { BaseForm } from "@/Library/components/ResumeForm/Form";
import { Textarea } from "@/Library/components/ResumeForm/Form/InputGroup";
import CvInput from "@/Library/components/UI/CVInput";
import { changeCoverLetter } from "@/_lib/redux/SetTextAreaSlice";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { changeProfile, selectProfile } from "@/_lib/redux/resumeSlice";
import { ResumeCoverLetter, ResumeProfile } from "@/_lib/redux/types";

export const ProfileForm = () => {
	const profile: {
		name: string;
		email: string;
		phone: string;
		url: string;
		summary: string;
		location: string;
	} = useAppSelector(selectProfile);
	const descriptions = useSelector((state: any) => state.coverLetter as any);

	const dispatch2 = useDispatch();
	const dispatch = useAppDispatch();
	const { name, email, phone, url, summary, location } = profile;

	const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
		dispatch(changeProfile({ field, value }));
	};
	const handleTitleChange = (field: keyof ResumeCoverLetter, value: string) => {
		dispatch2(changeCoverLetter({ field, value }));
	};

	return (
		<BaseForm>
			<CvInput
				label="Title"
				name="descriptions"
				placeholder="Enter a title"
				value={descriptions.descriptions}
				onChange={handleTitleChange}
			/>

			<CvInput
				label="Name"
				name="name"
				placeholder="Steve jobs"
				value={name}
				onChange={handleProfileChange}
			/>
			<Textarea
				label="Objective"
				name="summary"
				placeholder="Entrepreneur and educator obsessed with making education free for anyone"
				value={summary}
				onChange={handleProfileChange}
			/>
			<CvInput
				label="Email"
				name="email"
				placeholder="hello@sendmycv.ai"
				value={email}
				onChange={handleProfileChange}
			/>
			<CvInput
				label="Phone"
				name="phone"
				placeholder="(123)456-7890"
				value={phone}
				onChange={handleProfileChange}
			/>
			<CvInput
				label="Website"
				name="url"
				placeholder="linkedin.com/in/sendmycv"
				value={url}
				onChange={handleProfileChange}
			/>
			<CvInput
				label="Location"
				name="location"
				placeholder="NYC, NY"
				value={location}
				onChange={handleProfileChange}
			/>
		</BaseForm>
	);
};
