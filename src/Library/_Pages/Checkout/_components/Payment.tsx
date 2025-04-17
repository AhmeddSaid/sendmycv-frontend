"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CardDateHolder, CardNumber, ContinueButton, Section, Title } from "../Checkout.styles";
import cards from "./../../../../../public/icons/banks.svg";
import { Flex } from "@/Library/Grids/Grids";
import Input from "@/Library/components/UI/Input";

export default function Payment({ nextStep }: { nextStep: () => void }) {
	const [cardNumber, setCardNumber] = useState("");
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [cvv, setCvv] = useState("");

	const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value.replace(/\D/g, "");
		if (value.length > 16) value = value.slice(0, 16);

		value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
		setCardNumber(value);
	};

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value.replace(/\D/g, "");
		if (value.length > 4) value = value.slice(0, 4);

		if (value.length > 2 && value.length <= 4) {
			value = value.slice(0, 2) + "/" + value.slice(2);
		}
		setDate(value);
	};

	const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value.replace(/\D/g, "");
		if (value.length > 3) value = value.slice(0, 3);
		setCvv(value);
	};

	const isFormValid =
		cardNumber.replace(/\s/g, "").length === 16 && date.length === 5 && cvv.length === 3;

	return (
		<Section>
			<Title>Payment</Title>
			<Flex $direction="column" $gap="0.5rem" $margin="0 auto 2rem" $width="100%">
				<CardNumber>
					<Input
						type="text"
						placeholder="Card Number"
						width="35rem"
						value={cardNumber}
						onChange={handleCardNumberChange}
					/>
					<Image src={cards} alt="cards" />
				</CardNumber>
				<Input
					type="text"
					placeholder="Name On Card"
					width="35rem"
					value={name}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
				/>
				<CardDateHolder $gap="1rem" $width="35rem">
					<Input
						type="text"
						placeholder="Expiration date (MM/YY)"
						value={date}
						onChange={handleDateChange}
					/>
					<Input
						type="text"
						placeholder="Security code (CVV)"
						value={cvv}
						onChange={handleCvvChange}
					/>
				</CardDateHolder>
			</Flex>
			<ContinueButton
				$rounded
				$width="35rem"
				$fontSize="1.5rem"
				onClick={nextStep}
				disabled={!isFormValid}
			>
				Subscribe Now
			</ContinueButton>
		</Section>
	);
}
