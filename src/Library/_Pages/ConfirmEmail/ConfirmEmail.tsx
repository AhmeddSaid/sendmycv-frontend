import React, { ReactNode } from "react";
import styled from "styled-components";
import styles from "./../../Grids/Spaces.module.css";
import { Flexbox } from "@/Library/Grids/Grids";

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
	//white-space: nowrap;
	line-height: 1.75rem;
	text-align: center;
`;

const Shell = styled(Flexbox)`
	min-height: 75vh;
`;
const ConfirmEmail = (): ReactNode => {
	return (
		<>
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
						Thank you for signing up!
					</Heading2>
					<BigParagraph center color={"secondary"}>
						Please confirm your email address to complete your registration.
					</BigParagraph>
				</div>
			</Shell>
		</>
	);
};

export default ConfirmEmail;
