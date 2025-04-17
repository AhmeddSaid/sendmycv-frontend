import React, { useState } from "react";
import styled from "styled-components";
import {
	BillingContainer,
	BillingText,
	ContinueButton,
	Section,
	Title,
} from "@/Library/_Pages/Checkout/Checkout.styles";
import { Textarea } from "@/Library/components/ResumeForm/Form/InputGroup";
import Input from "@/Library/components/UI/Input";

const CustomTextArea = styled(Textarea)``;
const EmailBody = ({
	summary,
	nextStep,
	setSummary,
}: {
	nextStep: () => void;
	summary: {
		subject: string;
		emailbody: string;
		document: string;
		jobField: string;
		emailsToSend: number;
	};
	setSummary: (prevStep: () => void) => void;
}) => {
	const [content, setContent] = useState({
		subject: summary.subject,
		emailbody: summary.emailbody,
	});

	const handleContinue = () => {
		const updateSummary = {
			...summary,
			subject: content.subject,
			emailbody: content.emailbody,
		};
		// @ts-ignore
		setSummary(updateSummary);
		nextStep();
	};

	const { subject, emailbody } = content;
	const isContinueDisabled = !subject || !emailbody;

	return (
		<>
			<Section>
				<Title>Email</Title>
				<BillingText>
					<h3>The email you will send the recruiter.</h3>
				</BillingText>
				<BillingContainer>
					<Input
						label={"Subject"}
						type={"text"}
						placeholder={"Enter email subject line."}
						// @ts-ignore
						value={content.subject}
						onChange={(e: React.SetStateAction<string>) =>
							setContent(prev => {
								// @ts-ignore
								return { ...prev, subject: e.target.value };
							})
						}
					/>

					<Textarea
						label={"Body"}
						placeholder={"Enter your email body."}
						// @ts-ignore
						value={content.emailbody}
						onChange={(_: React.SetStateAction<string>, value) => {
							setContent(prev => {
								// @ts-ignore
								return { ...prev, emailbody: value };
							});
						}}
						name={"emailbody"}
					/>
				</BillingContainer>
				<ContinueButton
					$width="35rem"
					$rounded
					disabled={isContinueDisabled}
					onClick={handleContinue}
					$fontSize="1.5rem"
				>
					Continue
				</ContinueButton>
			</Section>
		</>
	);
};

export default EmailBody;
