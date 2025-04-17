"use client";
import styled, { css } from "styled-components";

export const Flex = styled.div<{
	$direction?: string;
	$justify?: string;
	$align?: string;
	$wrap?: string;
	$gap?: string;
	$margin?: string;
	$width?: string;
	$height?: string;
	$padding?: string;
	$border?: string;
	$borderWidth?: string;
	$borderColor?: string;
	$relative?: boolean;
	$overflowHidden?: boolean;
}>`
	display: flex;
	margin: ${({ $margin }) => $margin || "0"};
	position: ${({ $relative }) => ($relative ? "relative" : "unset")};
	flex-direction: ${({ $direction }) => $direction || "row"};
	justify-content: ${({ $justify }) => $justify || "flex-start"};
	align-items: ${({ $align }) => $align || "center"};
	flex-wrap: ${({ $wrap }) => $wrap || "nowrap"};
	gap: ${({ $gap }) => $gap || "0"};
	width: ${({ $width }) => $width || "auto"};
	height: ${({ $height }) => $height || "auto"};
	padding: ${({ $padding }) => $padding || "0"};
	border: ${({ $border }) => $border || "none"};
	border-style: solid;
	border-width: ${({ $borderWidth }) => $borderWidth || "0"};
	border-color: ${({ $borderColor }) => $borderColor || "transparent"};
	overflow: ${({ $overflowHidden }) => ($overflowHidden ? "hidden" : "unset")};
`;

export const Breakpoints = {
	sm: "540px",
	md: "720px",
	lg: "960px",
	xl: "1140px",
	xxl: "1320px",
};

export const getContainerMediaQueries = () => css`
	${Object.entries(Breakpoints).map(
		([key, value]) => `
        @media (min-width: ${value}) {
            max-width: ${value} !important;
        }
    `,
	)}
`;

export const Section = styled.section<{ className?: string }>`
	width: 100%;
	padding-right: 0.75rem;
	padding-left: 0.75rem;
	margin-right: auto;
	margin-left: auto;
	${getContainerMediaQueries()}
`;

type FLex = {
	$align?: "center" | "start" | "end" | "flex-end";
	$justify?: "space-between" | "center" | "space-around" | "end" | "start";
	$gap?: number;
	columnGap?: number;
	$direction?: "column" | "row" | "column-reverse" | "row-reverse";
};

const getFlexStyles = (props: FLex) => css`
	display: flex;
	align-items: ${props.$align || "initial"};
	justify-content: ${props.$justify || "initial"};
	gap: ${props.$gap ? `${props.$gap}px` : "0"};
	flex-direction: ${props.$direction || "row"};

	& svg,
	& * > svg {
		flex-shrink: 0;
	}
`;

export const Flexbox = styled.div<FLex>`
	${getFlexStyles}
`;

export const Row = styled.div<FLex>`
	${getFlexStyles};
	flex-wrap: wrap;
	margin-right: ${({ columnGap }) => `calc(${columnGap || 1.5}rem * -0.5)`};
	margin-left: ${({ columnGap }) => `calc(${columnGap || 1.5}rem * -0.5)`};

	& > * {
		box-sizing: border-box;
		flex-shrink: 0;
		width: 100%;
		max-width: 100%;
		padding-right: ${({ columnGap }) => `calc(${columnGap || 1.5}rem * 0.5)`};
		padding-left: ${({ columnGap }) => `calc(${columnGap || 1.5}rem * 0.5)`};
	}
`;

type ColProps = {
	$xs?: number;
	$sm?: number;
	$md?: number;
	$lg?: number;
	$xl?: number;
	$xxl?: number;
};

export const Col = styled.div<ColProps>`
	flex: 0 0 auto;
	width: ${({ $xs }: ColProps) =>
		$xs === undefined || $xs <= 0 ? "" : `${($xs / 12) * 100}%`} !important;

	@media (min-width: 576px) {
		width: ${({ $sm }: ColProps) =>
			$sm === undefined || $sm <= 0 ? "" : `${($sm / 12) * 100}%`} !important;
	}

	@media (min-width: 768px) {
		flex: 0 0 auto !important;
		width: ${({ $md }: ColProps) =>
			$md === undefined || $md <= 0 ? "" : `${($md / 12) * 100}%`} !important;
	}

	@media (min-width: 992px) {
		flex: 0 0 auto !important;
		width: ${({ $lg }: ColProps) =>
			$lg === undefined || $lg <= 0 ? "" : `${($lg / 12) * 100}%`} !important;
	}

	@media (min-width: 1200px) {
		flex: 0 0 auto !important;
		width: ${({ $xl }: ColProps) =>
			$xl === undefined || $xl <= 0 ? "" : `${($xl / 12) * 100}%`} !important;
	}

	@media (min-width: 1400px) {
		width: ${({ $xxl }: ColProps) =>
			$xxl === undefined || $xxl <= 0 ? "" : `${($xxl / 12) * 100}%`} !important;
	}
`;

export const AutoCol = styled(Col)`
	flex: 0 0 auto;
	width: auto;
`;
