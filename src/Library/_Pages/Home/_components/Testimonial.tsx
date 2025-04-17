"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import styled from "styled-components";
import line1 from "./../../../../../public/line-1.svg";
import line2 from "./../../../../../public/line-2.svg";
import { Flex } from "@/Library/Grids/Grids";

const Container = styled(Flex)`
	@media screen and (max-width: 768px) {
		flex-direction: column !important;
		width: 100%;
		height: auto;
	}
`;
const Content = styled(Flex)`
	@media screen and (max-width: 768px) {
		width: 100% !important;
		padding: 0 1rem;
	}
`;
const ImageHolder = styled.div`
	width: 13.5rem;
	height: 13.5rem;
	border-radius: 1.25rem;
	overflow: hidden;
	pointer-events: none;
	position: relative;

	/* @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    } */
`;

const ImageOverlay = styled.div`
	position: absolute;
	width: 19.5rem;
	height: 14.625rem;
	background: #8c45ffb2;
	filter: blur(140px);
	border-radius: 999rem;
`;

const Text = styled.p`
	font-family: var(--font-inter);
	font-weight: 500;
	font-size: 1.125rem;
	line-height: 1.625rem;
	overflow-y: auto;

	@media screen and (max-width: 768px) {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
`;

const Name = styled.p`
	font-family: var(--font-inter);
	font-weight: 400;
	font-size: 1rem;
	text-align: start;

	@media screen and (max-width: 768px) {
		font-size: 0.875rem;
	}
`;

const Position = styled.p`
	font-family: var(--font-inter);
	font-weight: 400;
	font-size: 0.875rem;

	@media screen and (max-width: 768px) {
		font-size: 0.75rem;
	}
`;

const Frame = styled.div`
	position: relative;

	& .line {
		position: absolute;
	}

	& .line-1 {
		top: 0;
		left: -202px;
	}

	& .line-2 {
		bottom: 0;
		left: -202px;
	}

	& .line-3 {
		left: 0;
		top: -86px;
	}

	& .line-4 {
		top: -86px;
		right: 0;
	}

	@media screen and (max-width: 768px) {
		& .line-3,
		& .line-4 {
			opacity: 0.4;
		}
	}
`;

export default function Testimonial({
	image,
	text,
	name,
	position,
}: {
	image: StaticImageData;
	text: string;
	name: string;
	position: string;
}) {
	return (
		<Container $gap="1.5rem" $height="401px">
			<Frame>
				<Image src={line1} alt="" className="line line-1" />
				<Image src={line1} alt="" className="line line-2" />
				<Image src={line2} alt="" className="line line-3" />
				<Image src={line2} alt="" className="line line-4" />
				<ImageOverlay />
				<ImageHolder>
					<Image src={image} alt="" />
				</ImageHolder>
			</Frame>
			<Content
				$direction="column"
				$gap="1rem"
				$width="27.75rem"
				$justify="center"
				$align="flex-start"
			>
				<Text>&quot;{text}&quot;</Text>
				<Name>{name}</Name>
				<Position>{position}</Position>
			</Content>
		</Container>
	);
}
