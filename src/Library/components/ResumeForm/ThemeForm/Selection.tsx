import dynamic from "next/dynamic";
import styled from "styled-components";
import {
	FONT_FAMILY_TO_DISPLAY_NAME,
	FONT_FAMILY_TO_STANDARD_SIZE_IN_PT,
	FontFamily,
} from "@/Library/components/fonts/constants";
import { getAllFontFamiliesToLoad } from "@/Library/components/fonts/lib";
import { PX_PER_PT } from "@/_lib/constants";
import { GeneralSetting } from "@/_lib/redux/settingsSlice";

const SelectionContainer = styled.div<{ $selectedColor: string; $isSelected: boolean }>`
	display: flex;
	width: 105px;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	border-radius: 0.375rem;
	border: 1px solid #d1d5db;
	padding: 0.375rem 0;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	text-align: center;

	&:hover {
		border-color: #9ca3af;
		background-color: rgba(243, 244, 246, 0.56);
	}

	${({ $isSelected, $selectedColor }) =>
		$isSelected &&
		`
      color: white;
      background-color: ${$selectedColor};
      border-color: ${$selectedColor};
    `}
`;

const Selection = ({
	selectedColor,
	isSelected,
	style = {},
	onClick,
	children,
}: {
	selectedColor: string;
	isSelected: boolean;
	style?: React.CSSProperties;
	onClick: () => void;
	children: React.ReactNode;
}) => (
	<SelectionContainer
		$selectedColor={selectedColor}
		$isSelected={isSelected}
		style={style}
		onClick={onClick}
		onKeyDown={e => {
			if (["Enter", " "].includes(e.key)) onClick();
		}}
		tabIndex={0}
	>
		{children}
	</SelectionContainer>
);

const SelectionsWrapper = styled.div`
	margin-top: 0.5rem;
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
`;

const FontFamilySelections = ({
	selectedFontFamily,
	themeColor,
	handleSettingsChange,
}: {
	selectedFontFamily: string;
	themeColor: string;
	handleSettingsChange: (field: GeneralSetting, value: string) => void;
}) => {
	const allFontFamilies = getAllFontFamiliesToLoad();
	return (
		<SelectionsWrapper>
			{allFontFamilies.map((fontFamily, idx) => {
				const isSelected = selectedFontFamily === fontFamily;
				const standardSizePt = FONT_FAMILY_TO_STANDARD_SIZE_IN_PT[fontFamily];
				return (
					<Selection
						key={idx}
						selectedColor={themeColor}
						isSelected={isSelected}
						style={{
							fontFamily,
							fontSize: `${standardSizePt * PX_PER_PT}px`,
						}}
						onClick={() => handleSettingsChange("fontFamily", fontFamily)}
					>
						{FONT_FAMILY_TO_DISPLAY_NAME[fontFamily]}
					</Selection>
				);
			})}
		</SelectionsWrapper>
	);
};

export const FontFamilySelectionsCSR = dynamic(() => Promise.resolve(FontFamilySelections), {
	ssr: false,
});

export const FontSizeSelections = ({
	selectedFontSize,
	fontFamily,
	themeColor,
	handleSettingsChange,
}: {
	fontFamily: FontFamily;
	themeColor: string;
	selectedFontSize: string;
	handleSettingsChange: (field: GeneralSetting, value: string) => void;
}) => {
	const standardSizePt = FONT_FAMILY_TO_STANDARD_SIZE_IN_PT[fontFamily];
	const compactSizePt = standardSizePt - 1;

	return (
		<SelectionsWrapper>
			{["Compact", "Standard", "Large"].map((type, idx) => {
				const fontSizePt = String(compactSizePt + idx);
				const isSelected = fontSizePt === selectedFontSize;
				return (
					<Selection
						key={idx}
						selectedColor={themeColor}
						isSelected={isSelected}
						style={{
							fontFamily,
							fontSize: `${Number(fontSizePt) * PX_PER_PT}px`,
						}}
						onClick={() => handleSettingsChange("fontSize", fontSizePt)}
					>
						{type}
					</Selection>
				);
			})}
		</SelectionsWrapper>
	);
};

export const DocumentSizeSelections = ({
	selectedDocumentSize,
	themeColor,
	handleSettingsChange,
}: {
	themeColor: string;
	selectedDocumentSize: string;
	handleSettingsChange: (field: GeneralSetting, value: string) => void;
}) => (
	<SelectionsWrapper>
		{["Letter", "A4"].map((type, idx) => (
			<Selection
				key={idx}
				selectedColor={themeColor}
				isSelected={type === selectedDocumentSize}
				onClick={() => handleSettingsChange("documentSize", type)}
			>
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<div>{type}</div>
					<div style={{ fontSize: "0.75rem" }}>
						{type === "Letter" ? "(US, Canada)" : "(other countries)"}
					</div>
				</div>
			</Selection>
		))}
	</SelectionsWrapper>
);
