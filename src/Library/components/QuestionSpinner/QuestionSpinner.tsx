"use client";
import React from "react";
import styled from "styled-components";

const Spin = styled.div<{ white?: boolean }>`
	width: 50px;
	padding: 8px;
	aspect-ratio: 1;
	border-radius: 50%;
	background: ${({ white }) => (!white ? "var(--main-color, #4f29f3)" : "white")};
	--_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
	-webkit-mask: var(--_m);
	mask: var(--_m);
	-webkit-mask-composite: source-out;
	mask-composite: subtract;
	animation: l3 1s infinite linear;
	scale: 0.4;

	@keyframes l3 {
		to {
			transform: rotate(1turn);
		}
	}
`;

const QuestionSpinner = ({ white = false }: { white?: boolean }) => {
	return <Spin white={white} />;
};

export default QuestionSpinner;
