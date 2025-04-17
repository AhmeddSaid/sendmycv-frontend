"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

import contact from "./../../../../../public/icons/contact.svg";
import parsing from "./../../../../../public/icons/parsing.svg";
import rocket from "./../../../../../public/icons/rocket.svg";
import lines from "./../../../../../public/lines.webp";
import { Breakpoints, Flex } from "@/Library/Grids/Grids";
import { Button } from "@/Library/components/UI/Button";

const Container = styled.div`
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2.875rem;
	width: 90%;
	height: 25rem;
	margin: 6rem auto;
	background: #03033e;
	border-radius: 1.5rem;
	padding: 0 3.5rem;
	z-index: 1;

	&::before,
	&::after {
		content: "";
		position: absolute;
		border-radius: 50%;
		opacity: 0.4;
		filter: blur(64px);
		transform: rotate(9.75deg);
		z-index: -1;
	}

	&::before {
		top: 7.125rem;
		right: 4.375rem;
		background: #d79bff;
		width: 28rem;
		height: 15rem;
	}

	&::after {
		bottom: -1.125rem;
		right: 23rem;
		width: 21.25rem;
		height: 8.25rem;
		background: #9bffbc;
	}

	& h3 {
		font-weight: 300;
		font-size: 1.75rem;
	}

	& p {
		font-size: 0.875rem;
	}

	& .lines {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: fit-content;
		pointer-events: none;
		z-index: -1;
	}

	@media screen and (max-width: ${Breakpoints.xxl}) {
		flex-direction: column;
		height: auto;
		width: 100%;
		gap: 1rem;
		padding: 1rem;
		text-align: center;

		border-radius: 0;

		& h3 {
			font-size: 1.5rem;
		}

		& p {
			font-size: 0.875rem;
		}
	}
`;

const Feature = styled.div`
	width: 22.625rem;
	height: 4.75rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	background: #9cb2dc1a;
	backdrop-filter: blur(4px);
	box-shadow: 0px 4px 15px 0px #00000040;
	border: solid #9c9cff78;
	border-width: 3px 1px 0px 1px;
	border-radius: 0.875rem;
	font-weight: 400;
	font-size: 1rem;

	&:nth-child(2) {
		transform: translateX(10%);
	}

	&:nth-child(3) {
		transform: translateX(20%);
	}

	@media screen and (max-width: ${Breakpoints.xxl}) {
		width: 100%;
		height: auto;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;

		& span {
			text-align: center;
		}

		&:nth-child(2) {
			transform: translateX(0);
		}

		&:nth-child(3) {
			transform: translateX(0);
		}
	}
`;

const TextHolder = styled(Flex)`
	flex-direction: column;
	gap: 2rem;
	align-items: flex-start;

	@media screen and (max-width: ${Breakpoints.xxl}) {
		align-items: center;
	}
`;

const FeaturesHolder = styled(Flex)`
	flex-direction: column;
	gap: 2.5rem;

	@media screen and (max-width: ${Breakpoints.xxl}) {
		gap: 1rem;
	}
`;

export default function CTASection() {
	return (
		<Container>
			<Image src={lines} alt="" className="lines" />
			<TextHolder>
				<h3>
					Resumes optimized for applicant <br /> tracking systems (ATS)
				</h3>
				<p>
					SendMyCV resumes and cover letters are vigorously tested against major
					<br />
					ATSsystems to ensure complete parsbility
				</p>
				<Link href="/auth/signup">
					<Button $rounded $width="15.75rem">
						Build your CV
					</Button>
				</Link>
			</TextHolder>
			<FeaturesHolder $direction="column" $gap="2.5rem">
				<Feature>
					<Image src={contact} alt="" />
					<span>Readable contact information</span>
				</Feature>
				<Feature>
					<Image src={parsing} alt="" />
					<span>Full experience section parsing</span>
				</Feature>
				<Feature>
					<Image src={rocket} alt="" />
					<span>Optimized skills section</span>
				</Feature>
			</FeaturesHolder>
		</Container>
	);
}
