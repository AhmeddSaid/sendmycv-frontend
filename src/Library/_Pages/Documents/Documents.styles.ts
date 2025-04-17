"use client";
import styled from "styled-components";
import { Flex } from "@/Library/Grids/Grids";

export const DocumentsContainer = styled.div`
	background-color: #0e0822;
	padding: 0 6.25rem;
	min-height: 100dvh;
	height: 100%;

	& footer p {
		font-weight: 200;
		font-size: 0.875rem;
	}

	@media screen and (max-width: 1300px) {
		padding: 0 1rem;
		& .profile {
			display: none;
		}

		& footer p {
			font-weight: 200;
			font-size: 0.75rem;
			padding: 1rem 0;
			text-align: center;
			margin: auto;
		}

		& footer > div > div {
			display: none;
		}
	}
`;

export const NavLinks = styled(Flex)`
	gap: 3.5rem;

	@media screen and (max-width: 1300px) {
		display: none;
	}
`;
export const Tabs = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	position: relative;
	z-index: 1;

	@media screen and (max-width: 1300px) {
		display: none;
	}
`;

export const Tab = styled.div<{ selected: boolean }>`
	width: 12.25rem;
	height: 6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 1.25rem 1.25rem 0 0;
	border: 1px solid ${({ selected }) => (selected ? "#ffffff66" : "transparent")};
	border-bottom: none;
	color: #fff;
`;

export const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #ffffff66;
	padding: 2.125rem 1rem;
	border-radius: 1.25rem;
	margin-top: -1rem;
	background: #0e0822;
	position: relative;
	z-index: 3;
	box-shadow: 0 0 20px #00000066;
	width: 100%;

	&::before {
		content: "";
		//min-height: 90dvh;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		border-radius: 1.25rem;
		background:
			linear-gradient(0deg, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.14)),
			linear-gradient(321.23deg, rgba(191, 191, 191, 0.062) 5.98%, rgba(0, 0, 0, 0) 66.28%);
		backdrop-filter: blur(267px);
	}

	@media screen and (max-width: 1300px) {
		/* overflow: hidden; */
		margin-left: 4rem;
		&::before {
			min-height: auto;
		}
	}
`;
export const Create = styled(Flex)`
	@media screen and (max-width: 1300px) {
		margin-left: 4rem;
	}
`;
export const Title = styled.div`
	color: #fff;
	font-weight: 200;
	font-size: 1.25rem;

	& span {
		font-weight: 700;
		font-size: 1.875rem;
	}

	@media screen and (max-width: 1300px) {
		font-size: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
		& span {
			font-size: 1.5rem;
		}
	}
`;
export const SearchContainer = styled(Flex)`
	@media screen and (max-width: 1300px) {
		gap: 0.5rem;
		width: 80%;
	}
`;
export const Search = styled.input`
	width: 18.75rem;
	height: 3.25rem;
	border-radius: 999rem;
	background-color: #130d26;
	outline: none;
	border: none;
	padding: 0 1rem;
	color: #ffffffb2;
	font-weight: 400;
	font-size: 0.875rem;

	@media screen and (max-width: 1300px) {
		width: 100%;
	}
`;

