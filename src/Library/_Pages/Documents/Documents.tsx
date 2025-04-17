"use client";
import Image from "next/image";
import { useState } from "react";
import { BsFiles } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoDocumentTextOutline, IoNewspaperOutline } from "react-icons/io5";
import arrowDown from "./../../../../public/icons/arrow-down.svg";
import user from "./../../../../public/icons/user.svg";
import {
	CollapsedIconWrapper,
	DocumentsContainer,
	Sidebar,
	SidebarItem,
	SidebarToggleButton,
	Tab,
	Tabs,
} from "./Documents.styles";
import DocumentsMain from "./_components/DocumentsMain";
import { Flex } from "@/Library/Grids/Grids";
import Navbar from "@/Library/components/Navbar/Navbar";
import { filterAndCountByType } from "@/app/[locale]/(protected)/cover/_CoverLetterutils/filterDocs";

export default function Documents({
	docs,
	username,
	hasSubscription,
}: {
	docs: {
		id: string;
		img: string;
		title: string;
		updatedAt: string;
		createdAt: string;
		reference: string;
		type: "CV" | "COVERLETTER";
	}[];
	username: string;
	hasSubscription: boolean;
}) {
	const [activeTab, setActiveTab] = useState(1);
	// const { openModal } = useModal();
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	// const handleOpenModal = () => {
	// 	openModal(<PlanExpiredModal />);
	// };

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	const year = new Date().getFullYear();

	const activeDocs = (() => {
		const categorizedDocs = filterAndCountByType(docs);

		switch (activeTab) {
			case 1:
				return {
					docs: docs,
					count: {
						all: docs.length,
						CV: categorizedDocs.count.CV,
						COVERLETTER: categorizedDocs.count.COVERLETTER,
					},
				};
			case 2:
				return {
					docs: categorizedDocs.CV,
					count: {
						all: docs.length,
						CV: categorizedDocs.count.CV,
						COVERLETTER: categorizedDocs.count.COVERLETTER,
					},
				};
			case 3:
				return {
					docs: categorizedDocs.COVERLETTER,
					count: {
						all: docs.length,
						CV: categorizedDocs.count.CV,
						COVERLETTER: categorizedDocs.count.COVERLETTER,
					},
				};
			default:
				return { docs: [], count: { all: 0, CV: 0, COVERLETTER: 0 } };
		}
	})();

	return (
		<DocumentsContainer>
			<Navbar hasSubscription={hasSubscription} />
			<Flex $gap="2rem" $align="flex-start" $justify="center">
				<Sidebar isopen={isSidebarOpen}>
					<Flex $justify="flex-end" $width="100%" $padding="0 1rem">
						<SidebarToggleButton onClick={toggleSidebar}>
							<CgMenuRightAlt size={28} />
						</SidebarToggleButton>
					</Flex>
					<Flex $gap="1rem" $margin="auto">
						<Image
							src={user}
							alt="User Profile"
							width={43}
							height={43}
							style={{ borderRadius: "50%" }}
						/>
						{isSidebarOpen && (
							<>
								{username}
								<Image src={arrowDown} alt="Dropdown Arrow" />
							</>
						)}
					</Flex>
					<Flex $direction="column" $justify="space-between" $height="100%" $gap="1rem">
						<Flex $direction="column" $width="100%" $gap="1rem">
							<SidebarItem
								selected={activeTab === 1}
								onClick={() => setActiveTab(1)}
								isopen={isSidebarOpen}
							>
								{isSidebarOpen ? (
									"All documents"
								) : (
									<CollapsedIconWrapper>
										<BsFiles size={30} />
									</CollapsedIconWrapper>
								)}
							</SidebarItem>
							<SidebarItem
								selected={activeTab === 2}
								onClick={() => setActiveTab(2)}
								isopen={isSidebarOpen}
							>
								{isSidebarOpen ? (
									"Resumes"
								) : (
									<CollapsedIconWrapper>
										<IoDocumentTextOutline size={30} />
									</CollapsedIconWrapper>
								)}
							</SidebarItem>
							<SidebarItem
								selected={activeTab === 3}
								onClick={() => setActiveTab(3)}
								isopen={isSidebarOpen}
							>
								{isSidebarOpen ? (
									"Cover letters"
								) : (
									<CollapsedIconWrapper>
										<IoNewspaperOutline size={30} />
									</CollapsedIconWrapper>
								)}
							</SidebarItem>
						</Flex>
						{/*<Flex $direction="column" $width="100%" $gap="1rem">*/}
						{/*	<SidebarItem isopen={isSidebarOpen}>*/}
						{/*		<Link href="/help">*/}
						{/*			{isSidebarOpen ? (*/}
						{/*				"Help"*/}
						{/*			) : (*/}
						{/*				<CollapsedIconWrapper>*/}
						{/*					<TbHelpHexagonFilled size={30} />*/}
						{/*				</CollapsedIconWrapper>*/}
						{/*			)}*/}
						{/*		</Link>*/}
						{/*	</SidebarItem>*/}
						{/*	<SidebarItem isopen={isSidebarOpen}>*/}
						{/*		{isSidebarOpen ? (*/}
						{/*			<LanguageSelect />*/}
						{/*		) : (*/}
						{/*			<CollapsedIconWrapper>*/}
						{/*				<IoLanguageSharp size={30} />*/}
						{/*			</CollapsedIconWrapper>*/}
						{/*		)}*/}
						{/*	</SidebarItem>*/}
						{/*</Flex>*/}
					</Flex>
				</Sidebar>

				<Flex $direction="column" $width={"100%"}>
					<Flex $margin="4rem 0 0" $justify="space-between" $width="100%">
						<Tabs>
							<Tab selected={activeTab === 1} onClick={() => setActiveTab(1)}>
								{`All documents (${activeDocs.count.all})`}
							</Tab>
							<Tab selected={activeTab === 2} onClick={() => setActiveTab(2)}>
								{`Resumes (${activeDocs.count.CV})`}
							</Tab>
							<Tab selected={activeTab === 3} onClick={() => setActiveTab(3)}>
								{`Cover letters (${activeDocs.count.COVERLETTER})`}
							</Tab>
						</Tabs>
					</Flex>
					<DocumentsMain username={username} docs={activeDocs.docs} />
					<footer>
						<Flex $justify="space-between" $margin="3rem auto 0">
							<p>{`©${year} SendMYCV. All Rights Reserved.`}</p>
						</Flex>
					</footer>
				</Flex>
			</Flex>
		</DocumentsContainer>
	);
}
