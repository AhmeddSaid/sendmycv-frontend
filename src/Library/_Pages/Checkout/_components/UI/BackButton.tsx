"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import arrow from "./../../../../../../public/icons/arrow-left.svg";

const Button = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
const LinkButton = styled(Link)`
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	text-decoration: none;
	color: #fff;
`;

export default function BackButton({ step, prevStep }: { step: number; prevStep: () => void }) {
	if (step === 1)
		return (
			<LinkButton href="/documents">
				<Image src={arrow} alt="back" />
				<span>Back</span>
			</LinkButton>
		);
	return (
		<Button onClick={prevStep}>
			<Image src={arrow} alt="back" />
			<span>Back</span>
		</Button>
	);
}
