"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import UserMenu from "../UserMenu/UserMenu";
import { UserMenuContainer } from "../UserMenu/UserMenu.styles";
import logo from "./../../../../public/Logo.svg";
import arrowDown from "./../../../../public/icons/arrow-down.svg";
import user from "./../../../../public/icons/user.svg";
import { Flex } from "@/Library/Grids/Grids";
import { Header } from "@/Library/components/Navbar/Navbar.styles";
import { Button } from "@/Library/components/UI/Button";
import NavBarLinks from "@/Library/components/UI/NavBarLinks";

const Navbar = ({ hasSubscription }: { hasSubscription: boolean }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(e: { target: any }) {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setMenuOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<Header>
			<Flex $gap="3rem">
				<Image src={logo} alt="SendMyCv" />
				<NavBarLinks />
			</Flex>
			<div>
				<Flex $gap="1.375rem">
					{!hasSubscription && (
						<>
							<Link href={"/pricing"}>
								<Button $width="8.75rem" $rounded $fontSize="0.875rem">
									Upgrade
								</Button>
							</Link>
						</>
					)}

					<Flex
						onClick={() => setMenuOpen(prev => !prev)}
						$gap="1rem"
						className="profile"
						ref={buttonRef}
					>
						<Image
							src={user}
							alt="User Profile"
							width={43}
							height={43}
							style={{ borderRadius: "50%" }}
						/>
						<Image src={arrowDown} alt="Dropdown Arrow" />
					</Flex>
				</Flex>
			</div>
			{menuOpen && (
				<UserMenuContainer ref={menuRef}>
					<UserMenu />
				</UserMenuContainer>
			)}
		</Header>
	);
};

export default Navbar;
