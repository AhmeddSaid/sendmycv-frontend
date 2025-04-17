"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledInputWrapper = styled.div<{ width?: string | undefined }>`
	position: relative;
	width: ${props => props.width || "100%"};

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

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const StyledInput = styled.input<{
	type?: "text" | "password" | "email";
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	width?: string;
}>`
	height: 3.5rem;
	padding: 0 1rem;
	border: 1px solid #fff;
	border-radius: 0.75rem;
	color: #fff;
	//background-color: transparent;
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
	type?: "text" | "password" | "email" | "date" | "file";
	id?: string;
	name?: string;
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	width?: string;
}

export default function Input({
	type = "text",
	id,
	name,
	placeholder,
	value,
	onChange,
	onBlur,
	disabled,
	width,
	...rest
}: InputProps) {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(prev => !prev);
	};

	return (
		<StyledInputWrapper width={width} className="input-wrapper">
			<StyledInput
				{...rest}
				// @ts-ignore
				type={showPassword ? "text" : type}
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={e => {
					// @ts-ignore
					onChange(name, e.target.value);
				}}
				disabled={disabled}
			/>
			{type === "password" && (
				<ToggleIcon onClick={togglePasswordVisibility}>
					{/*<Image src={hidePassword} alt="Toggle password visibility"/>*/}
				</ToggleIcon>
			)}
		</StyledInputWrapper>
	);
}

interface Country {
	name: string;
	code: string;
}

interface CustomDropDownProps {
	countries: Country[];
	selectedCountry: string;
	onSelect: (country: string) => void;
	width?: string;
}

export function CustomDropDown({
	countries,
	selectedCountry,
	onSelect,
	width,
}: CustomDropDownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const dropdownRef = useRef<HTMLDivElement>(null);
	const searchInputRef = useRef<HTMLInputElement>(null);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const filteredCountries = countries.filter(country =>
		country.name.toLowerCase().includes(searchTerm.toLowerCase()),
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
			<StyledSelectWrapper ref={dropdownRef}>
				<StyledDropdownButton onClick={toggleDropdown}>
					{selectedCountry || "Select a country"}
				</StyledDropdownButton>
				{isOpen && (
					<StyledDropdownList>
						<StyledInput
							ref={searchInputRef}
							type="text"
							placeholder="Search countries"
							value={searchTerm}
							onChange={handleSearchChange}
							// width="100%"
							className="search-input"
						/>
						{filteredCountries.map(country => (
							<StyledDropdownItem
								key={country.code}
								onClick={() => {
									onSelect(country.name);
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
