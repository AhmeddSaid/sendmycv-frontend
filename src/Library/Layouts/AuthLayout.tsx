"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import icon1 from "../../../public/icons/designtools.svg";
import icon3 from "../../../public/icons/magicpen.svg";
import icon4 from "../../../public/icons/send.svg";
import icon2 from "../../../public/icons/sms-tracking.svg";
import main from "../../../public/main.webp";

import { Flex, Section } from "@/Library/Grids/Grids";
import {
	Features,
	FormsSection,
	LoginContainer,
	Main,
	WelcomeSection,
} from "@/Library/_Pages/Auth/Auth.styles";
import Logo from "@/Library/components/Logo/Logo";
import { usePathname } from "@/i18n/routing";

const data = [
	{
		icon: icon1,
		text: "Professional Templates: Save time with expertly designed resume templates.",
	},
	{
		icon: icon2,
		text: "Live HR Database: Connect directly with updated HR contacts.",
	},
	{
		icon: icon3,
		text: "ATS-Compatible CVs: Generate tailored cover letters effortlessly.",
	},
	{
		icon: icon4,
		text: "ATS-Compatible CVs Optimized CVs that pass tracking systems to reach recruiters effectively.",
	},
];

const AuthLayout = ({ children }: { children: ReactNode }): ReactNode => {
	const path = usePathname();
	const h1 = path.includes("/login") ? "Welcome Back!" : "Get Started";
	return (
		<LoginContainer>
			<Image src={main} alt="" fill objectFit="cover" className="bg" />
			<Section>
				<Logo />
				<Main>
					<WelcomeSection>
						<h1>{h1}</h1>
						<h3>Create your Resume With SendMyCV</h3>
						<Features>
							{data.map(item => (
								<Flex key={item.text} $gap="1rem" $align="center" $justify="flex-start">
									<Image src={item.icon} alt="" />
									<p>{item.text}</p>
								</Flex>
							))}
						</Features>
					</WelcomeSection>
					<FormsSection>{children}</FormsSection>
				</Main>
			</Section>
		</LoginContainer>
	);
};

export default AuthLayout;
