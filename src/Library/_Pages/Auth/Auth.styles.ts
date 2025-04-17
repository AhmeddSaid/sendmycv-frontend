"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Library/Grids/Grids";

export const LoginContainer = styled.main`
	position: relative;
	padding: 2rem 6.25rem;
	//width: 100vw;
	min-height: 100dvh;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		z-index: -2;
		width: 100%;
		height: 100%;
		background: #0e0822;
	}

	& .bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		background-attachment: fixed;
		opacity: 0.1;
	}

	@media screen and (max-width: 768px) {
		padding: 2rem 1rem;
		min-height: auto;
	}
`;

export const FormsSection = styled.div`
	@media screen and (max-width: 1140px) {
		order: 1;
	}
`;
export const Main = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	//height: 80dvh;
	width: 100%;
	margin: auto;
	min-height: calc(100vh - 12rem);

	@media screen and (max-width: 1140px) {
		flex-direction: column;
		height: auto;
		padding: 3rem 1rem;
		width: 100%;
	}
`;

export const WelcomeSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: fit-content;
	max-width: 30rem;

	& h1 {
		font-size: 3rem;
		font-weight: 600;
		color: #fff;
		font-weight: 600;
	}

	& h3 {
		color: #fff;
		font-size: 2rem;
		font-weight: 400;
		padding-bottom: 1.5rem;
		border-bottom: 0.5px solid #fff;
		margin-bottom: 3.5rem;
	}

	@media screen and (max-width: 960px) {
		align-items: center;
		text-align: center;
		width: 100%;
		max-width: none;
	}

	@media screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
		width: 100%;
		max-width: none;
		& h1 {
			font-size: 1.5rem;
		}

		& h3 {
			font-size: 0.75rem;
		}
	}

	@media screen and (max-width: 1140px) {
		order: 2;
		margin-top: 2rem;
	}
`;
export const Features = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	& p {
		color: #fff;
		text-align: start;
		font-weight: 300;
	}

	@media screen and (max-width: 768px) {
		font-size: 0.75rem;
	}
`;

export const LoginForm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 455px;
	/* height: 100%; */
	border-radius: 1.25rem;
	border: 1px solid rgba(255, 255, 255, 0.5);
	padding: 2rem 2.25rem;
	backdrop-filter: blur(53px);
	-webkit-backdrop-filter: blur(53px);
	background-image: linear-gradient(to left, rgba(0, 0, 0, 0.14) 0% #bfbfbf10 6.2%);

	& h4 {
		color: #fff;
		font-weight: 600;
		font-size: 2.25rem;
		margin-bottom: 2rem;
	}

	& label {
		color: #fff;
		font-size: 0.875rem;

		& a {
			text-decoration: underline;
		}
	}

	& a {
		color: #fff;
		text-align: center;
		margin-top: 0.75rem;
	}

	@media screen and (max-width: 1140px) {
		margin-top: 32px;
	}

	@media screen and (max-width: 960px) {
		width: 100%;
		margin: 3rem auto;
		padding: 2rem 1rem;
		& h4 {
			font-size: 1.5rem;
		}

		& label {
			font-size: 0.75rem;
		}

		& a {
			font-size: 0.75rem;
		}

		& .input-wrapper {
			width: 100%;
		}
	}
`;

export const Separator = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	color: #ffffffb2;
	margin-top: 2rem;

	&::after,
	&::before {
		content: "";
		position: absolute;
		top: 50%;
		width: 40%;
		height: 1px;
		background-color: #ffffffb2;
		z-index: -1;
	}

	&::before {
		left: 0;
	}

	&::after {
		right: 0;
	}
`;

export const Socials = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin-top: 1.75rem;
	margin-bottom: 0.75rem;
	@media screen and (max-width: ${Breakpoints.xl}) {
		margin-top: 0.5rem;
		margin-bottom: 0.25rem;
	}
`;
export const SignUpLink = styled.div`
	color: #fff;
	font-weight: 300;
	font-size: 1rem;
	text-align: center;
	margin-top: 10px;

	& a {
		text-decoration: underline;
		font-weight: 700;
	}

	@media screen and (max-width: 768px) {
		font-size: 0.75rem;
	}
`;

export const ErrorMsg = styled.div`
	color: #d41a1a;
	font-size: 14px;
`;
