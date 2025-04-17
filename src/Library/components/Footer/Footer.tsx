"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import bg from "../../../../public/footer-bg.webp";
import linkedIn from "../../../../public/icons/LinkedIn.svg";
import group1 from "../../../../public/icons/footer-group-1.svg";
import instagram from "../../../../public/icons/instagram.svg";
import x from "../../../../public/icons/x.svg";
import { Breakpoints, Flex } from "../../Grids/Grids";
import Logo from "../Logo/Logo";
import SocialHolder from "../UI/SocialHolder";
import { Socials } from "@/Library/_Pages/Auth/Auth.styles";

const socials = [
	{
		id: 1,
		name: "Linkedin",
		icon: linkedIn,
		url: "https://www.linkedin.com",
	},
	{
		id: 2,
		name: "Instagram",
		icon: instagram,
		url: "https://www.instagram.com",
	},
	{
		id: 3,
		name: "X",
		icon: x,
		url: "https://www.x.com",
	},
];

const FooterContainer = styled(Flex)`
	position: relative;
	overflow: hidden;
	z-index: 1;
	background-color: #0e0822;

	& .bg {
		opacity: 0.5;
		z-index: -1;
		mix-blend-mode: soft-light;
		pointer-events: none;
	}

	& p {
		font-size: 0.875rem;
		font-weight: 400;
		color: #e6e2e2;
		line-height: 1.3125rem;
		text-align: start;
	}

	& a {
		color: #e6e2e2;
		font-weight: 400;
		transition: 300ms;

		&:hover {
			color: #5a5aff;
		}
	}

	& .group1,
	& .group2,
	& .group3,
	& .group4 {
		position: absolute;
		z-index: -3;
		mix-blend-mode: color-dodge;
		pointer-events: none;
	}

	& .group1 {
		top: 0;
		left: 0;
	}

	& .group2 {
		bottom: -4rem;
		left: 50%;
		transform: translateX(-50%);
	}

	& .group3 {
		top: -8.375rem;
		transform: rotate(90deg);
		right: 0;
	}

	& .group4 {
		top: 0;
		right: -4rem;
	}

	@media screen and (max-width: ${Breakpoints.xl}) {
		flex-direction: column;
		align-items: start;
		padding: 6rem 1rem 2rem;

		& .group1,
		& .group2,
		& .group3,
		& .group4 {
			display: none;
		}
	}
`;

const Title = styled.span`
	font-weight: 600;
	font-size: 1.5rem;

	@media screen and (max-width: 768px) {
		font-size: 1.25rem;
	}
`;

const Content = styled(Flex)`
	@media screen and (max-width: ${Breakpoints.xl}) {
		width: 100%;
		justify-content: flex-start;
		margin: 1rem 0;
		gap: 1rem;
	}
`;

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<FooterContainer as={"footer"} $justify="space-around" $padding="4.5rem 6.25rem" $align="start">
			<Image src={bg} alt="" objectFit="cover" fill className="bg" />
			<Image src={group1} alt="" className="group1" />
			<Image src={group1} alt="" className="group2" />
			<Image src={group1} alt="" className="group3" />
			<Image src={group1} alt="" className="group4" />
			<Content $direction="column" $width="480px" $gap="1.5rem" $align="start">
				<Logo />
				<Content $direction="column" $gap="3.5rem" $align="flex-start">
					<p>
						SendMyCV connects job seekers with opportunities effortlessly through a streamlined
						CV-sharing platform.
					</p>
					<p>Send My CV Ltd — Registered in England and Wales (Company No. 16067070)</p>
					<p>{`Copyright © ${year}. All Rights Reserved.`}</p>
				</Content>
			</Content>
			<Content $direction="column" $gap="1.5rem" $align="flex-start">
				<Title>Company</Title>
				<Flex $direction="column" $align="flex-start" $gap="1rem">
					<Link href="/privacy">Privacy Policy</Link>
					<Link href="/terms">Terms of Service</Link>
					<Link href="/refund">Refund Policy</Link>
				</Flex>
			</Content>
			<Content $direction="column" $gap="1.5rem" $align="flex-start">
				<Title>Follow Us</Title>
				<Socials>
					{socials.map(social => (
						<Link key={social.id} href={social.url} target="_blank">
							<SocialHolder src={social.icon} alt={social.name} />
						</Link>
					))}
				</Socials>
			</Content>
		</FooterContainer>
	);
}
