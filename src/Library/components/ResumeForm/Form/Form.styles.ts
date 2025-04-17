"use client";

import styled from "styled-components";

export const StyledDiv = styled.div`
	margin-bottom: 1rem;
	margin-top: 1.5rem;
	border-top: 2px dotted #e2e8f0; /* Assuming border-gray-200 translates to #e2e8f0 */
`;

export const GridContainer = styled.div`
	position: relative;
	//display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 0.5rem;
`;

export const StyledDiv1 = styled.div`
	position: absolute;
	right: 0;
	top: -16px;
	display: flex;
	gap: 0.25rem;
	//background-color: rgba(0, 128, 128, 0.49); /* Assuming gap-0.5 translates to 0.25rem in your Tailwind config */
`;

export const StyledDiv2 = styled.div<{ $showMoveUp: boolean; $showMoveDown: boolean }>`
	transition: all 0.3s ease;

	visibility: ${({ $showMoveUp }) => (!$showMoveUp ? "hidden" : "")};
	opacity: ${({ $showMoveUp }) => (!$showMoveUp ? "0" : "")};
	opacity: ${({ $showMoveDown }) => (!$showMoveDown ? "1" : "")};
`;

export const StyledDiv3 = styled.div<{ $showMoveDown: boolean }>`
	transition: all 0.3s ease; /* Assuming duration-300 translates to 0.3s */

	${({ $showMoveDown }) =>
		!$showMoveDown &&
		`
    visibility: hidden;
    opacity: 0;
  `}

	visibility: ${({ $showMoveDown }) => (!$showMoveDown ? "hidden" : "")};

	opacity: ${({ $showMoveDown }) => (!$showMoveDown ? "0" : "")};
`;

export const StyledDiv4 = styled.div<{ $showDelete: boolean }>`
	transition: all 0.3s ease; /* Assuming duration-300 translates to 0.3s */
	visibility: ${({ $showDelete }) => (!$showDelete ? "hidden" : "")};
	opacity: ${({ $showDelete }) => (!$showDelete ? "0" : "")};
`;

export const StyledIcon = styled.div`
	//height: 1.5rem;
	//width: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		path {
			fill: #fff;
		}

		/* Assuming text-gray-400 translates to #9ca3af */
	}
`;

export const ScreenReaderOnly = styled.span`
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

export const ButtonStyles = styled.button<{
	$size: string;
	$secondary?: boolean;
}>`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	outline: none;
	padding: ${({ $size }) =>
		$size === "medium"
			? "0.375rem"
			: "0.25rem"}; // Assuming p-1.5 translates to 0.375rem and p-1 translates to 0.25rem
	//background: linear-gradient(90deg, #5a5aff 0%, #000099 100%);
	background: ${({ $secondary }) =>
		!$secondary ? "linear-gradient(90deg, #5a5aff 0%, #000099 100%)" : "transparent"};

	//background-color: red;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover,
	&:focus-visible {
		//background-color: #f0f0f0;
	}

	svg {
		path {
			stroke: #fff;
			fill: #fff;
		}
	}
`;

export const FlexContainer = styled.div<{ isCoverLetter: boolean | undefined }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	//margin-bottom: 16px;

	margin-bottom: ${({ isCoverLetter }) => (isCoverLetter ? "0" : "1rem")};
`;
export const Headinginput = styled.input`
	outline: 2px solid transparent;
	outline-offset: 2px;
	--tw-text-opacity: 1;
	color: #fff;
	letter-spacing: 0.025em;
	font-weight: 600;
	font-size: 1.125rem;
	line-height: 1.75rem;
	border-color: transparent;
	border-bottom-width: 1px;
	width: 100%;
	display: block;
	background-color: transparent;
	transition:
		border-color 0.2s,
		box-shadow 0.2s;

	&:hover,
	&:focus {
		border-bottom-color: rgb(209, 213, 219);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}
`;

export const FlexContainerr = styled.div`
	display: flex;
	//flex-grow: 1; // or flex: 1;  Both achieve the same result in this context.
	align-items: center;
	gap: 0.5rem; // Assuming the default Tailwind gap-2 is 0.5rem. Adjust if needed.
`;

export const FlexContainer0 = styled.div`
	margin-top: 0.5rem; // Assuming Tailwind's mt-2 is 0.5rem.  Check your config!
	display: flex;
	justify-content: flex-end;

	button {
		display: flex;
		align-items: center;
		border-radius: 0.375rem;
		background-color: #ffffff;
		padding: 0.5rem 1rem 0.5rem 0.75rem;
		font-size: 0.875rem;
		font-weight: 600;
		color: #111827;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		border: 1px solid #d3d3d3;

		&:hover {
			background-color: #f9f9f9;
		}
	}
`;
