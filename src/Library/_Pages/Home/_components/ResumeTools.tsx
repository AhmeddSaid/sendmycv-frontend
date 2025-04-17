"use client";
import Image from "next/image";
import styled from "styled-components";
import icon from "./../../../../../public/icons/tick-circle.svg";
import image1 from "./../../../../../public/img1.webp";
import image2 from "./../../../../../public/img2.webp";
import image3 from "./../../../../../public/img3.webp";
import arrow1 from "./../../../../../public/tools-arrow-1.webp";
import arrow2 from "./../../../../../public/tools-arrow-2.webp";
import { Flex } from "@/Library/Grids/Grids";

const Wrapper = styled.div`
	/* overflow-x: hidden; */
	height: 135.75rem;

	@media screen and (max-width: 768px) {
		height: auto;
		padding: 0 2rem;
	}
`;

const Text = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	gap: 1rem;

	img {
		pointer-events: none;
	}

	& h5 {
		font-weight: 500;
		font-size: 2.375rem;
		line-height: 2.875rem;
	}

	& p {
		font-weight: 400;
		font-size: 1rem;
	}

	& ul {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;

		& li {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 0.875rem;
			font-weight: 400;
		}
	}

	& .arrow-1 {
		position: absolute;
		left: 0;
		bottom: -80px;
		z-index: 2;
	}

	& .arrow-2 {
		position: absolute;
		right: -180px;
		bottom: -200px;
		/* z-index: 2; */
		scale: 0.8;
		transform: rotate(-3deg);
	}

	@media screen and (max-width: 768px) {
		& .arrow-1 {
			display: none;
		}

		& .arrow-2 {
			display: none;
		}

		& h5 {
			font-size: 1.5rem;
			line-height: 2rem;
		}

		& p {
			font-size: 0.875rem;
		}

		& ul {
			& li {
				font-size: 0.75rem;
			}
		}
	}
`;

const ImageHolder = styled.div`
	width: 40rem;
	height: 30rem;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
	/* z-index: -1; */

	img {
		position: relative;
		z-index: -1;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 20rem;
		margin: auto;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}
`;

const MainContainer = styled(Flex)`
	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 2rem;
		padding: 0;
		margin: 4rem 0;
	}
`;

export default function ResumeTools() {
	return (
		<Wrapper>
			<MainContainer
				$justify="space-around"
				$gap="3rem"
				$relative
				$padding="0 4rem"
				$align="flex-start"
				$margin="10rem auto"
			>
				<Text>
					<h5>
						Check your resume for <br /> grammatical and <br /> punctuation errors
					</h5>
					<p>
						A built-in content checker tool helping you stay on top of <br />
						grammar errors and clichés
					</p>

					<ul>
						<li>
							<Image src={icon} alt="" />
							<span>Wording and readability analysis</span>
						</li>
						<li>
							<Image src={icon} alt="" />
							<span>Eliminate typos and grammatical errors</span>
						</li>
						<li>
							<Image src={icon} alt="" />
							<span>Content suggestions based on your job and experience</span>
						</li>
					</ul>
					<Image src={arrow1} alt="" className="arrow-1" />
				</Text>
				<ImageHolder>
					<Image src={image1} alt="" fill objectFit="contain" />
				</ImageHolder>
			</MainContainer>

			<MainContainer
				$justify="space-around"
				$gap="3rem"
				$relative
				$direction="row-reverse"
				$padding="0 4rem"
				$align="flex-start"
				$margin="0 auto 10rem"
			>
				<Text>
					<h5>
						Resume tailoring based on <br /> the job you’re applying for
					</h5>
					<p>
						Quickly ensure that your resume covers key skills and <br />
						experiences by pasting the job
					</p>

					<ul>
						<li>
							<Image src={icon} alt="" />
							<span>Skills and experience section analysis</span>
						</li>
						<li>
							<Image src={icon} alt="" />
							<span>Actionable checklist of what else to add to your resume</span>
						</li>
						<li>
							<Image src={icon} alt="" />
							<span>Instant comparison between your resume and the job posting</span>
						</li>
					</ul>
					<Image src={arrow2} alt="" className="arrow-2" />
				</Text>
				<ImageHolder>
					<Image src={image2} alt="" fill objectFit="contain" />
				</ImageHolder>
			</MainContainer>

			<MainContainer
				$justify="space-around"
				$gap="3rem"
				$relative
				$padding="0 4rem"
				$align="flex-start"
			>
				<Text>
					<h5>
						Professionally <br /> designed resume sections
					</h5>
					<p>
						Express your professional history without limitations or worry
						<br /> about how your resume looks
					</p>

					<ul>
						<li>
							<Image src={icon} alt="" />
							<span>Professional sections like Experience, Skills, Profile and Education</span>
						</li>
						<li>
							<Image src={icon} alt="" />
							<span>Professional ATS-Compatible resumes and cover-letters</span>
						</li>
						<li>
							<Image src={icon} alt="" />
							<span>Other sections like Certifications, Languages and Custom section</span>
						</li>
					</ul>
				</Text>
				<ImageHolder>
					<Image src={image3} alt="" fill objectFit="contain" />
				</ImageHolder>
			</MainContainer>
		</Wrapper>
	);
}
