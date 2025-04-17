import React from "react";
import { ExpanderWithHeightTransition } from "@/Library/components/ExpanderWithHeightTransition";
import PlusIcon from "@/Library/components/IconGraphy/PlusIcon/PlusIcon";
import {
	FlexContainer,
	FlexContainer0,
	FlexContainerr,
	GridContainer,
	Headinginput,
	StyledDiv,
	StyledDiv1,
	StyledDiv2,
	StyledDiv3,
	StyledDiv4,
} from "@/Library/components/ResumeForm/Form/Form.styles";
import {
	DeleteIconButton,
	MoveIconButton,
	ShowIconButton,
} from "@/Library/components/ResumeForm/Form/IconButton";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import {
	addSectionInForm,
	deleteSectionInFormByIdx,
	moveSectionInForm,
} from "@/_lib/redux/resumeSlice";
import {
	changeFormHeading,
	changeFormOrder,
	changeShowForm,
	selectHeadingByForm,
	selectIsFirstForm,
	selectIsLastForm,
	selectShowByForm,
	ShowForm,
} from "@/_lib/redux/settingsSlice";
// import {boolean, number, string} from "yup";

/**
 * BaseForm is the bare bone form, i.e. just the outline with no title and no control buttons.
 * ProfileForm uses this to compose its outline.
 */
export const BaseForm = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<section
		className={`flex flex-col gap-3 rounded-md bg-white p-6 pt-4 shadow transition-opacity duration-200 ${className}`}
	>
		{children}
	</section>
);

// const FORM_TO_ICON: { [section in ShowForm]: typeof BuildingOfficeIcon } = {
//   workExperiences: BuildingOfficeIcon,
//   educations: AcademicCapIcon,
//   projects: LightBulbIcon,
//   skills: WrenchIcon,
//   custom: WrenchIcon,
// };

export const Form = ({
	form,
	addButtonText,
	children,
	isCoverLetter,
}: {
	form: ShowForm;
	addButtonText?: string;
	children: React.ReactNode;
	isCoverLetter?: boolean;
}) => {
	const showForm = useAppSelector(selectShowByForm(form));
	const heading = useAppSelector(selectHeadingByForm(form));

	const dispatch = useAppDispatch();
	const setShowForm = (showForm: boolean) => {
		dispatch(changeShowForm({ field: form, value: showForm }));
	};
	const setHeading = (heading: string) => {
		dispatch(changeFormHeading({ field: form, value: heading }));
	};

	const isFirstForm = useAppSelector(selectIsFirstForm(form));
	const isLastForm = useAppSelector(selectIsLastForm(form));

	const handleMoveClick = (type: "up" | "down") => {
		dispatch(changeFormOrder({ form, type }));
	};

	// const Icon = FORM_TO_ICON[form];

	return (
		<BaseForm
			className={`bg-emerald-700 transition-opacity duration-200 ${
				showForm ? "pb-6" : "pb-2 opacity-60"
			}`}
		>
			<FlexContainer
				isCoverLetter={isCoverLetter}
				className="flex items-center justify-between gap-4"
			>
				{!isCoverLetter && (
					<FlexContainerr className="flex grow items-center gap-2">
						{/*<Icon className="h-6 w-6 text-gray-600" aria-hidden="true" />*/}

						<Headinginput
							placeholder={form}
							type="text"
							className="block w-full border-b border-transparent text-lg font-semibold tracking-wide text-gray-900 outline-none hover:border-gray-300 hover:shadow-sm focus:border-gray-300 focus:shadow-sm"
							value={heading}
							onChange={e => setHeading(e.target.value)}
						/>
					</FlexContainerr>
				)}

				{!isCoverLetter && (
					<FlexContainerr className="flex items-center gap-0.5">
						{!isFirstForm && <MoveIconButton type="up" onClick={handleMoveClick} />}
						{!isLastForm && <MoveIconButton type="down" onClick={handleMoveClick} />}
						<ShowIconButton show={showForm} setShow={setShowForm} />
					</FlexContainerr>
				)}
			</FlexContainer>

			<ExpanderWithHeightTransition expanded={showForm}>{children}</ExpanderWithHeightTransition>

			{showForm && addButtonText && (
				<FlexContainer0 className="mt-2 flex justify-end">
					<button
						type="button"
						onClick={() => {
							dispatch(addSectionInForm({ form }));
						}}
						className="flex items-center rounded-md bg-white py-2 pl-3 pr-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						<PlusIcon />
						{addButtonText}
					</button>
				</FlexContainer0>
			)}
		</BaseForm>
	);
};

export const FormSection = ({
	form,
	idx,
	showMoveUp,
	showMoveDown,
	showDelete,
	deleteButtonTooltipText,
	children,
}: {
	form: ShowForm;
	idx: number;
	showMoveUp: boolean;
	showMoveDown: boolean;
	showDelete: boolean;
	deleteButtonTooltipText: string;
	children: React.ReactNode;
}) => {
	const dispatch = useAppDispatch();
	const handleDeleteClick = () => {
		dispatch(deleteSectionInFormByIdx({ form, idx }));
	};
	const handleMoveClick = (direction: "up" | "down") => {
		dispatch(moveSectionInForm({ form, direction, idx }));
	};

	return (
		<>
			{idx !== 0 && <StyledDiv className="mb-4 mt-6 border-t-2 border-dotted border-gray-200" />}
			<GridContainer className="relative grid grid-cols-6 gap-3">
				{children}
				<StyledDiv1 className={`absolute right-0 top-0 flex gap-0.5 `}>
					<StyledDiv2 $showMoveUp={showMoveUp} $showMoveDown={showMoveDown}>
						<MoveIconButton
							secondary={true}
							type="up"
							size="small"
							onClick={() => handleMoveClick("up")}
						/>
					</StyledDiv2>

					<StyledDiv3
						className={`transition-all duration-300 ${showMoveDown ? "" : "invisible opacity-0"}`}
						$showMoveDown={showMoveDown}
					>
						<MoveIconButton
							secondary={true}
							type="down"
							size="small"
							onClick={() => handleMoveClick("down")}
						/>
					</StyledDiv3>
					<StyledDiv4
						$showDelete={showDelete}
						className={`transition-all duration-300 ${showDelete ? "" : "invisible opacity-0"}`}
					>
						<DeleteIconButton onClick={handleDeleteClick} tooltipText={deleteButtonTooltipText} />
					</StyledDiv4>
				</StyledDiv1>
			</GridContainer>
		</>
	);
};
