export const CoverLetterInit = {
	resume: {
		profile: {
			name: "",
			summary: "",
			email: "",
			phone: "",
			location: "",
			url: "",
		},
		title: {
			title: "",
		},
		workExperiences: [
			{
				company: "",
				jobTitle: "",
				date: "",
				descriptions: "",
			},
		],
		educations: [
			{
				school: "",
				degree: "",
				gpa: "",
				date: "",
				descriptions: "",
			},
		],
		projects: [
			{
				project: "",
				date: "",
				descriptions: "",
			},
		],
		skills: {
			featuredSkills: [
				{
					skill: "",
					rating: 4,
				},
				{
					skill: "",
					rating: 4,
				},
				{
					skill: "",
					rating: 4,
				},
				{
					skill: "",
					rating: 4,
				},
				{
					skill: "",
					rating: 4,
				},
				{
					skill: "",
					rating: 4,
				},
			],
			descriptions: "",
		},
		custom: {
			descriptions: "",
		},
		languages: {
			featuredLanguages: [
				{
					language: "",
					rating: 4,
				},
				{
					language: "",
					rating: 4,
				},
				{
					language: "",
					rating: 4,
				},
				{
					language: "",
					rating: 4,
				},
				{
					language: "",
					rating: 4,
				},
				{
					language: "",
					rating: 4,
				},
			],
			descriptions: "",
		},
		certificates: [
			{
				name: "",
				descriptions: "",
				issueDate: "",
				expirationDate: "",
			},
		],
	},
	settings: {
		themeColor: "#38bdf8",
		fontFamily: "Roboto",
		fontSize: "11",
		documentSize: "Letter",
		formToShow: {
			workExperiences: true,
			educations: true,
			projects: true,
			skills: true,
			custom: true,
			language: true,
			certificates: true,
		},
		formToHeading: {
			workExperiences: "WORK EXPERIENCE",
			educations: "EDUCATION",
			projects: "PROJECT",
			skills: "SKILLS",
			custom: "CUSTOM SECTION",
			language: "LANGUAGE",
			certificates: "CERTIFICATES",
		},
		formsOrder: [
			"workExperiences",
			"educations",
			"projects",
			"certificates",
			"skills",
			"language",
			"custom",
		],
		showBulletPoints: {
			educations: true,
			projects: true,
			skills: true,
			custom: true,
			language: true,
			certificates: true,
		},
	},
	coverLetter: {
		descriptions: "",
	},
};
