import React from "react";
import styled from "styled-components";
import Step from "./Step";
import { Flex } from "@/Library/Grids/Grids";

const ProgressBar = styled.div<{ step: number; totalSteps: number }>`
	height: 3px;
	width: 100%;
	background-color: #4f46e54d;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&::before {
		content: "";
		position: absolute;
		height: 100%;
		background-color: #4f46e5;
		transition: width 500ms ease;
		width: ${({ step, totalSteps }) => {
			if (totalSteps <= 3) {
				return step === 1 ? "0%" : step === 2 ? "50%" : "100%";
			} else {
				return `${((step - 1) / (totalSteps - 1)) * 100}%`;
			}
		}};
	}

	@media (max-width: 768px) {
		width: 100%;
		margin: 2rem auto;
	}
`;

const Container = styled(Flex)`
	@media (max-width: 768px) {
		width: 60%;
	}
`;

export default function StepsProgress({ step, totalSteps }: { step: number; totalSteps: number }) {
	return (
		<Container $width="30%" $margin="0 auto">
			<ProgressBar step={step} totalSteps={totalSteps}>
				{Array.from({ length: totalSteps }, (_, index) => (
					<Step key={index + 1} step={index + 1} active={step >= index + 1} />
				))}
			</ProgressBar>
		</Container>
	);
}
