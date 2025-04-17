"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { SectionDesc, SectionTitle } from "../Home.styles";

import arrowL from "./../../../../../public/icons/l-arrow.svg";
import arrowR from "./../../../../../public/icons/r-arrow.svg";
import Testimonial from "./Testimonial";
import { Breakpoints, Flex, Section } from "@/Library/Grids/Grids";

const TestimonialsContainer = styled(Flex)`
	position: relative;

	@media screen and (max-width: ${Breakpoints.lg}) {
		margin: 6rem auto;
	}
`;

const CarouselWrapper = styled.div`
	position: relative;
	width: 100%;
	max-width: 100%;
	margin: auto 0;
	padding-bottom: 6rem;
	overflow: hidden;

	@media screen and (max-width: ${Breakpoints.lg}) {
		padding: 6rem 0;
	}
`;

const CarouselInner = styled.div<{ $activeIndex: number }>`
	display: flex;
	transition: transform 0.5s ease-in-out;
	transform: ${({ $activeIndex }) => `translateX(-${$activeIndex * 100}%)`};
	width: 100%;
`;

const CarouselItem = styled.div`
	min-width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Arrow = styled.button`
	position: absolute;
	top: 50%;
	border: none;
	font-size: 2rem;
	color: #fffdfd;
	background: linear-gradient(180deg, rgba(217, 217, 217, 0.3) 0%, rgba(115, 115, 115, 0.3) 100%);
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	z-index: 1;
	cursor: pointer;
	transform: translateY(-50%);
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		color: #007bff;
	}

	&.left {
		left: 6rem;
	}

	&.right {
		right: 6rem;
	}

	@media (max-width: ${Breakpoints.lg}) {
		&.left {
			left: 0.5rem;
		}

		&.right {
			right: 0.5rem;
		}
	}
`;

const Dots = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
`;

const Dot = styled.button<{ isactive: boolean }>`
	height: 0.625rem;
	width: ${({ isactive }) => (isactive ? "2.5rem" : ".625rem")};
	margin: 0 5px;
	border-radius: ${({ isactive }) => (isactive ? ".5rem" : "999rem")};
	transition: 400ms;
	border: none;
	background: ${({ isactive }) =>
		isactive ? "linear-gradient(82deg, #5A5AFF 11%, #000099 170%)" : "#ddd"};
	cursor: pointer;

	&:hover {
		background-color: #007bff;
	}

	&:active {
	}
`;

const Gradient = styled.div`
	position: absolute;
	width: 100%;
	height: 6rem;
	background: linear-gradient(to bottom, transparent, #130c28);
	bottom: -4px;
`;

export default function Testimonials({
	reviews,
}: {
	reviews: {
		id: number;
		image: StaticImageData;
		text: string;
		name: string;
		position: string;
	}[];
}) {
	const [activeIndex, setActiveIndex] = useState(0);

	const nextSlide = () => {
		setActiveIndex(prevIndex => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
	};

	const prevSlide = () => {
		setActiveIndex(prevIndex => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
	};

	const goToSlide = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<Section>
			<TestimonialsContainer $direction="column" $margin="auto 0" $align="center">
				<CarouselWrapper>
					<SectionTitle>Our clients</SectionTitle>
					<SectionDesc>
						Hear firsthand how our solutions boost our users’ success in <br /> landing interviews
						and their authentic success stories.
					</SectionDesc>
					<CarouselInner $activeIndex={activeIndex}>
						{reviews.map(review => (
							<CarouselItem key={review.id}>
								<Testimonial {...review} />
							</CarouselItem>
						))}
					</CarouselInner>

					<Arrow className="left" onClick={prevSlide}>
						<Image src={arrowL} alt="" />
					</Arrow>
					<Arrow className="right" onClick={nextSlide}>
						<Image src={arrowR} alt="" />
					</Arrow>
					<Dots>
						{reviews.map((_, index) => (
							<Dot key={index} isactive={index === activeIndex} onClick={() => goToSlide(index)} />
						))}
					</Dots>
				</CarouselWrapper>
				<Gradient />
			</TestimonialsContainer>
		</Section>
	);
}
