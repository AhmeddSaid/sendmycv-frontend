"use client";
import { usePDF } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";
import { useSetDefaultScale } from "@/Library/components/Resume/hooks";

const ControlBarContainer = styled.div`
	position: sticky;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	height: 3rem;
	align-items: center;
	justify-content: center;
	padding: 0 1.5rem;
	color: #4b5563;
	@media (min-width: 1024px) {
		justify-content: space-between;
	}
`;

const ControlsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const RangeInput = styled.input`
	appearance: none;
	width: 100px;
	height: 5px;
	background: #d1d5db; /* Tailwind's border-gray-300 */
	border-radius: 5px;
	outline: none;
	transition: 0.2s;

	&:hover {
		background: #9ca3af; /* Tailwind's hover:bg-gray-100 */
	}
`;

const PercentageDisplay = styled.div`
	width: 2.5rem;
	color: white;
`;

const CheckboxLabel = styled.label`
	display: none;
	align-items: center;
	gap: 0.25rem;

	@media (min-width: 1024px) {
		display: flex;
	}

	span {
		color: white;
	}
`;

const CheckboxInput = styled.input`
	margin-top: 0.125rem;
	width: 1rem;
	height: 1rem;
`;

const DownloadButton = styled.a`
	margin-left: 0.25rem;
	display: flex;
	align-items: center;
	gap: 0.25rem;
	padding: 0.25rem 0.75rem;
	border: 1px solid #d1d5db;
	border-radius: 0.375rem;
	background: white;
	text-decoration: none;
	color: inherit;
	cursor: pointer;

	&:hover {
		background: #f3f4f6; /* Tailwind's hover:bg-gray-100 */
	}

	@media (min-width: 1024px) {
		margin-left: 2rem;
	}
`;

const ResumeControlBar = ({
	scale,
	setScale,
	documentSize,
	document,
	pdf,
	fileName,
	isCoverLetter,
}: {
	scale: number;
	setScale: (scale: number) => void;
	documentSize: string;
	document: JSX.Element;
	fileName: string;
	pdf: ReactNode;
	isCoverLetter?: boolean | undefined;
}) => {
	const { scaleOnResize, setScaleOnResize } = useSetDefaultScale({
		setScale,
		documentSize,
	});
	const [instance, update] = usePDF({ document });

	useEffect(() => {
		update(document);
	}, [update, document, scale]);

	return (
		<ControlBarContainer>
			<ControlsWrapper>
				<RangeInput
					type="range"
					min={0.5}
					max={1.5}
					step={0.01}
					value={scale}
					onChange={e => {
						setScaleOnResize(false);
						setScale(Number(e.target.value));
					}}
				/>
				<PercentageDisplay>{`${Math.round(scale * 100)}%`}</PercentageDisplay>
				<CheckboxLabel>
					<CheckboxInput
						type="checkbox"
						checked={scaleOnResize}
						onChange={() => setScaleOnResize(prev => !prev)}
					/>
					<span>Autoscale</span>
				</CheckboxLabel>
				{/*<DownloadButton href={instance.url!} download={fileName}>*/}
				{/*    <span>Download Resume</span>*/}
				{/*</DownloadButton>*/}
				<DownloadButton href={instance.url!} download={fileName} id={"download-resume"}>
					{isCoverLetter ? <span>Download Cover </span> : <span>Download Resume</span>}
				</DownloadButton>
				{/*<DownloadButton>*/}
				{/*      <PDFDownloadLink document={pdf as React.ReactElement} fileName={fileName}>*/}
				{/*         Download*/}
				{/*     </PDFDownloadLink>*/}
				{/* </DownloadButton>*/}
			</ControlsWrapper>
		</ControlBarContainer>
	);
};

/**
 * Load ResumeControlBar client-side since it uses usePDF, which is a web-specific API
 */
export const ResumeControlBarCSR = dynamic(() => Promise.resolve(ResumeControlBar), {
	ssr: false,
});

const ControlBarBorder = styled.div`
	position: absolute;
	bottom: 3rem;
	width: 100%;
	border-top: 1px solid #e5e7eb;
	background: #f9fafb;
`;

export const ResumeControlBarBorder = () => <ControlBarBorder />;
