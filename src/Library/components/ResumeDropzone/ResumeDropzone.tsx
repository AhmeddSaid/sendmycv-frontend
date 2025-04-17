"use client";
import { useState } from "react";
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Flex } from "@/Library/Grids/Grids";
import ImageIcon from "@/Library/components/IconGraphy/ImageIcon/ImageIcon";
import { cx } from "@/_lib/cx";
import { deepClone } from "@/_lib/deep-clone";
import { deepMerge } from "@/_lib/deep-merge";
import { parseResumeFromPdf } from "@/_lib/parse-resume-from-pdf";
import { getHasUsedAppBefore } from "@/_lib/redux/local-storage";
import { initialResumeState, setResume } from "@/_lib/redux/resumeSlice";
import { initialSettings, ShowForm } from "@/_lib/redux/settingsSlice";
import { AppDispatch, RootState } from "@/_lib/redux/store";
import { Resume } from "@/_lib/redux/types";

const ResumeDropzoneShell = styled.div`
	border-radius: 24px;
	outline: 2px dashed #e5e5e5;
	outline-offset: 1px;
	width: 850px;
	height: 180px;
	margin: 32px auto;
`;

const CvInputLabel = styled.label`
	//color: red;background: teal;

	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;

	input {
		visibility: hidden;
	}
`;

const defaultFileState = {
	name: "",
	size: 0,
	fileUrl: "",
};

