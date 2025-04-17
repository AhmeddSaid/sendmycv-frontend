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

const VerifyAuth = ({ isVerified, email }: { isVerified: boolean; email: string | undefined }) => {
	return (
		<>
			{/*{success && (*/}
			{/*	<Shell $justify={"center"} $align={"center"}>*/}
			{/*		<div>*/}
			{/*			<Flexbox $justify={"center"}>*/}
			{/*				<svg*/}
			{/*					width="80"*/}
			{/*					height="80"*/}
			{/*					viewBox="0 0 80 80"*/}
			{/*					fill="none"*/}
			{/*					xmlns="http://www.w3.org/2000/svg"*/}
			{/*				>*/}
			{/*					<g clipPath="url(#clip0_357_2)">*/}
			{/*						<path*/}
			{/*							d="M35 53.535L22.5 41.0325L26.0325 37.5L35 46.465L53.9625 27.5L57.5 31.0375L35 53.535Z"*/}
			{/*							fill="#07B262"*/}
			{/*						/>*/}
			{/*						<path*/}
			{/*							d="M40 5C33.0777 5 26.3108 7.05271 20.5551 10.8986C14.7993 14.7444 10.3133 20.2107 7.66423 26.6061C5.01516 33.0015 4.32205 40.0388 5.67253 46.8282C7.02301 53.6175 10.3564 59.8539 15.2513 64.7487C20.1461 69.6436 26.3825 72.977 33.1719 74.3275C39.9612 75.678 46.9985 74.9848 53.3939 72.3358C59.7894 69.6867 65.2556 65.2007 69.1015 59.445C72.9473 53.6892 75 46.9223 75 40C75 30.7174 71.3125 21.815 64.7487 15.2513C58.185 8.68749 49.2826 5 40 5ZM40 70C34.0666 70 28.2664 68.2405 23.3329 64.9441C18.3994 61.6476 14.5543 56.9623 12.2836 51.4805C10.013 45.9987 9.4189 39.9667 10.5765 34.1473C11.734 28.3279 14.5912 22.9824 18.7868 18.7868C22.9824 14.5912 28.3279 11.734 34.1473 10.5764C39.9667 9.41888 45.9987 10.013 51.4805 12.2836C56.9623 14.5542 61.6477 18.3994 64.9441 23.3329C68.2405 28.2664 70 34.0666 70 40C70 47.9565 66.8393 55.5871 61.2132 61.2132C55.5871 66.8393 47.9565 70 40 70Z"*/}
			{/*							fill="#07B262"*/}
			{/*						/>*/}
			{/*					</g>*/}
			{/*					<defs>*/}
			{/*						<clipPath id="clip0_357_2">*/}
			{/*							<rect width="80" height="80" fill="white" />*/}
			{/*						</clipPath>*/}
			{/*					</defs>*/}
			{/*				</svg>*/}
			{/*			</Flexbox>*/}
			{/*			<Heading2 className={`${styles.marginBottom16} ${styles.marginTop16}`} center>*/}
			{/*				Check your email address*/}
			{/*			</Heading2>*/}
			{/*			<BigParagraph center color={"secondary"}>*/}
			{/*				Email sent successfully.*/}
			{/*			</BigParagraph>*/}
			{/*		</div>*/}
			{/*	</Shell>*/}
			{/*)}*/}

			{isVerified ? (
				<Shell $justify={"center"} $align={"center"}>
					<div>
						<Flexbox $justify={"center"}>
							<svg
								width="80"
								height="80"
								viewBox="0 0 80 80"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0_357_2)">
									<path
										d="M35 53.535L22.5 41.0325L26.0325 37.5L35 46.465L53.9625 27.5L57.5 31.0375L35 53.535Z"
										fill="#07B262"
									/>
									<path
										d="M40 5C33.0777 5 26.3108 7.05271 20.5551 10.8986C14.7993 14.7444 10.3133 20.2107 7.66423 26.6061C5.01516 33.0015 4.32205 40.0388 5.67253 46.8282C7.02301 53.6175 10.3564 59.8539 15.2513 64.7487C20.1461 69.6436 26.3825 72.977 33.1719 74.3275C39.9612 75.678 46.9985 74.9848 53.3939 72.3358C59.7894 69.6867 65.2556 65.2007 69.1015 59.445C72.9473 53.6892 75 46.9223 75 40C75 30.7174 71.3125 21.815 64.7487 15.2513C58.185 8.68749 49.2826 5 40 5ZM40 70C34.0666 70 28.2664 68.2405 23.3329 64.9441C18.3994 61.6476 14.5543 56.9623 12.2836 51.4805C10.013 45.9987 9.4189 39.9667 10.5765 34.1473C11.734 28.3279 14.5912 22.9824 18.7868 18.7868C22.9824 14.5912 28.3279 11.734 34.1473 10.5764C39.9667 9.41888 45.9987 10.013 51.4805 12.2836C56.9623 14.5542 61.6477 18.3994 64.9441 23.3329C68.2405 28.2664 70 34.0666 70 40C70 47.9565 66.8393 55.5871 61.2132 61.2132C55.5871 66.8393 47.9565 70 40 70Z"
										fill="#07B262"
									/>
								</g>
								<defs>
									<clipPath id="clip0_357_2">
										<rect width="80" height="80" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Flexbox>
						<Heading2 className={`${styles.marginBottom16} ${styles.marginTop16}`} center>
							Verified Successfully
						</Heading2>
						<BigParagraph center color={"secondary"}>
							Your account has been verified.
						</BigParagraph>
						<Flexbox $justify={"center"} className={styles.marginTop32}>
							<Link href={"/auth/login"}>
								<Button>Login</Button>
							</Link>
						</Flexbox>
					</div>
				</Shell>
			) : (
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
								Verification Unsuccessfully
							</Heading2>
							<BigParagraph center color={"secondary"}>
								Incorrect or expired token
							</BigParagraph>
							<Flexbox $justify={"center"} className={styles.marginTop32}>
								{/*<Button onClick={resendEmail}>Resend verify email</Button>*/}
							</Flexbox>
						</div>
					</Shell>
				</>
			)}
		</>
	);
};

export default VerifyAuth;
