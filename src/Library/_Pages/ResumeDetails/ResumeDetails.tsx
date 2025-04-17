"use client";
import Image from "next/image";
import { Flex, Section } from "@/Library/Grids/Grids";
import { ResumeDetailsWrapper } from "@/Library/_Pages/ResumeDetails/ResumeDetails.styles";
import ResumeDetailsCv from "@/Library/_Pages/ResumeDetails/ResumeDetailsCv/ResumeDetailsCv";
import ResumeSidebar from "@/Library/_Pages/ResumeDetails/ResumeSidebar/ResumeSidebar";
import Navbar from "@/Library/components/Navbar/Navbar";
import bg from "/public/Resume Details.svg";

const ResumeDetails = ({ content }: { content: any }) => {
	return (
		<ResumeDetailsWrapper>
			<Image className={"resumeBg"} src={bg} alt={""} fill />
			<Section>
				<Navbar hasSubscription={false} />
				<Flex $align={"start"} $margin={"5rem 0 0 0"} $gap={"3.31rem"}>
					<ResumeSidebar />
					<ResumeDetailsCv resume={content} />
				</Flex>
			</Section>
		</ResumeDetailsWrapper>
	);
};

export default ResumeDetails;
