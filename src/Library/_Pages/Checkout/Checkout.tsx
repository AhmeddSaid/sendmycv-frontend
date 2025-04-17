"use client";
import React, { useState } from "react";
import { CheckoutContainer } from "./Checkout.styles";
import Billing from "./_components/Billing";
import Payment from "./_components/Payment";
import PaymentFrequency from "./_components/PaymentFrequency";
import Success from "./_components/Success";
import BackButton from "./_components/UI/BackButton";
import StepsProgress from "./_components/UI/StepsProgress";

export default function Checkout() {
	const [step, setStep] = useState(1);

	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);

	if (step === 4) return <Success />;
	return (
		<CheckoutContainer>
			<BackButton step={step} prevStep={prevStep} />
			<StepsProgress step={step} totalSteps={3} />
			{step === 1 && <PaymentFrequency nextStep={nextStep} />}
			{step === 2 && <Billing nextStep={nextStep} />}
			{step === 3 && <Payment nextStep={nextStep} />}
		</CheckoutContainer>
	);
}
