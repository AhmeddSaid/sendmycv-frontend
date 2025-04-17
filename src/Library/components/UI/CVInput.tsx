"use client";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import hidePassword from "./../../../../public/icons/hide-password.svg";
import { Flex } from "@/Library/Grids/Grids";

const StyledInputWrapper = styled.div<{ width?: string | undefined }>`
	position: relative;
	width: ${props => props.width};

	input[type="date"]::-webkit-inner-spin-button,
	input[type="date"]::-webkit-calendar-picker-indicator {
		background: transparent;
		bottom: 0;
		color: transparent;
		cursor: pointer;
		height: auto;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		width: auto;
		//pointer-events: none;
	}

	label {
		font-size: 14px;
	}

	& svg {
		position: absolute;
		z-index: 9;
		cursor: pointer;
		right: 18px;
		top: 50%;
		transform: translateY(-50%);
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const StyledInput = styled.input<{
	type?: React.HTMLInputTypeAttribute;
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	width?: string;
	Error?: string | undefined;
}>`
	height: 3.5rem;
	padding: 0 1rem;
	//border: 1px solid #fff;
	border: 1px solid ${({ Error }) => (Error ? "#d41a1a" : "#fff")};
	border-radius: 0.75rem;
	color: #fff;
	background-color: transparent;
	font-size: 1rem;
	font-weight: 400;
	width: 100%;
	outline: none;
	transition: 300ms;
	margin: 0.75rem 0;

	&.search-input {
		margin: 0;
		border-radius: 0.75rem 0.75rem 0 0;
		position: sticky;
		top: 0;
		background-color: #1d133d;
	}

	&::placeholder {
		color: #fff;
		opacity: 0.6;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	&:focus {
		border-color: #5a5aff;
	}
`;

const StyledSelectWrapper = styled.div`
	position: relative;
	width: 100%;
`;

const StyledDropdownButton = styled.div`
	height: 3.5rem;
	padding: 0 1rem;
	border: 1px solid #fff;
	border-radius: 0.75rem;
	color: #fff;
	background-color: #140e27;
	font-size: 1rem;
	font-weight: 400;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
`;

const StyledDropdownList = styled.div`
	transition: 300ms;
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background-color: #140e27;
	max-height: 16rem;
	overflow-y: auto;
	border-radius: 0.75rem;
	border: 1px solid #fff;
	z-index: 10;
	margin-top: 0.5rem;
	width: 100%;
`;

const StyledDropdownItem = styled.div`
	padding: 1rem;
	color: #fff;
	font-size: 1rem;
	font-weight: 400;
	cursor: pointer;

	&:hover {
		background-color: #5a5aff;
	}
`;

const ToggleIcon = styled.div`
	position: absolute;
	right: 1rem;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	color: #fff;

	&:hover {
		opacity: 0.8;
	}
`;

interface InputProps {
	type?: React.HTMLInputTypeAttribute;
	id?: string | undefined;
	name?: string | undefined;
	placeholder?: string | undefined;
	value?: string | undefined;
	onBlur?: any;
	onChange?: any;
	disabled?: boolean | undefined;
	width?: string | undefined;
	label?: string | undefined;
	Error?: string | undefined;
	generateWithAI?: () => ReactNode | ReactNode[];
}

export default function CvInput({
	type = "text",
	id,
	name,
	placeholder,
	value,
	onChange,
	onBlur,
	disabled,
	width,
	label,
	Error,
	generateWithAI,
	...rest
}: InputProps) {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(prev => !prev);
	};

	return (
		<StyledInputWrapper width={width} className="input-wrapper">
			<Flex $justify={"space-between"} $align={"center"}>
				<label htmlFor={id}>{label}</label>
				{generateWithAI && <>{generateWithAI}</>}
			</Flex>
			<StyledInput
				{...rest}
				type={showPassword ? "text" : type}
				id={id ?? ""}
				name={name ?? ""}
				placeholder={placeholder ?? ""}
				value={value ?? ""}
				onChange={e => onChange?.(name ?? "", e.target.value)}
				disabled={disabled ?? false}
				Error={Error}
			/>

			{type === "password" && (
				<ToggleIcon onClick={togglePasswordVisibility}>
					<Image src={hidePassword} alt="Toggle password visibility" />
				</ToggleIcon>
			)}
		</StyledInputWrapper>
	);
}
