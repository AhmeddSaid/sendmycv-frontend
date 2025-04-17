import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ShowForm } from "@/_lib/redux/settingsSlice";
import { RootState } from "@/_lib/redux/store";

import {
	FeaturedLanguage,
	FeaturedSkill,
	Resume,
	ResumeCertificates,
	ResumeCoverLetter,
	ResumeEducation,
	ResumeLanguages,
	ResumeProfile,
	ResumeProject,
	ResumeSkills,
	ResumeTitle,
	ResumeWorkExperience,
} from "@/_lib/redux/types";

export const initialProfile: ResumeProfile = {
	name: "",
	summary: "",
	email: "",
	phone: "",
	location: "",
	url: "",
};
export const initialTitle: ResumeTitle = {
	title: "",
};

export const initialWorkExperience: ResumeWorkExperience = {
	company: "",
	jobTitle: "",
	date: "",
	descriptions: "",
};

export const initialEducation: ResumeEducation = {
	school: "",
	degree: "",
	gpa: "",
	date: "",
	descriptions: "",
};

export const initialProject: ResumeProject = {
	project: "",
	date: "",
	descriptions: "",
};

export const initialCertificate: ResumeCertificates = {
	name: "",
	descriptions: "",
	issueDate: "",
	expirationDate: "",
};

export const initialFeaturedSkill: FeaturedSkill = { skill: "", rating: 4 };
export const initialFeaturedSkills: FeaturedSkill[] = Array(6).fill({
	...initialFeaturedSkill,
});
export const initialSkills: ResumeSkills = {
	featuredSkills: initialFeaturedSkills,
	descriptions: "",
};

export const initialFeaturedLanguage: FeaturedLanguage = { language: "", rating: 4 };
export const initialFeaturedLanguages: FeaturedLanguage[] = Array(6).fill({
	...initialFeaturedLanguage,
});
export const initialLanguages: ResumeLanguages = {
	featuredLanguages: initialFeaturedLanguages,
	descriptions: "",
};

export const initialCustom = {
	descriptions: "",
};

export const initialResumeState: Resume = {
	profile: initialProfile,
	title: initialTitle,
	workExperiences: [initialWorkExperience],
	educations: [initialEducation],
	projects: [initialProject],
	skills: initialSkills,
	custom: initialCustom,
	languages: initialLanguages,
	certificates: [initialCertificate],
};

// Keep the field & value type in sync with CreateHandleChangeArgsWithDescriptions (components\ResumeForm\types.ts)
export type CreateChangeActionWithDescriptions<T> = {
	idx: number;
} & (
	| {
			field: Exclude<keyof T, "descriptions">;
			value: string;
	  }
	| { field: "descriptions"; value: string }
);

