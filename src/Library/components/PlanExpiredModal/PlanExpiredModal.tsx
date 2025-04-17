"use client";
import Image from "next/image";
import styled from "styled-components";
import img from "./../../../../public/plan-expired.webp";
import { useModal } from "@/Context/ModalContext";
import { Button } from "@/Library/components/UI/Button";

const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: fit-content;
	/* padding: 3rem; */
`;
const Title = styled.h2`
	color: #0f0924;
	font-size: 1.625rem;
	font-weight: 700;
	text-align: center;
	margin: 2rem 0;

	@media screen and (max-width: 768px) {
		font-size: 1.25rem;
	}
`;
const Text = styled.div`
	color: #0f0924;
	font-size: 1.125rem;
	font-weight: 300;
	text-align: center;
	width: 90%;

	@media screen and (max-width: 768px) {
		font-size: 0.875rem;
		width: 80%;
	}
`;

const ButtonHolder = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.75rem;
	margin: 4.25rem 0 2.25rem;
	width: 100%;

	@media screen and (max-width: 768px) {
		gap: 1rem;
		margin: 2rem 0;

		& button {
			font-size: 1rem;
			width: 10rem;
		}
	}
`;

export default function PlanExpiredModal() {
	const { closeModal } = useModal();
	return (
		<ModalContainer>
			<Image src={img} alt="plan expired" />
			<Title>Your plan has expired</Title>
			<Text>
				You can download your resumes, but not edit them. Reactivate your plan to edit your resumes.
			</Text>
			<ButtonHolder>
				<Button
					$bg="transparent"
					$border="1px solid #0F0924"
					$color="#0F0924"
					$hoverBg="#c14e57"
					$rounded
					$width="12rem"
					onClick={closeModal}
					$hoverBorder="none"
				>
					Close
				</Button>
				<Button $width="12rem" $rounded>
					Reactivate Plan
				</Button>
			</ButtonHolder>
		</ModalContainer>
	);
}
