import React from "react";
import { ButtonStyles } from "@/Library/components/ResumeForm/Form/Form.styles";

import { Tooltip } from "@/Library/components/Tooltip";
import { cx } from "@/_lib/cx";

type ReactButtonProps = React.ComponentProps<"button">;
type ReactAnchorProps = React.ComponentProps<"a">;
type ButtonProps = ReactButtonProps | ReactAnchorProps;

const isAnchor = (props: ButtonProps): props is ReactAnchorProps => {
	return "href" in props;
};

export const Button = (props: ButtonProps) => {
	if (isAnchor(props)) {
		return <a {...props} />;
	} else {
		return <button type="button" {...props} />;
	}
};

export const PrimaryButton = ({ className, ...props }: ButtonProps) => (
	<Button className={cx("btn-primary", className)} {...props} />
);

type IconButtonProps = React.ComponentProps<"button"> & {
	size?: "small" | "medium";
	tooltipText: string;
	secondary?: boolean;
};

export const IconButton = ({
	className,
	size = "medium",
	tooltipText,
	secondary,
	...props
}: IconButtonProps) => (
	<Tooltip text={tooltipText}>
		<ButtonStyles type="button" $secondary={secondary ?? false} $size={"medium"} {...props} />
	</Tooltip>
);
