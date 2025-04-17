"use client";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import faq from "./../../../../public/Faq-pattern.svg";
import collapse from "./../../../../public/icons/collapse.svg";
import expand from "./../../../../public/icons/expand.svg";
import { Breakpoints, Flex } from "@/Library/Grids/Grids";
import { Button } from "@/Library/components/UI/Button";

const faqs = [
	{
		question: "What makes SendMyCv the perfect tool to prepare your job application?",
		answer:
			"SendMyCv helps you create a resume to be proud of. It's modern and people remember it. The tool guides you every step of the process, so you can highlight your achievements, attitude, and personality. It's easy. And actually fun! SendMyCv has helped users stand out even in companies such as Spotify, Tesla, Google, and many others.",
	},
	{
		question: "How to use SendMyCv Resume Creator?",
		answer:
			"Simply sign up, choose from a variety of professionally designed templates, fill in your details, and customize your resume. You can then download it in multiple formats, ready to send with confidence.",
	},
	{
		question: "Why do I have to make a different resume for every job application?",
		answer:
			"Each job has unique requirements, and tailoring your resume to match the specific role significantly increases your chances of standing out to hiring managers. It shows you're thoughtful and serious about the opportunity.",
	},
	{
		question: "Should I use a resume template in 2025?",
		answer:
			"Absolutely! A well-designed template saves time and ensures your resume looks polished and professional. Templates also help you focus on the content while maintaining a visually appealing layout.",
	},
	{
		question: "Should my resume be in PDF or Word format?",
		answer:
			"PDF is the preferred format as it preserves your resume's layout across all devices and platforms. It ensures that employers see your resume exactly as you intended, without any formatting issues.",
	},
];

const FAQContainer = styled(Flex)`
	position: relative;
	height: 42rem;

	& .pattern {
		position: absolute;
		top: 0;
		z-index: -1;
	}

	@media screen and (max-width: ${Breakpoints.lg}) {
		flex-direction: column;
		height: auto;
	}
	@media screen and (max-width: ${Breakpoints.xl}) {
		padding: 0 1rem;
	}
`;

const Content = styled(Flex)`
	@media screen and (max-width: 768px) {
		width: 100%;
		align-items: center;
	}
`;

const Title = styled.h2`
	font-size: 2.5rem;
	font-family: var(--font-inter);
	font-weight: 600;
	line-height: 3.75rem;
	letter-spacing: -0.03em;
	text-align: start;

	@media screen and (max-width: 960px) {
		text-align: center;
	}

	@media screen and (max-width: 768px) {
		text-align: center;
		font-size: 1.5rem;
		line-height: 2.25rem;
	}
`;

const Text = styled.p`
	color: #98989a;
	font-family: var(--font-inter);
	font-size: 1.125rem;
	font-weight: 400;
	line-height: 1.625rem;
	letter-spacing: -0.03em;
	text-align: start;

	@media screen and (max-width: 960px) {
		text-align: center;
	}

	@media screen and (max-width: 768px) {
		text-align: center;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
`;

const FaqWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	gap: 1rem;

	@media screen and (max-width: 960px) {
		width: 80%;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const FaqItem = styled.div`
	cursor: pointer;
	padding: 1.5rem;
	background-color: #1b1132b2;
	border: 0.0625rem solid #262626;
	border-radius: 0.5625rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */

	@media screen and (max-width: 768px) {
		padding: 1rem;
	}
`;

const Question = styled(Flex)<{ $isopen: boolean }>`
	font-size: 0.875rem;
	font-weight: 500;
	justify-content: space-between;
	transition: color 0.3s ease;
	font-family: var(--font-inter);
`;

const Icon = styled.span`
	font-size: 1.5rem;
	font-weight: bold;
`;

const Answer = styled.div<{ $isopen: boolean }>`
	max-height: ${({ $isopen }) => ($isopen ? "12.5rem" : "0")};
	overflow: hidden;
	transition:
		max-height 0.3s ease,
		opacity 0.3s ease;
	font-size: 1rem;
	line-height: 1.5rem;
	text-align: start;

	@media screen and (max-width: 768px) {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
`;

const AnswerText = styled.p`
	color: #c0c0c0;
	font-family: var(--font-inter);
	margin-top: 24px;
	overflow-y: auto;
`;

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenIndex(prevIndex => (prevIndex === index ? null : index));
	};

	return (
		<FAQContainer $gap="16px" $justify="center">
			<Image src={faq} alt="" className="pattern" fill objectFit="cover" />
			<Content $direction="column" $gap="16px" $width="512px" $align="start">
				<Title>Frequently Asked Questions</Title>
				<Text>
					If the question is not available on our FAQ section, feel free to contact us personally,
					and we will resolve your doubts.
				</Text>
				<Button $margin="3rem 0" $rounded>
					Ask a Question
				</Button>
			</Content>

			<FaqWrapper>
				{faqs.map((faq, index) => (
					<FaqItem key={index} onClick={() => handleToggle(index)}>
						<Question $isopen={openIndex === index}>
							{faq.question}
							<Icon>
								{openIndex === index ? (
									<Image src={collapse} alt="" />
								) : (
									<Image src={expand} alt="" />
								)}
							</Icon>
						</Question>
						<Answer $isopen={openIndex === index}>
							<AnswerText>{faq.answer}</AnswerText>
						</Answer>
					</FaqItem>
				))}
			</FaqWrapper>
		</FAQContainer>
	);
}
