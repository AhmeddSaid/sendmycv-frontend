"use client";
import styled from "styled-components";

export const ListShell = styled.ul`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	border-radius: 1.625rem;
	border: 0.5px solid rgba(255, 255, 255, 0.4);
	background: linear-gradient(
		187deg,
		rgba(255, 255, 255, 0.1) -32.56%,
		rgba(153, 153, 153, 0.04) 74.84%
	);
`;

export const ListItem = styled.li<{ border: boolean; goldColor: boolean }>`
	display: flex;
	justify-content: start;
	height: 4.5rem;
	padding: 1.5rem 1.5625rem 1.5rem 1rem;
	align-items: center;
	border-top: ${({ border }) => border && "0.5px solid rgba(255, 255, 255, 0.40)"};
	cursor: pointer;
	width: 100%;

	p {
		color: #fff;
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		background: ${({ goldColor }) =>
			goldColor && "var(--New-Gold, linear-gradient(264deg, #FFCC46 59.26%, #9B6700 99.36%))"}; //;
		background-clip: ${({ goldColor }) => goldColor && "text"}; // text;
		-webkit-background-clip: ${({ goldColor }) => goldColor && "text"}; // text;
		-webkit-text-fill-color: ${({ goldColor }) => goldColor && "transparent"}; // transparent;
	}
`;
export const DividerStyle = styled.div`
	width: 0.03125rem;
	height: 4.5rem;
	background: rgba(255, 255, 255, 0.4);
`;
