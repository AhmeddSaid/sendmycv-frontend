import Image from "next/image";
import React from "react";
import copy from "./../../../../../public/icons/copy.svg";
import view from "./../../../../../public/icons/document-view.svg";
import editPen from "./../../../../../public/icons/edit-2.svg";
import trash from "./../../../../../public/icons/trash.svg";
import { Flex } from "@/Library/Grids/Grids";

import uuid from "@/Library/Utils/uuid";
import {
	ListItem,
	ListShell,
} from "@/Library/_Pages/ResumeDetails/ResumeSidebar/ResumeSidebar.styles";
import SendToIcon from "@/Library/components/IconGraphy/SendToIcon/SendToIcon";

const ResumeSidebar = () => {
	const sidebarData = [
		{
			icon: <Image src={editPen} alt="" width={24} height={24} />,
			title: "Edit",
			border: false,
			goldColor: false,
		},
		{
			icon: <Image src={copy} alt="" width={24} height={24} />,
			title: "Duplicate",
			border: false,
			goldColor: false,
		},
		{
			icon: <Image src={trash} alt="" width={24} height={24} />,
			title: "Delete",
			border: false,
			goldColor: false,
		},
		{
			icon: <Image src={view} alt="" width={24} height={24} />,
			title: "Send to HR",
			border: true,
			goldColor: true,
		},
		// },
		// {
		// 	icon: <MagicPenIcon />,
		// 	title: "AI Improve",
		// 	border: true,
		// 	goldColor: false,
		// },
		// {
		// 	icon: <AtsIcon />,
		// 	title: "Check",
		// 	border: false,
		// 	goldColor: true,
		// },
		// {
		// 	icon: <DownLoadIcon />,
		// 	title: "Download",
		// 	border: true,
		// 	goldColor: false,
		// },
		// {
		// 	icon: <ClockIcon />,
		// 	title: "History",
		// 	border: false,
		// 	goldColor: true,
		// },
		{
			icon: <SendToIcon />,
			title: "Share",
			border: false,
			goldColor: false,
		},
	];

	return (
		<ListShell>
			{/*<li>*/}
			{/*	<Flex $justify={"center"} $gap={"2.625rem"}>*/}
			{/*		<BackwardRight />*/}
			{/*		<DividerStyle />*/}
			{/*		<BackwardLeft />*/}
			{/*	</Flex>*/}
			{/*</li>*/}
			{sidebarData.map(item => (
				<ListItem key={uuid()} border={item.border} goldColor={item.goldColor}>
					<Flex $gap={"1rem"}>
						{item.icon}
						<p>{item.title}</p>
					</Flex>
				</ListItem>
			))}
		</ListShell>
	);
};

export default ResumeSidebar;
