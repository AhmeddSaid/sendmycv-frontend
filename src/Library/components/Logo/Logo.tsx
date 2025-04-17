"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import logo from "../../../../public/Logo.svg";
import name from "../../../../public/LogoName.svg";

const LogoContainer = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	width: fit-content;
`;

export default function Logo({ document }: { document?: boolean }) {
	return (
		<LogoContainer href={document ? "/documents" : "/"}>
			<Image src={logo} alt="SendMyCv Logo" />
			<Image src={name} alt="" />
		</LogoContainer>
	);
}