export const resumeSlice = createSlice({
	name: "resume",
	initialState: initialResumeState,
	reducers: {
		changeProfile: (
			draft,
			action: PayloadAction<{ field: keyof ResumeProfile; value: string }>,
		) => {
			const { field, value } = action.payload;
			draft.profile[field] = value;
		},

		changeTitle: (draft, action: PayloadAction<{ field: keyof ResumeTitle; value: string }>) => {
			const { field, value } = action.payload;
			draft.title[field] = value;
		},
		changeWorkExperiences: (
			draft,
			action: PayloadAction<CreateChangeActionWithDescriptions<ResumeWorkExperience>>,
		) => {
			const { idx, field, value } = action.payload;
			const workExperience = draft.workExperiences[idx];
			if (workExperience) workExperience[field] = value as any;
		},
		changeEducations: (
			draft,
			action: PayloadAction<CreateChangeActionWithDescriptions<ResumeEducation>>,
		) => {
			const { idx, field, value } = action.payload;
			const education = draft.educations[idx];
			if (education) education[field] = value as any;
		},
		changeProjects: (
			draft,
			action: PayloadAction<CreateChangeActionWithDescriptions<ResumeProject>>,
		) => {
			const { idx, field, value } = action.payload;
			const project = draft.projects[idx];
			if (project) project[field] = value as any;
		},
		changeCertificates: (
			draft,
			action: PayloadAction<CreateChangeActionWithDescriptions<ResumeCertificates>>,
		) => {
			const { idx, field, value } = action.payload;
			const certificate = draft.certificates[idx];
			if (certificate) certificate[field] = value as any;
		},
		changeSkills: (
			draft,
			action: PayloadAction<
				| { field: "descriptions"; value: string }
				| {
						field: "featuredSkills";
						idx: number;
						skill: string;
						rating: number;
				  }
			>,
		) => {
			const { field } = action.payload;
			if (field === "descriptions") {
				const { value } = action.payload;
				draft.skills.descriptions = value;
			} else {
				const { idx, skill, rating } = action.payload;
				const featuredSkill = draft.skills.featuredSkills[idx];
				if (!featuredSkill) return;
				featuredSkill.skill = skill;
				featuredSkill.rating = rating;
			}
		},
		changeLanguages: (
			draft,
			action: PayloadAction<
				| { field: "descriptions"; value: string }
				| {
						field: "featuredLanguages";
						idx: number;
						language: string;
						rating: number;
				  }
			>,
		) => {
			const { field } = action.payload;
			if (field === "descriptions") {
				const { value } = action.payload;
				draft.languages.descriptions = value;
			} else {
				const { idx, language, rating } = action.payload;
				const featuredLanguage = draft.languages.featuredLanguages[idx];
				if (!featuredLanguage) return;
				featuredLanguage.language = language;
				featuredLanguage.rating = rating;
			}
		},
		changeCustom: (draft, action: PayloadAction<{ field: "descriptions"; value: string }>) => {
			const { value } = action.payload;
			draft.custom.descriptions = value;
		},
		addSectionInForm: (draft, action: PayloadAction<{ form: ShowForm }>) => {
			const { form } = action.payload;
			switch (form) {
				case "workExperiences": {
					draft.workExperiences.push(structuredClone(initialWorkExperience));
					return draft;
				}
				case "educations": {
					draft.educations.push(structuredClone(initialEducation));
					return draft;
				}
				case "projects": {
					draft.projects.push(structuredClone(initialProject));
					return draft;
				}
				case "certificates": {
					draft.certificates.push(structuredClone(initialCertificate));
					return draft;
				}
			}
		},
		moveSectionInForm: (
			draft,
			action: PayloadAction<{
				form: ShowForm;
				idx: number;
				direction: "up" | "down";
			}>,
		) => {
			const { form, idx, direction } = action.payload;
			if (form !== "skills" && form !== "custom" && form !== "language") {
				if (
					(idx === 0 && direction === "up") ||
					(idx === draft[form].length - 1 && direction === "down")
				) {
					return draft;
				}

				const section = draft[form][idx];
				if (direction === "up") {
					draft[form][idx] = draft[form][idx - 1]!;
					draft[form][idx - 1] = section!;
				} else {
					draft[form][idx] = draft[form][idx + 1]!;
					draft[form][idx + 1] = section!;
				}
			}
		},
		deleteSectionInFormByIdx: (draft, action: PayloadAction<{ form: ShowForm; idx: number }>) => {
			const { form, idx } = action.payload;
			if (form !== "skills" && form !== "custom" && form !== "language") {
				draft[form].splice(idx, 1);
			}
		},
		setResume: (_, action: PayloadAction<Resume>) => {
			return action.payload;
		},
	},
});

export const {
	changeProfile,
	changeTitle,
	changeWorkExperiences,
	changeEducations,
	changeProjects,
	changeSkills,
	changeCertificates,
	changeCustom,
	changeLanguages,
	addSectionInForm,
	moveSectionInForm,
	deleteSectionInFormByIdx,
	setResume,
} = resumeSlice.actions;

export const selectResume = (state: RootState) => state.resume;
export const selectProfile = (state: RootState) => state.resume.profile;
export const selectTitle = (state: RootState) => state.resume.title;
export const selectWorkExperiences = (state: RootState) => state.resume.workExperiences;
export const selectEducations = (state: RootState) => state.resume.educations;
export const selectProjects = (state: RootState) => state.resume.projects;
export const selectSkills = (state: RootState) => state.resume.skills;
export const selectCustom = (state: RootState) => state.resume.custom;
export const selectLanguage = (state: RootState) => state.resume.languages;
export const selectCertificates = (state: RootState) => state.resume.certificates;

export default resumeSlice.reducer;
