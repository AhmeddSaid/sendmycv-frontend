"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Flexbox } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Button } from "@/Library/components/UI/Button";

type HeadingType = {
	color?: "success" | "white" | "brand" | "black" | "secondary" | "danger" | "gray";
	center?: boolean;
	bold?: boolean;
};
const Heading2 = styled.h2<HeadingType>`
	font-size: 2rem;
	font-weight: 600;
	line-height: 3rem;
	text-align: center;

	@media (max-width: 540px) {
		font-size: 2rem;
		line-height: 2.5rem;
	}
`;
const BigParagraph = styled.p<HeadingType>`
	font-size: 1rem;
	line-height: 1.75rem;
	text-align: center;
`;
const Shell = styled(Flexbox)`
	min-height: 75vh;
`;

const Page = () => {
	return (
		<>
			<Shell $justify={"center"} $align={"center"}>
				<div>
					<Flexbox $justify={"center"}>
						<svg
							width="64px"
							height="64px"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							color="#c84141"
						>
							<path
								d="M9.17218 14.8284L12.0006 12M14.829 9.17157L12.0006 12M12.0006 12L9.17218 9.17157M12.0006 12L14.829 14.8284"
								stroke="#c84141"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
								stroke="#c84141"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</svg>
					</Flexbox>
					<Heading2 className={`${styles.marginBottom16} ${styles.marginTop16}`} center>
						Payment Unsuccessfully
					</Heading2>
					<BigParagraph center color={"secondary"}>
						Please try again later
					</BigParagraph>
					<Flexbox $justify={"center"} className={styles.marginTop32}>
						<Link href="/pricing">
							<Button>Plans and pricing</Button>
						</Link>
					</Flexbox>
				</div>
			</Shell>
		</>
	);
};

export default Page;
