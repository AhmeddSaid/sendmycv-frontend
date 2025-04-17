"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import hidePassword from "./../../../../public/icons/hide-password.svg";
import uuid from "@/Library/Utils/uuid";
import InputError from "@/Library/components/UI/InputError";

const StyledInputWrapper = styled.div<{ width?: string | undefined }>`
	position: relative;
	width: ${props => props.width};

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

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
	Error?: string | null | undefined;
	autoComplete?: string;
	readOnly?: boolean;
	className?: string;
	ErrorMessage?: string | null;
}>`
	height: 3.5rem;
	padding: 0 1rem;
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
	top: 46%;
	//transform: translateY(-50%);
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
	Error?: string | null;
	autoComplete?: string;
	readOnly?: boolean;
	className?: string;
	ErrorMessage?: string | null;
}

export default function Input({
	type = "text",
	id,
	name,
	placeholder,
	value,
	label,
	Error,
	disabled = false,
	autoComplete = "no",
	width,
	readOnly = false,
	className,
	ErrorMessage,
	...rest
}: InputProps) {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(prev => !prev);
	};

	const errorId = `${name || label || uuid()}-error`;

	return (
		<>
			<StyledInputWrapper width={width} className="input-wrapper">
				<label htmlFor={id}>{label}</label>
				<StyledInput
					type={showPassword ? "text" : type}
					id={id ?? ""}
					name={name ?? label}
					placeholder={placeholder ?? ""}
					value={value ?? ""}
					disabled={disabled ?? false}
					Error={ErrorMessage}
					className={`${ErrorMessage && "error"} ${className}`}
					autoComplete={autoComplete}
					readOnly={readOnly}
					required={false}
					aria-invalid={!!ErrorMessage}
					aria-describedby={ErrorMessage ? errorId : undefined}
					{...rest}
				/>

				{type === "password" && (
					<ToggleIcon onClick={togglePasswordVisibility}>
						<Image src={hidePassword} alt="Toggle password visibility" />
					</ToggleIcon>
				)}
			</StyledInputWrapper>

			{ErrorMessage && <InputError message={ErrorMessage} />}
		</>
	);
}

interface DropdownData {
	name: string;
	code: string;
}

interface CustomDropDownProps {
	data: DropdownData[];
	selectedItem: string;
	onSelect: (country: string, code: string) => void;
	width?: string;
	search?: boolean;
	showArrow?: boolean;
}

export function CustomDropDown({
	data,
	selectedItem,
	onSelect,
	width,
	search = true,
	showArrow = false,
}: CustomDropDownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const dropdownRef = useRef<HTMLDivElement>(null);
	const searchInputRef = useRef<HTMLInputElement>(null);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const filteredCountries = data.filter(item =>
		item.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const toggleDropdown = () => {
		setIsOpen(prev => !prev);
	};

	useEffect(() => {
		if (isOpen && searchInputRef.current) {
			searchInputRef.current.focus();
		}
	}, [isOpen]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<StyledInputWrapper width={width} className="country-dropdown input-wrapper">
			<svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M17.4181 0.950195L10.8981 7.4702C10.1281 8.2402 8.86813 8.2402 8.09813 7.4702L1.57812 0.950195"
					stroke="white"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>

			<StyledSelectWrapper ref={dropdownRef}>
				<StyledDropdownButton onClick={toggleDropdown}>
					{selectedItem || "Select a country"}
				</StyledDropdownButton>
				{isOpen && (
					<StyledDropdownList>
						{search ? (
							<StyledInput
								ref={searchInputRef}
								type="text"
								placeholder="Search countries"
								value={searchTerm}
								onChange={handleSearchChange}
								// width="100%"
								className="search-input"
							/>
						) : null}
						{filteredCountries.map(country => (
							<StyledDropdownItem
								key={country.code}
								onClick={() => {
									onSelect(country.name, country.code);
									setSearchTerm("");
									setIsOpen(false);
								}}
							>
								{country.name}
							</StyledDropdownItem>
						))}
					</StyledDropdownList>
				)}
			</StyledSelectWrapper>
		</StyledInputWrapper>
	);
}

export function CVCustomDropDown({ data, selectedItem, onSelect, width }: CustomDropDownProps) {
	const [isOpen, setIsOpen] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => {
		setIsOpen(prev => !prev);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<StyledInputWrapper width={width} className="country-dropdown input-wrapper">
			<svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M17.4181 0.950195L10.8981 7.4702C10.1281 8.2402 8.86813 8.2402 8.09813 7.4702L1.57812 0.950195"
					stroke="white"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>

			<StyledSelectWrapper ref={dropdownRef}>
				<StyledDropdownButton onClick={toggleDropdown}>
					{selectedItem || "Select a country"}
				</StyledDropdownButton>
				{isOpen && (
					<StyledDropdownList>
						{data.map(country => (
							<StyledDropdownItem
								key={country.code}
								onClick={() => {
									onSelect(country.name, country.code);
									setIsOpen(false);
								}}
							>
								{country.name}
							</StyledDropdownItem>
						))}
					</StyledDropdownList>
				)}
			</StyledSelectWrapper>
		</StyledInputWrapper>
	);
}