const contentFake: any = {
	resume: {
		profile: {
			name: "fake Ahmed Hisham abbas",
			summary: "",
			email: "",
			phone: "",
			location: "",
			url: "",
		},
		custom: {
			descriptions: "custom field goes here",
		},
	},
	settings: {
		themeColor: "red",
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

export const ResumeDropzone = ({
	onFileUrlChange,
	className,
	playgroundView = false,
	setShow,
}: {
	onFileUrlChange: (fileUrl: string) => void;
	className?: string;
	playgroundView?: boolean;
	setShow: (show: boolean) => void;
}) => {
	const [file, setFile] = useState(defaultFileState);
	const [isHoveredOnDropzone, setIsHoveredOnDropzone] = useState(false);
	const [hasNonPdfFile, setHasNonPdfFile] = useState(false);

	const hasFile = Boolean(file.name);

	const setNewFile = (newFile: File) => {
		if (file.fileUrl) {
			URL.revokeObjectURL(file.fileUrl);
		}

		const { name, size } = newFile;
		const fileUrl = URL.createObjectURL(newFile);
		setFile({ name, size, fileUrl });
		onFileUrlChange(fileUrl);
	};

	const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		const newFile = event.dataTransfer.files[0];
		if (newFile?.name.endsWith(".pdf")) {
			setHasNonPdfFile(false);
			setNewFile(newFile);
		} else {
			setHasNonPdfFile(true);
		}
		setIsHoveredOnDropzone(false);
	};

	const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (!files) return;

		const newFile = files[0];
		if (newFile) {
			setNewFile(newFile);
		}
	};

	const onRemove = () => {
		setFile(defaultFileState);
		onFileUrlChange("");
	};

	const useAppDispatch: () => AppDispatch = useDispatch;
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

	const dispatch = useAppDispatch();

	const onImportClick = async () => {
		const resume = await parseResumeFromPdf(file.fileUrl);
		const settings = deepClone(initialSettings);

		if (getHasUsedAppBefore()) {
			const sections = Object.keys(settings.formToShow) as ShowForm[];
			const sectionToFormToShow: Record<ShowForm, boolean> = {
				workExperiences: resume.workExperiences.length > 0,
				educations: resume.educations.length > 0,
				projects: resume.projects.length > 0,
				// certificates: resume.certificates.length > 0,
				// language: resume.language.length > 0,
				skills: resume.skills.descriptions.length > 0,
				custom: resume.custom.descriptions.length > 0,
				certificates: false,
				language: false,
			};
			for (const section of sections) {
				settings.formToShow[section] = sectionToFormToShow[section];
			}
		}

		if (resume) {
			const mergedResumeState = deepMerge(initialResumeState, resume) as Resume;
			dispatch(setResume(mergedResumeState));
		}

		setShow(false);
	};

	return (
		<ResumeDropzoneShell
			className={cx(
				"flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 ",
				isHoveredOnDropzone && "border-sky-400",
				playgroundView ? "pb-6 pt-4" : "py-12",
				className,
			)}
			onDragOver={event => {
				event.preventDefault();
				setIsHoveredOnDropzone(true);
			}}
			onDragLeave={() => setIsHoveredOnDropzone(false)}
			onDrop={onDrop}
		>
			<CvInputLabel
				htmlFor="CvInput"
				className={cx(
					"within-outline-theme-purple cursor-pointer rounded-full px-6 pb-2.5 pt-2 font-semibold shadow-sm",
					playgroundView ? "border" : "bg-primary",
				)}
			>
				{/*Browse file*/}
				<Flex $gap={"18px"} $justify={"space-between"} $direction={"column"}>
					<ImageIcon />
					<p>Click or Drag to select your resume</p>
					<input
						type="file"
						className="sr-only"
						id={"CvInput"}
						accept=".pdf"
						onChange={onInputChange}
					/>
				</Flex>
			</CvInputLabel>

			<div className={cx("text-center", playgroundView ? "space-y-2" : "space-y-3")}>
				{/*{!playgroundView && (*/}
				{/*	<Image src={""} className="mx-auto h-14 w-14" alt="Add pdf" aria-hidden="true" priority />*/}
				{/*)}*/}
				{!hasFile ? (
					<>
						{/*<p className={cx("pt-3 text-gray-700", !playgroundView && "text-lg font-semibold")}>*/}
						{/*	Browse a pdf file or drop it here*/}
						{/*</p>*/}
						{/*<p className="flex text-sm text-gray-500">*/}
						{/*	/!*<LockClosedIcon className="mr-1 mt-1 h-3 w-3 text-gray-400" />*!/*/}
						{/*	File data is used locally and never leaves your browser*/}
						{/*</p>*/}
					</>
				) : (
					<div className="flex items-center justify-center gap-3 pt-3">
						<div className="pl-7 font-semibold text-gray-900">
							{file.name} - {getFileSizeString(file.size)}
						</div>
						<button
							type="button"
							className="outline-theme-blue rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
							title="Remove file"
							onClick={onRemove}
						>
							{/*<XMarkIcon className="h-6 w-6" />*/}
						</button>
					</div>
				)}
				<div className="pt-4">
					{!hasFile ? (
						<>
							{/*<CvInputLabel*/}
							{/*	htmlFor="CvInput"*/}
							{/*	className={cx(*/}
							{/*		"within-outline-theme-purple cursor-pointer rounded-full px-6 pb-2.5 pt-2 font-semibold shadow-sm",*/}
							{/*		playgroundView ? "border" : "bg-primary",*/}
							{/*	)}*/}
							{/*>*/}
							{/*	/!*Browse file*!/*/}
							{/*	<Flex $justify={"space-between"} $direction={"column"}>*/}
							{/*		<ImageIcon />*/}
							{/*		<p>Click or Drag to select your resume</p>*/}
							{/*		<input*/}
							{/*			type="file"*/}
							{/*			className="sr-only "*/}
							{/*			id={"CvInput"}*/}
							{/*			accept=".pdf"*/}
							{/*			onChange={onInputChange}*/}
							{/*		/>*/}
							{/*	</Flex>*/}
							{/*</CvInputLabel>*/}
							{hasNonPdfFile && <p className="mt-6 text-red-400">Only pdf file is supported</p>}
						</>
					) : (
						<>
							{!playgroundView && (
								<button type="button" className="btn-primary" onClick={onImportClick}>
									Import and Continue <span aria-hidden="true">→</span>
								</button>
							)}
							<p className={cx(" text-gray-500", !playgroundView && "mt-6")}>
								Note: {!playgroundView ? "Import" : "Parser"} works best on single column resume
							</p>
						</>
					)}
				</div>
			</div>
		</ResumeDropzoneShell>
	);
};

const getFileSizeString = (fileSizeB: number) => {
	const fileSizeKB = fileSizeB / 1024;
	const fileSizeMB = fileSizeKB / 1024;
	if (fileSizeKB < 1000) {
		return fileSizeKB.toPrecision(3) + " KB";
	} else {
		return fileSizeMB.toPrecision(3) + " MB";
	}
};
