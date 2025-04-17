export interface ResumeProfile {
	name: string;
	email: string;
	phone: string;
	url: string;
	summary: string;
	location: string;
}
export interface ResumeTitle {
	title: string;
}

export interface ResumeWorkExperience {
	company: string;
	jobTitle: string;
	date: string;
	descriptions: string;
}

export interface ResumeEducation {
	school: string;
	degree: string;
	date: string;
	gpa: string;
	descriptions: string;
}

export interface ResumeProject {
	project: string;
	date: string;
	descriptions: string;
}

export interface ResumeCertificates {
	name: string;
	descriptions: string;
	issueDate: string;
	expirationDate: string;
}

export interface FeaturedSkill {
	skill: string;
	rating: number;
}

export interface ResumeSkills {
	featuredSkills: FeaturedSkill[];
	descriptions: string;
}

export interface FeaturedLanguage {
	language: string;
	rating: number;
}

export interface ResumeLanguages {
	featuredLanguages: FeaturedLanguage[];
	descriptions: string;
}

export interface ResumeCustom {
	descriptions: string;
}
export interface ResumeCoverLetter {
	descriptions: string;
}

export interface Resume {
	profile: ResumeProfile;
	title: ResumeTitle;
	workExperiences: ResumeWorkExperience[];
	educations: ResumeEducation[];
	projects: ResumeProject[];
	skills: ResumeSkills;
	custom: ResumeCustom;
	languages: ResumeLanguages;
	certificates: ResumeCertificates[];
}

export type ResumeKey = keyof Resume;
