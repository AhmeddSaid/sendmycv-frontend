"use client";
import styled from "styled-components";
import { Breakpoints, Flex } from "../../Grids/Grids";

export const PricingPage = styled.div`
	background-color: #0e0822;
	min-height: 100dvh;
	height: 100%;
	position: relative;
	overflow: hidden;
	z-index: 1;
	text-align: center;

	& img {
		pointer-events: none;
	}

	& h1 {
		text-align: center;
		font-size: 3.75rem;
		font-weight: 700;
	}

	& > p {
		text-align: center;
		font-size: 1.125rem;
		font-weight: 300;
	}

	& .arrow {
		position: absolute;
		top: 12.5rem;
		pointer-events: none;
		z-index: -1;

		@media screen and (max-width: 1024px) {
			top: 80px;
		}
	}

	& .arrow.left {
		left: 0;
		@media screen and (max-width: 1024px) {
			left: -200px;
		}
	}

	& .arrow.right {
		right: 0;
		transform: rotateY(180deg);

		@media screen and (max-width: 1024px) {
			right: -200px;
		}
	}

	& h2 {
		font-weight: 500;
		font-size: 2.5rem;
	}

	@media screen and (max-width: ${Breakpoints.xl}) {
		& .arrow {
			display: none;
		}
	}

	@media screen and (max-width: 768px) {
		& h1 {
			font-size: 2rem;
			line-height: 1.6;
		}

		& h2 {
			font-size: 1.5rem;
		}

		& > p {
			font-size: 1rem;
		}

		& .arrow {
			display: none;
		}
	}
`;
export const GradientShapeOne = styled.div<{ $right?: boolean }>`
	width: 440px;
	height: 860px;
	top: 167px;
	border-radius: 50%;
	z-index: -1;
	left: ${props => (props.$right ? "unset" : "-309.23px")};
	right: ${props => (props.$right ? "-309.23px" : "unset")};
	transform: ${props => (props.$right ? "rotate(137.55deg)" : "rotate(-137.55deg)")};
	position: absolute;
	background: linear-gradient(179.46deg, rgb(92, 255, 212) 0.47%, rgba(81, 141, 152, 0.3) 80.89%);
	filter: blur(250px);
	pointer-events: none;

	&:before {
		content: "";
		position: absolute;
		width: 245px;
		height: 480px;
		top: 440px;
		border-radius: 50%;
		left: ${props => (props.$right ? "unset" : "0px")};
		right: ${props => (props.$right ? "0" : "unset")};
		background: #6b6bff4d;
		filter: blur(250px);
		pointer-events: none;
	}
`;

export const PlansHolder = styled(Flex)`
	max-width: 80rem;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 2rem;
		padding: 0;
		width: 100%;
	}
`;

export const Hero = styled(Flex)`
	@media screen and (max-width: 768px) {
		margin: 4rem auto;
		height: auto;
	}
`;

export const ToggleSwitch = styled.div<{ $active: boolean }>`
	display: flex;
	justify-content: center;
	border: 1px solid white;
	//gap: 4px;
	//margin: 16px auto
	margin-top: 16px;
	margin-left: 80%;
	width: fit-content;
	padding: 8px;
	border-radius: 15px;
	cursor: pointer;

	.year {
		padding: 8px;
		//background: white;
		background: ${({ $active }) => ($active ? "white" : "")};
		color: ${({ $active }) => ($active ? "#0e0822" : "wite")};

		border-radius: 8px;
		transition: all 0.4s;
	}

	.month {
		padding: 8px;
		background: ${({ $active }) => ($active ? "" : "white")};
		color: ${({ $active }) => ($active ? "white" : "#0e0822")};
		border-radius: 8px;
		transition: all 0.4s;
	}
`;
