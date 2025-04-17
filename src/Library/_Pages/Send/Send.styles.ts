"use client";

import styled from "styled-components";

export const SendContainer = styled.div`
	position: relative;
	/* width: 100vw; */
	min-height: 100dvh;
	overflow: hidden;
	background-color: #0e0822;
	color: #fff;
	z-index: 1;
	padding: 3.5rem 6.25rem;

	&::before,
	&::after {
		content: "";
		position: absolute;
		width: 45rem;
		height: 42rem;
		z-index: -1;
		border-radius: 50%;
		background-image: radial-gradient(#824fbb4d, #2b2e994d);
		filter: blur(100px);
	}

	&::before {
		right: -15rem;
		top: -16rem;
	}

	&::after {
		left: -15rem;
		bottom: -16rem;
	}

	@media screen and (max-width: 768px) {
		padding: 3.5rem 1rem;
	}
`;
