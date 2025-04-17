"use client";

import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";
import styled from "styled-components";
import searchIcon from "../../../../../public/icons/search.svg";
import {
	AddNewBtnHolder,
	ItemList,
	MainContent,
	Search,
	SearchContainer,
	SearchIcon,
	Title,
	WelcomeContainer,
} from "../Documents.styles";
import AddNewButton from "./AddNewButton";
import ItemCard from "./ItemCard";
import { Flex } from "@/Library/Grids/Grids";
import uuid from "@/Library/Utils/uuid";
import { Button } from "@/Library/components/UI/Button";
import { DeleteDuplicateAction } from "@/app/[locale]/(protected)/documents/action";
import { Link } from "@/i18n/routing";

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

const ModalContent = styled.div`
	background-color: #ffffff;
	border-radius: 2.625rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	width: 30dvw;
	padding: 2rem;

	& h2 {
		background-image: linear-gradient(90deg, #5a5aff 0%, #000099 100%);
		color: transparent;
		background-clip: text;
		font-size: 18px;
		line-height: 24px;
		margin-bottom: 1.5rem;
	}

	.cancel-btn-modal {
		color: #000099;
		border: 1px solid #000099;
		background: transparent !important;
	}

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export default function DocumentsMain({
	docs,
	username,
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
}) {
	const [query, setQuery] = useState<string | null>(null);

	const [action, setAction] = useState({
		isOpen: false,
		id: null,
		action: null,
		name: null,
		type: null,
	});

	const filteredData = docs.filter(item =>
		item.title.toLowerCase().includes(query ? query.toLowerCase() : ""),
	);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const closeModal = () => {
		setAction({
			isOpen: false,
			id: null,
			action: null,
			name: null,
			type: null,
		});
	};

	const openModal = (id: string, action: "Delete" | "Duplicate", name: string, type: string) => {
		// @ts-ignore
		setAction(prev => {
			return {
				...prev,
				isOpen: true,
				id: id,
				action: action.toLowerCase(),
				name: name.toLowerCase(),
				type: type.toLowerCase(),
			};
		});
	};

	const handleAction = async () => {
		if (action.action === null || !action.id) {
			toast.error("Something went wrong, please try again later");
		}

		try {
			// @ts-ignore
			const res = await DeleteDuplicateAction(action.id, action.action);
			if (res.status === 200) {
				toast.success(
					action.action === "delete" ? "Successfully deleted!" : "Successfully duplicated.",
				);
			} else {
				toast.error("Something went wrong, please try again later");
			}
		} catch (error) {
			toast.error("Something went wrong, please try again later");
		}
		closeModal();
	};

	return (
		<MainContent>
			<WelcomeContainer $justify="space-between" $align="center" $width="100%" $padding="2.375rem">
				<Title>
					Welcome back, <span>{username} 👋</span>
				</Title>
				<SearchContainer $gap="1.5rem">
					<Search placeholder="Search" value={query ?? ""} onChange={handleSearchChange} />
					<SearchIcon>
						<Image src={searchIcon} alt="" />
					</SearchIcon>
				</SearchContainer>
			</WelcomeContainer>
			<AddNewBtnHolder $gap="2.375rem" $margin="2.5rem auto">
				<Link href="/cv">
					<AddNewButton
						title="New Resume"
						text="Tailoring your resume to the job description can double your interview chances. Make it specific, and stand out!"
					/>
				</Link>
				<Link href="/cover">
					<AddNewButton
						title="New Cover Letter"
						text="83% of hiring managers report that cover letters influence their final hiring decisions."
					/>
				</Link>
			</AddNewBtnHolder>
			<ItemList $gap="2.25rem" $wrap="wrap" $justify="center">
				{filteredData.length === 0 && query !== null && (
					<Title>
						No results found for <span>&quot;{query}&quot;</span>
					</Title>
				)}

				{filteredData.length === 0 && query === null && (
					<Title>you don&#39;t have any cvs or cover letters yet, create one.</Title>
				)}

				{filteredData.map(
					(item: {
						id: string;
						img: string;
						title: string;
						updatedAt: string;
						createdAt: string;
						reference: string;
						type: "CV" | "COVERLETTER";
					}) => (
						<ItemCard
							key={uuid()}
							name={item.title}
							editDate={item.updatedAt}
							createdAt={item.createdAt}
							reference={item.reference}
							type={item.type}
							duplicateAction={() => openModal(item.reference, "Duplicate", item.title, item.type)}
							deleteAction={() => openModal(item.reference, "Delete", item.title, item.type)}
						/>
					),
				)}
			</ItemList>

			{action.isOpen && (
				<ModalOverlay>
					<ModalContent>
						<h2>
							are you sure want to {action.action ?? ""} this {action.type} &#34;{action.name}&#34;?
						</h2>
						<Flex $gap="1rem" $justify={"end"}>
							<Button
								className={action.action === "duplicate" ? "cancel-btn-modal" : ""}
								onClick={closeModal}
							>
								Cancel
							</Button>
							<Button
								onClick={handleAction}
								$bg={action.action === "delete" ? "#c14e57" : ""}
								$hoverBg={"#c14e57"}
							>
								{JSON.stringify(action.action).replace('"', "").toUpperCase()}
							</Button>
						</Flex>
					</ModalContent>
				</ModalOverlay>
			)}
		</MainContent>
	);
}
