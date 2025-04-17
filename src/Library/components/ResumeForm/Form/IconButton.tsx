// import EyeIcon from "@/app/Library/components/Icongraphy/EyeIcon/EyeIcon";

import { IconButton } from "@/Library/components/Button";
import ArrowDown from "@/Library/components/IconGraphy/ArrowDown/ArrowDown";
import ArrowUp from "@/Library/components/IconGraphy/ArrowUp/ArrowUp";
import EyeIcon from "@/Library/components/IconGraphy/EyeIcon/EyeIcon";
import TestIcon from "@/Library/components/IconGraphy/TestIcon";
import TrashIcon from "@/Library/components/IconGraphy/TrashIcon/TrashIcon";

import { ScreenReaderOnly, StyledIcon } from "@/Library/components/ResumeForm/Form/Form.styles";

export const ShowIconButton = ({
	show,
	setShow,
}: {
	show: boolean;
	setShow: (show: boolean) => void;
}) => {
	const tooltipText = show ? "Hide section" : "Show section";
	const onClick = () => {
		setShow(!show);
	};
	// const Icon = show ? EyeIcon : "EyeSlashIcon";

	return (
		<IconButton onClick={onClick} tooltipText={tooltipText}>
			<StyledIcon>
				<EyeIcon aria-hidden="true" />
			</StyledIcon>

			<ScreenReaderOnly className="sr-only">{tooltipText}</ScreenReaderOnly>
		</IconButton>
	);
};

type MoveIconButtonType = "up" | "down";
export const MoveIconButton = ({
	type,
	size = "medium",
	secondary,
	onClick,
}: {
	type: MoveIconButtonType;
	size?: "small" | "medium";
	onClick: (type: MoveIconButtonType) => void;
	secondary?: boolean;
}) => {
	const tooltipText = type === "up" ? "Move up" : "Move down";
	const sizeClassName = size === "medium" ? "h-6 w-6" : "h-4 w-4";
	// const Icon = type === "up" ? ArrowSmallUpIcon : ArrowSmallDownIcon;

	return (
		<IconButton
			secondary={secondary ?? false}
			onClick={() => onClick(type)}
			tooltipText={tooltipText}
			size={size}
		>
			{/*<Icon className={`${sizeClassName} text-gray-400`} aria-hidden="true" />*/}
			{type === "up" ? <ArrowUp /> : <ArrowDown />}
			<ScreenReaderOnly className="sr-only">{tooltipText}</ScreenReaderOnly>
		</IconButton>
	);
};

export const DeleteIconButton = ({
	onClick,
	tooltipText,
}: {
	onClick: () => void;
	tooltipText: string;
}) => {
	return (
		<IconButton secondary={true} onClick={onClick} tooltipText={tooltipText} size="small">
			<TrashIcon />

			<ScreenReaderOnly className="sr-only">{tooltipText}</ScreenReaderOnly>
		</IconButton>
	);
};

export const BulletListIconButton = ({
	onClick,
	showBulletPoints,
}: {
	onClick: (newShowBulletPoints: boolean) => void;
	showBulletPoints: boolean;
}) => {
	const tooltipText = showBulletPoints ? "Hide bullet points" : "Show bullet points";

	return (
		<IconButton
			onClick={() => onClick(!showBulletPoints)}
			tooltipText={tooltipText}
			size="small"
			className={showBulletPoints ? "!bg-sky-100" : ""}
		>
			{/*<ListBulletIcon*/}
			{/*  className={`h-4 w-4 ${*/}
			{/*    showBulletPoints ? "text-gray-700" : "text-gray-400"*/}
			{/*  }`}*/}
			{/*  aria-hidden="true"*/}
			{/*/>*/}
			<span className="sr-only">{tooltipText}</span>
		</IconButton>
	);
};
