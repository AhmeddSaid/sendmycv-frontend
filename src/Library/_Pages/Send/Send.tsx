"use client";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import success from "../../../../public/success.webp";
import BackButton from "../Checkout/_components/UI/BackButton";
import StepsProgress from "../Checkout/_components/UI/StepsProgress";
import ChooseDocument from "./ChooseDocument/ChooseDocument";
import { SendContainer } from "./Send.styles";
import Summary from "./Summary/Summary";
import { ContinueButton, SuccessContainer, Title } from "@/Library/_Pages/Checkout/Checkout.styles";
import ChooseSmtp from "@/Library/_Pages/Send/SMTP/ChooseSMTP";
import EmailBody from "@/Library/_Pages/Send/SMTP/EmailBody";
import { StepProvider, useStep } from "@/app/[locale]/(protected)/send/_sendUtils/stepContext";

function SendContent({
	cv,
	cover,
	userDocs,
	remainingCredits,
	dailyLimit,
}: {
	cv?: string;
	cover?: string;
	userDocs: any;
	remainingCredits: number;
	dailyLimit: number;
}) {
	const { step, nextStep, prevStep, summary, setSummary } = useStep();

	if (step === 5)
		return (
			<SuccessContainer>
				<Image src={success} alt="success" />
				<Title>Congratulations!</Title>
				<p>Your campaign request has been sent successfully 🌟</p>
				<Link href={"/documents"}>
					<ContinueButton $rounded $fontSize="1.5rem" $width="27.5rem">
						Back To Home
					</ContinueButton>
				</Link>
			</SuccessContainer>
		);

	// @ts-ignore
	return (
		<SendContainer>
			<BackButton step={step} prevStep={prevStep} />
			<StepsProgress step={step} totalSteps={5} />
			{step === 1 && (
				<ChooseDocument
					nextStep={nextStep}
					// @ts-ignore
					setSummary={setSummary}
					remainingCredits={remainingCredits}
					userDocs={userDocs}
					summary={summary}
					dailyLimit={dailyLimit}
				/>
			)}
			{/*@ts-ignore*/}
			{step === 2 && <ChooseSmtp setSummary={setSummary} summary={summary} nextStep={nextStep} />}
			{/*@ts-ignore*/}
			{step === 3 && <EmailBody setSummary={setSummary} summary={summary} nextStep={nextStep} />}
			{/*@ts-ignore*/}
			{step === 4 && <Summary nextStep={nextStep} summary={summary} />}
		</SendContainer>
	);
}

export default function Send(
	props: JSX.IntrinsicAttributes & {
		cv?: string;
		cover?: string;
		userDocs: any;
		remainingCredits: number;
		dailyLimit: number;
	},
) {
	return (
		<StepProvider>
			<SendContent {...props} />
		</StepProvider>
	);
}
