"use client";

import { StaticImageData } from "next/image";
import { HowItWorksHolder, SectionTitle } from "../Home.styles";
import { Flex } from "@/Library/Grids/Grids";
import HowItWorksCard from "@/Library/components/UI/HowItWorksCard";

export default function HowItWorks({
	data,
}: {
	data: {
		id: number;
		title: string;
		subtitle: string;
		image: StaticImageData;
	}[];
}) {
	return (
		<HowItWorksHolder id={"how-it-works"} $direction="column" $gap="5rem">
			<SectionTitle>How it Works</SectionTitle>
			<Flex $direction="column" $gap="2.625rem">
				{data.map((item, index) => (
					<HowItWorksCard key={item.id} index={index + 1} {...item} />
				))}
			</Flex>
		</HowItWorksHolder>
	);
}
