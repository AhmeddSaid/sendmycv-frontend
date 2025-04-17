"use client";

import styled from "styled-components";
import { Flex } from "../../Grids/Grids";
import { Button } from "../../components/UI/Button";

export const CheckoutContainer = styled.div`
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
export const Section = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	justify-content: center;
	align-items: center;
	margin: 6rem auto;

	@media screen and (max-width: 768px) {
		margin: 3rem auto;
	}
`;
export const Title = styled.h1`
	color: #fff;
	font-weight: 700;
	text-align: center;
	font-size: 1.625rem;

	@media screen and (max-width: 768px) {
		font-size: 1.25rem;
	}
`;

export const PlansHolder = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	justify-content: center;
	align-items: center;
	//width: 68.5rem;
	margin-top: 3rem;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export const BillingText = styled.div<{ width?: string; align?: string }>`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	text-align: ${({ align }) => (align ? align : "center")};
	width: ${({ width }) => (width ? width : "40%")};
	margin-top: 5rem;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const CardNumber = styled.div`
	position: relative;

	& img {
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translateY(-50%);
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const SuccessContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100dvh;
	width: 100vw;
	background-color: #0e0822;
	position: relative;
	z-index: 1;

	&::before {
		content: "";
		width: 45rem;
		height: 42rem;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: -1;
		transform: translate(-50%, -50%);
		background-image: radial-gradient(#824fbb4d, #2b2e994d);
		filter: blur(100px);
	}

	& p {
		font-size: 1.125rem;
		font-weight: 300;
		text-align: center;
		color: #fff;
		width: 36rem;
		margin: 1.5rem auto 3rem;
	}

	@media screen and (max-width: 768px) {
		overflow: hidden;
		& p {
			width: 90%;
		}
	}
`;
export const ContinueButton = styled(Button)`
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const BillingContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 35rem;
	gap: 1.5rem;
	margin: 0 auto 2rem;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const CardDateHolder = styled(Flex)`
	@media screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
	}
`;
