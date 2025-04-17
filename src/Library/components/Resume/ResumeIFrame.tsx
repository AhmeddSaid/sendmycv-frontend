"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Frame from "react-frame-component";
import styled from "styled-components";
import { getAllFontFamiliesToLoad } from "@/Library/components/fonts/lib";
import {
	A4_HEIGHT_PX,
	A4_WIDTH_PT,
	A4_WIDTH_PX,
	LETTER_HEIGHT_PX,
	LETTER_WIDTH_PT,
	LETTER_WIDTH_PX,
} from "@/_lib/constants";

const getIframeInitialContent = (isA4: boolean) => {
	const width = isA4 ? A4_WIDTH_PT : LETTER_WIDTH_PT;
	const allFontFamilies = getAllFontFamiliesToLoad();

	const allFontFamiliesPreloadLinks = allFontFamilies
		.map(
			font => `
        <link rel="preload" as="font" href="/fonts/${font}-Regular.ttf" type="font/ttf" crossorigin="anonymous">
        <link rel="preload" as="font" href="/fonts/${font}-Bold.ttf" type="font/ttf" crossorigin="anonymous">`,
		)
		.join("");

	const allFontFamiliesFontFaces = allFontFamilies
		.map(
			font => `
        @font-face {font-family: "${font}"; src: url("/fonts/${font}-Regular.ttf");}
        @font-face {font-family: "${font}"; src: url("/fonts/${font}-Bold.ttf"); font-weight: bold;}`,
		)
		.join("");

	return `<!DOCTYPE html>
<html>
  <head>
    ${allFontFamiliesPreloadLinks}
    <style>
      ${allFontFamiliesFontFaces}
    </style>
  </head>
  <body style='overflow: auto; width: ${width}; margin: 0; padding: 0; -webkit-text-size-adjust:none;'>
    <div></div>
  </body>
</html>`;
};

/**
 * Styled Components
 */
const OuterContainer = styled.div<{ width: number; height: number; scale: number }>`
	max-width: ${({ width, scale }) => width * scale}px;
	max-height: ${({ height, scale }) => height * scale}px;
`;

const InnerContainer = styled.div<{ width: number; height: number; scale: number }>`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	transform: scale(${({ scale }) => scale});
	transform-origin: top left;
	background: white;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

/**
 * Iframe is used here for style isolation since react-pdf uses pt units.
 * It creates a sandbox document body that uses letter/A4 pt size as width.
 */
const ResumeIframe = ({
	documentSize,
	scale,
	children,
	enablePDFViewer = false,
}: {
	documentSize: string;
	scale: number;
	children: React.ReactNode;
	enablePDFViewer?: boolean;
}) => {
	const isA4 = documentSize === "A4";
	const iframeInitialContent = useMemo(() => getIframeInitialContent(isA4), [isA4]);

	if (enablePDFViewer) {
		return (
			<DynamicPDFViewer style={{ width: "100%", height: "100%" }}>
				{children as any}
			</DynamicPDFViewer>
		);
	}

	const width = isA4 ? A4_WIDTH_PX : LETTER_WIDTH_PX;
	const height = isA4 ? A4_HEIGHT_PX : LETTER_HEIGHT_PX;

	return (
		<OuterContainer width={width} height={height} scale={scale}>
			<InnerContainer width={width} height={height} scale={scale}>
				<Frame
					style={{ width: "100%", height: "100%", background: "white" }}
					initialContent={iframeInitialContent}
					key={isA4 ? "A4" : "LETTER"}
				>
					{children}
				</Frame>
			</InnerContainer>
		</OuterContainer>
	);
};

/**
 * Load iframe client-side since iframe can't be SSR
 */
export const ResumeIframeCSR = dynamic(() => Promise.resolve(ResumeIframe), {
	ssr: false,
});

// PDFViewer is only used for debugging. Its size is quite large, so we make it a dynamic import
const DynamicPDFViewer = dynamic(
	() => import("@react-pdf/renderer").then(module => module.PDFViewer),
	{
		ssr: false,
	},
);
