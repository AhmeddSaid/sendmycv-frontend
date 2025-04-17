"use client";
import { useState } from "react";
import styled from "styled-components";
import { Col, Flex } from "@/Library/Grids/Grids";

const CircleContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem;
`;

const CircleWrapper = styled.div`
	cursor: pointer;
	padding: 0.125rem;
`;

const Circle = styled.div<{ $active: boolean; $color: string }>`
	height: 1.25rem;
	width: 1.25rem;
	border-radius: 50%;
	transition: transform 0.2s;
	background-color: ${({ $active, $color }) => ($active ? $color : "#d1d5db")};

	&:hover {
		transform: scale(1.2);
	}
`;

const SkillInput = styled.input`
	height: 3.5rem;
	padding: 0 1rem;
	border: 1px solid #fff;
	border-radius: 0.75rem;
	color: #fff;
	background-color: transparent;
	font-size: 1rem;
	font-weight: 400;
	width: 100%;
	outline: none;
	transition: 300ms;
	margin: 0.75rem 0;

	&.search-input {
		margin: 0;
		border-radius: 0.75rem 0.75rem 0 0;
		position: sticky;
		top: 0;
		background-color: #1d133d;
	}

	&::placeholder {
		color: #fff;
		opacity: 0.6;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	&:focus {
		border-color: #5a5aff;
	}
`;
export const FeaturedSkillInput = ({
	skill,
	rating,
	setSkillRating,
	placeholder,
	className,
	circleColor,
}: {
	skill: string;
	rating: number;
	setSkillRating: (skill: string, rating: number) => void;
	placeholder: string;
	className?: string;
	circleColor?: string | undefined;
}) => {
	return (
		<Col $md={6}>
			<Flex>
				<SkillInput
					type="text"
					value={skill}
					placeholder={placeholder}
					onChange={e => setSkillRating(e.target.value, rating)}
					// className={INPUT_CLASS_NAME}
				/>
				<CircleRating
					rating={rating}
					setRating={(newRating: number) => setSkillRating(skill, newRating)}
					circleColor={circleColor}
				/>
			</Flex>
		</Col>
	);
};

const CircleRating = ({
	rating,
	setRating,
	circleColor = "#38bdf8",
}: {
	rating: number;
	setRating: any;
	circleColor?: string | undefined;
}) => {
	const numCircles = 5;
	const [hoverRating, setHoverRating] = useState<number | null>(null);

	return (
		<CircleContainer>
			{[...Array(numCircles)].map((_, idx) => (
				<CircleWrapper
					key={idx}
					onClick={() => setRating(idx)}
					onMouseEnter={() => setHoverRating(idx)}
					onMouseLeave={() => setHoverRating(null)}
				>
					<Circle
						$active={hoverRating !== null ? hoverRating >= idx : rating >= idx}
						$color={circleColor}
					/>
				</CircleWrapper>
			))}
		</CircleContainer>
	);
};
