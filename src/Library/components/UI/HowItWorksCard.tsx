"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import styled from "styled-components";
import { Flex } from "@/Library/Grids/Grids";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2.75rem;
	width: 80%;
	//height: 27.625rem;
	overflow: hidden;
	gap: 2.5rem;
	margin: auto;
	background: linear-gradient(100deg, rgba(39, 30, 72, 0.5) 4.74%, rgba(94, 72, 174, 0.5) 124.58%);
	border: 1px solid #b5a3ff96;
	border-radius: 2.25rem;

	&:nth-child(even) {
		flex-direction: row-reverse;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column !important;
		width: 100%;
		height: auto;
		padding: 1rem;
		margin: 0 auto;
		gap: 1rem;
	}
`;

const ImgHolder = styled.div`
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 21.875rem;
	border-radius: 0.75rem;
	pointer-events: none;

	& img {
		object-fit: none;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		height: auto;
		& img {
			width: 100%;
			height: auto;
		}
	}
`;

const Number = styled.div`
	opacity: 0.3;
	font-weight: 900;
	font-family: var(--font-inter);
	font-size: 6.75rem;

	background-color: #00000040;
	color: transparent;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	text-shadow: 1px 1px 1px #fff;
	filter: drop-shadow(0px 4px 4px #00000040);

	@media screen and (max-width: 768px) {
		font-size: 4rem;
	}
`;

const Subtitle = styled.h6`
	font-family: var(--font-inter);
	font-weight: 300;
	text-shadow: 1px 1px 1px #00000063;

	font-size: 1.75rem;
	line-height: 4.375rem;
	letter-spacing: -0.0506em;

	@media screen and (max-width: 768px) {
		font-size: 1rem;
		line-height: 1rem;
		letter-spacing: -0.03em;
		margin: 1rem 0;
	}
`;

const Title = styled.h4`
	font-family: var(--font-inter);
	font-weight: 600;
	font-size: 3.625rem;
	text-shadow: 1px 1px 1px #00000063;

	@media screen and (max-width: 768px) {
		font-size: 1.5rem;
		letter-spacing: -0.03em;
	}
`;

const TextContainer = styled(Flex)`
	width: 50%;
	align-items: flex-start;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export default function HowItWorksCard({
	image,
	subtitle,
	title,
	index,
}: {
	index: number;
	image: StaticImageData;
	subtitle: string;
	title: string;
}) {
	return (
		<Container>
			<TextContainer>
				<Number>{index}</Number>
				<Subtitle>{subtitle}</Subtitle>
				<Title>{title}</Title>
			</TextContainer>
			<ImgHolder>
				<Image src={image} alt="" />
			</ImgHolder>
		</Container>
	);
}
