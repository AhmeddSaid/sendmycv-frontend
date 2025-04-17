"use client";
import React from "react";
import styled from "styled-components";
import QuestionSpinner from "@/Library/components/QuestionSpinner/QuestionSpinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	$width?: string;
	$height?: string;
	$rounded?: boolean;
	$fontSize?: string;
	$bg?: string;
	$color?: string;
	$hoverBg?: string;
	$hoverText?: string;
	$padding?: string;
	$margin?: string;
	$fontWeight?: string;
	$border?: string;
	$hoverBorder?: string;
	$smWidth?: string;
	loading?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
	height: ${props => props.$height || "3.5rem"};
	padding: ${props => props.$padding || "0 1.5rem"};
	border: ${props => props.$border || "none"};
	border-radius: ${props => (props.$rounded ? "999rem" : "0.75rem")};
	background: ${({ $bg }) => $bg || "linear-gradient(90deg, #5a5aff 0%, #000099 100%)"};
	background-size: ${props => (props.$hoverBg ? "unset" : "200% 200%")};
	color: ${({ $color }) => $color || "#fff"};
	font-size: ${props => props.$fontSize || "1rem"};
	font-weight: ${props => props.$fontWeight || "600"};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	transition:
		background-position 300ms ease-in-out,
		color 300ms ease-in-out;
	cursor: pointer;
	width: ${props => props.$width || "fit-content"};
	margin: ${props => props.$margin || "0"};
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-position: ${({ $hoverBg }) => ($hoverBg ? "unset" : "100% 0")};
		background-color: ${({ $hoverBg }) => $hoverBg || "#5a5aff"};
		color: ${({ $hoverText }) => $hoverText || "#fff"};
		border: ${props => props.$hoverBorder || "none"};
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	@media screen and (max-width: 960px) {
		width: ${props => props.$smWidth || props.$width};
	}
`;

export function Button({
	children,
	onClick,
	disabled,
	type,
	$width,
	$rounded,
	$fontSize,
	$bg,
	$color,
	$hoverBg,
	$hoverText,
	$padding,
	$height,
	$margin,
	$fontWeight,
	$border,
	$hoverBorder,
	$smWidth,
	loading = false,
	...rest
}: ButtonProps) {
	return (
		// @ts-ignore
		<StyledButton
			type={type}
			onClick={onClick}
			disabled={disabled}
			$width={$width}
			$rounded={$rounded}
			$fontSize={$fontSize}
			$bg={$bg}
			$color={$color}
			$hoverBg={$hoverBg}
			$hoverText={$hoverText}
			$padding={$padding}
			$height={$height}
			$margin={$margin}
			$fontWeight={$fontWeight}
			$border={$border}
			$hoverBorder={$hoverBorder}
			$smWidth={$smWidth}
			{...rest}
		>
			{loading ? <QuestionSpinner white /> : children}
		</StyledButton>
	);
}
