"use client";
import styled from "styled-components";
import { Flexbox } from "@/Library/Grids/Grids";
import { BaseForm } from "@/Library/components/ResumeForm/Form";
import { InputGroupWrapper } from "@/Library/components/ResumeForm/Form/InputGroup";
import {
	DocumentSizeSelections,
	FontFamilySelectionsCSR,
	FontSizeSelections,
} from "@/Library/components/ResumeForm/ThemeForm/Selection";
import { THEME_COLORS } from "@/Library/components/ResumeForm/ThemeForm/constants";
import CvInput from "@/Library/components/UI/CVInput";
import { FontFamily } from "@/Library/components/fonts/constants";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import {
	changeSettings,
	DEFAULT_THEME_COLOR,
	GeneralSetting,
	selectSettings,
} from "@/_lib/redux/settingsSlice";

const ThemeColorBox = styled.div<{ color: string; selected: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.5rem;
	height: 2.5rem;
	cursor: pointer;
	border-radius: 0.375rem;
	background-color: ${({ color }) => color};
	color: white;
	font-size: 0.875rem;
`;

const ThemeFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-top: 16px;
`;

const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Title = styled.h1`
	font-size: 1.125rem;
	font-weight: 600;
	color: #fff;
`;

export const ThemeForm = ({ isCoverLetter }: { isCoverLetter?: boolean }) => {
	const settings = useAppSelector(selectSettings);
	const { fontSize, fontFamily, documentSize } = settings;
	const themeColor = settings.themeColor || DEFAULT_THEME_COLOR;
	const dispatch = useAppDispatch();

	const handleSettingsChange = (field: GeneralSetting, value: string) => {
		dispatch(changeSettings({ field, value }));
	};

	return (
		<BaseForm>
			<ThemeFormContainer>
				<SectionContainer>
					{isCoverLetter ? <Title>Cover Setting</Title> : <Title>Resume Setting</Title>}
				</SectionContainer>
				<SectionContainer>
					<CvInput
						label="Theme Color"
						name="themeColor"
						value={settings.themeColor}
						placeholder={DEFAULT_THEME_COLOR}
						onChange={handleSettingsChange}
					/>
					<Flexbox $gap={8} className="mt-2 flex flex-wrap gap-2">
						{THEME_COLORS.map((color, idx) => (
							<ThemeColorBox
								key={idx}
								color={color}
								selected={settings.themeColor === color}
								onClick={() => handleSettingsChange("themeColor", color)}
								onKeyDown={e => {
									if (["Enter", " "].includes(e.key)) handleSettingsChange("themeColor", color);
								}}
								tabIndex={0}
							>
								{settings.themeColor === color ? "✓" : ""}
							</ThemeColorBox>
						))}
					</Flexbox>
				</SectionContainer>
				<SectionContainer>
					<InputGroupWrapper label="Font Family"></InputGroupWrapper>
					<FontFamilySelectionsCSR
						// fontFamily={fontFamily as FontFamily}
						selectedFontFamily={fontFamily}
						themeColor={themeColor}
						handleSettingsChange={handleSettingsChange}
					/>
				</SectionContainer>
				<SectionContainer>
					<CvInput
						label="Font Size (pt)"
						name="fontSize"
						value={fontSize}
						placeholder="11"
						onChange={handleSettingsChange}
						type={"number"}
					/>
					<FontSizeSelections
						fontFamily={fontFamily as FontFamily}
						themeColor={themeColor}
						selectedFontSize={fontSize}
						handleSettingsChange={handleSettingsChange}
					/>
				</SectionContainer>
				<SectionContainer>
					<InputGroupWrapper label="Document Size"></InputGroupWrapper>
					<DocumentSizeSelections
						themeColor={themeColor}
						selectedDocumentSize={documentSize}
						handleSettingsChange={handleSettingsChange}
					/>
				</SectionContainer>
			</ThemeFormContainer>
		</BaseForm>
	);
};
