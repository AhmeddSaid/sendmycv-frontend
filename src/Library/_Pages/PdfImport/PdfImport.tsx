"use client";
import { useState } from "react";
import styled from "styled-components";
import styles from "./../../../Library/Grids/Spaces.module.css";
import { Flex } from "@/Library/Grids/Grids";
import { Separator } from "@/Library/_Pages/Auth/Auth.styles";
import { ResumeDropzone } from "@/Library/components/ResumeDropzone/ResumeDropzone";
import { Button } from "@/Library/components/UI/Button";

const PageLoaderShell = styled.div`
	border: 1.5px solid white;
	border-radius: 24px;
	text-align: center;
	width: 70%;
	margin: 100px auto;
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding-block: 32px;
`;

export default function ImportResume({ setShow }: { setShow: (show: boolean) => void }) {
	const [hasAddedResume, setHasAddedResume] = useState(false);
	const onFileUrlChange = (fileUrl: string) => {
		setHasAddedResume(Boolean(fileUrl));
	};

	return (
		<main>
			<PageLoaderShell className="mx-auto mt-14 max-w-3xl rounded-md border border-gray-200 px-10 py-10 text-center shadow-md">
				{/*<SectionWithHeadingAndCreateButton*/}
				{/*	heading="You have data saved in browser from prior session"*/}
				{/*	buttonText="Continue where I left off"*/}
				{/*/>*/}
				<Flex $justify={"center"}>
					<Button onClick={() => setShow(false)}>start from Scratch</Button>
				</Flex>

				{/*<OrDivider />*/}
				<Separator>OR</Separator>
				<h1 className={styles.marginTop16}>UpLoad CV</h1>
				<ResumeDropzone setShow={setShow} onFileUrlChange={onFileUrlChange} className="mt-5" />
			</PageLoaderShell>
		</main>
	);
}
