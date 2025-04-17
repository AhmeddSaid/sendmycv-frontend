"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import { Breakpoints, Flex } from "../../Grids/Grids";
import Logo from "../Logo/Logo";
import { Button } from "@/Library/components/UI/Button";

const links = [
	{
		name: "Home",
		url: "/",
	},
	{
		name: "How it works",
		url: "/#how-it-works",
	},
	{
		name: "Pricing",
		url: "/pricing",
	},
];

const NavLinks = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-weight: 200;
	font-size: 1.125rem;
	cursor: pointer;
	transition: 300ms;

	&:hover {
		font-weight: 700;
	}
`;

const Sidebar = styled.div<{ $isOpen: boolean }>`
	position: fixed;
	top: 0;
	right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
	width: 250px;
	height: 100%;
	background-color: #140e27a0;
	transition: right 300ms ease;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	padding: 4rem 2rem;
	backdrop-filter: blur(20px);

	& a {
		width: 100%;
	}
`;

const SidebarLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	font-size: 1.125rem;
	margin-bottom: 2rem;

	&:hover {
		font-weight: 700;
	}
`;

const MenuButton = styled.button`
	background: none;
	border: none;
	color: #fff;
	font-size: 2rem;
	cursor: pointer;
	display: none;

	@media (max-width: ${Breakpoints.xl}) {
		display: block;
	}
`;

const DesktopNav = styled(Flex)`
	@media (max-width: ${Breakpoints.xl}) {
		display: none;
	}
`;

export default function MainHeader() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const sidebarRef = useRef<HTMLDivElement>(null);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
			setSidebarOpen(false);
		}
	};

	useEffect(() => {
		if (isSidebarOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isSidebarOpen]);

	return (
		<Flex
			$justify="space-between"
			$align="center"
			$width="90%"
			$padding="2.75rem 0"
			$margin="0 auto"
		>
			<Logo />

			<DesktopNav $gap="3rem">
				{links.map(link => (
					<NavLinks key={link.name} href={link.url}>
						{link.name}
					</NavLinks>
				))}
				{/*<LanguageSelect />*/}
			</DesktopNav>

			<MenuButton onClick={toggleSidebar}>
				{isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
			</MenuButton>

			<Sidebar ref={sidebarRef} $isOpen={isSidebarOpen}>
				{links.map(link => (
					<SidebarLink key={link.name} href={link.url}>
						{link.name}
					</SidebarLink>
				))}
				{/*<LanguageSelect />*/}
				<Flex $direction="column" $margin="1rem 0" $gap="1rem">
					<Link href={"/auth/signup"}>
						<Button
							$rounded
							$bg="transparent"
							$border="1px solid #fff"
							$hoverBg="#fff"
							$hoverBorder="1px solid #fff"
							$hoverText="#272727"
							$color="#fff"
							$width="100%"
						>
							Build your CV
						</Button>
					</Link>
					<Link href="/auth/login">
						<Button $rounded $width="100%">
							Log In
						</Button>
					</Link>
				</Flex>
			</Sidebar>

			<DesktopNav $gap="0.625rem">
				<Link href="/auth/signup">
					<Button
						$rounded
						$bg="transparent"
						$border="1px solid #fff"
						$hoverBg="#fff"
						$hoverBorder="1px solid #fff"
						$hoverText="#272727"
						$color="#fff"
						$width="8.75rem"
					>
						Build your CV
					</Button>
				</Link>
				<Link href="/auth/login">
					<Button $rounded $width="8.75rem">
						Log In
					</Button>
				</Link>
			</DesktopNav>
		</Flex>
	);
}