export const SearchIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.125rem;
	height: 3.25rem;
	border-radius: 0 999rem 999rem 0;
	cursor: pointer;
	margin-left: -3.125rem;
	background: linear-gradient(81.29deg, #5a5aff 11.73%, #000099 170.69%);
`;
export const ChangeView = styled(Flex)`
	@media screen and (max-width: 1300px) {
		display: none;
	}
`;
export const GridButton = styled.div<{ selected: boolean }>`
	width: 2.375rem;
	height: 2.375rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.3s ease;
	background: ${({ selected }) =>
		selected
			? "linear-gradient(81.29deg,rgba(90, 90, 255, 0.5) 11.73%,rgba(0, 0, 153, 0.5) 170.69%)"
			: "transparent"};

	border-radius: 0.5rem;
`;

export const AddNew = styled.div`
	width: 35.5rem;
	height: 10.5rem;
	background: #130d2666;
	border-radius: 2.125rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	transition: 500ms ease;
	cursor: pointer;
	border: 2px solid transparent;

	&:hover {
		border-color: #5a5aff;
		box-shadow: 0px 4px 92.8px 0px #3e3ed761;
	}

	& p {
		text-align: center;
		font-weight: 300;
		font-size: 0.875rem;
		color: #ffffff80 !important;
		width: 80%;
	}

	@media screen and (max-width: 1300px) {
		width: fit-content;
		height: fit-content;
		gap: 0.5rem;
		padding: 1rem 0.5rem;
		& p {
			width: 100%;
			font-size: 0.625rem;
		}
	}
`;
export const AddNewTitle = styled.div`
	font-size: 1.25rem;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	color: #fff;

	@media screen and (max-width: 1300px) {
		font-size: 1rem;
	}
`;

export const AddNewBtnHolder = styled(Flex)`
	border-bottom: 1px solid #ffffff66;
	padding-bottom: 3.125rem;

	@media screen and (max-width: 1300px) {
		flex-direction: column;
	}
`;
export const WelcomeContainer = styled(Flex)`
	@media screen and (max-width: 1300px) {
		flex-direction: column;
		gap: 2rem;
		padding: 0;
	}
`;
export const ItemHolder = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	width: 35.5rem;
	height: 26.25rem;
	border-radius: 2.125rem;
	background: linear-gradient(
		237.01deg,
		rgba(28, 16, 66, 0.2) 6.73%,
		rgba(71, 41, 168, 0.2) 113.32%
	);

	@media screen and (max-width: 1300px) {
		width: 100%;
		height: fit-content;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem 0.5rem;
	}
`;

export const ItemImage = styled.div`
	overflow: hidden;
	width: 15rem;
	height: 21.25rem;
	border-radius: 1.375rem;

	@media screen and (max-width: 1300px) {
		width: 15rem;
		height: 15rem;
	}
`;

export const ItemList = styled(Flex)`
	height: 100%;
	width: 100%;
	align-items: flex-start;

	&::-webkit-scrollbar {
		width: 4px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgb(116, 83, 224);
		border-radius: 4px;
	}

	&::-webkit-scrollbar-track {
		background: #130d26;
		border-radius: 4px;
	}
`;

export const ResumeId = styled.span`
	font-weight: 300;
	font-size: 0.75rem;
	color: #ffffff80;
`;
export const ResumeNameHolder = styled.div`
	position: relative;
	width: 17.25rem;
	/* height: 3.375rem; */
	margin: 1rem 0 0.75rem;

	& img {
		position: absolute;
		right: 0.875rem;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
	}
`;
export const ResumeName = styled.input`
	width: 100%;
	height: 100%;
	border-radius: 1rem;
	background-color: #130d26;
	color: #ffffff;
	font-size: 0.875rem;
	font-weight: 300;
	padding: 0 0.625rem;
	outline: none;
	border: none;
`;
export const EditedDate = styled.div`
	width: 100%;
	font-weight: 300;
	font-size: 0.625rem;
	color: #ffffff80;
`;
export const CardBtnHolder = styled(Flex)`
	@media screen and (max-width: 1300px) {
		margin: 0.5rem 0;
	}
`;
export const ActionButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
	width: 8.25rem;
	height: 5.125rem;
	background-color: #291e4f80;
	border-radius: 0.5rem;
	border: none;
	cursor: pointer;
	outline: none;
	color: #ffffff;
	font-size: 0.875rem;
	font-weight: 300;
	transition: all 300ms ease;

	&:hover {
		background-color: #291e4f;
	}

	//&:last-child span {
	//	font-weight: 300;
	//	color: #c14e57;
	//}

	& span {
		font-weight: 300;
		font-size: 0.875rem;
		color: #ffffff;
	}
`;
export const CreatedAt = styled.div`
	font-size: 0.5rem;
	color: #ffffff80;
	font-weight: 300;
`;
export const ViewOldVersions = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.625rem;
	color: #ffffff;
	font-weight: 400;
	gap: 0.188rem;
	cursor: pointer;

	@media screen and (max-width: 1300px) {
		font-size: 0.5rem;
	}
`;
export const Sidebar = styled.div<{ isopen: boolean }>`
	width: ${({ isopen }) => (isopen ? "15rem" : "4rem")};
	height: fit-content;
	background-color: #130d26;
	border-radius: 0.75rem;
	border-right: 1px solid #ffffff22;
	/* padding: ${({ isopen }) => (isopen ? "2rem" : "1rem")}; */
	padding: 1rem 0;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	gap: 1rem;
	transition: 300ms;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

	@media screen and (min-width: 1300px) {
		display: none;
	}
	@media screen and (max-width: 1300px) {
		position: fixed;
		left: 0;
		z-index: 10;
		top: 6.25rem;
	}
`;

export const SidebarItem = styled.div<{ selected?: boolean; isopen: boolean }>`
	background-color: ${({ selected }) => (selected ? "#3e3ed761" : "transparent")};
	padding: ${({ isopen }) => (isopen ? "1rem 1.5rem" : "0px")};
	border-radius: 0 0.5rem 0.5rem 0;
	cursor: pointer;
	display: flex;
	justify-content: ${({ isopen }) => (isopen ? "flex-start" : "center")};
	align-items: center;
	color: #fff;
	transition:
		padding 0.3s ease,
		justify-content 0.3s ease;
	width: 100%;
	height: 3.125rem;
	max-height: 3.125rem;
	transition: 300ms;

	& a {
		color: #fff;
	}

	&:hover {
		background-color: #3e3ed761;
	}
`;

export const SidebarToggleButton = styled.div`
	cursor: pointer;
	margin-bottom: 2rem;
`;

export const CollapsedIconWrapper = styled.div`
	font-size: 1.5rem;
`;
