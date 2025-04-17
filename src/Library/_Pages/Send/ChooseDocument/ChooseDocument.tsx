import React, { useState } from "react";
import { toast } from "sonner";
import {
	BillingContainer,
	BillingText,
	ContinueButton,
	Section,
	Title,
} from "../../Checkout/Checkout.styles";
import Input, { CVCustomDropDown } from "@/Library/components/UI/Input";
import { Paragraph } from "@/Library/components/documentation";

export default function ChooseDocument({
	nextStep,
	setSummary,
	remainingCredits,
	userDocs,
	summary,
	dailyLimit,
}: {
	nextStep: () => void;
	setSummary: (summary: { document: string; emailsToSend: string }) => void;
	remainingCredits: number;
	userDocs: { title: string; id: string; reference: string }[];
	summary: any;
	dailyLimit: number;
}) {
	const documentChoices = userDocs.map(doc => ({
		name: doc.title,
		code: doc.reference,
	}));

	const [doc, setDoc] = useState<string>(summary.document);
	const [docId, setDocId] = useState<string>(summary.documentId);
	const [emails, setEmails] = useState<number>(summary.emailsToSend);

	const isContinueDisabled =
		!doc || !emails || doc === "Select document" || Number(emails) > Number(remainingCredits);

	const handleContinue = () => {
		if (dailyLimit <= 0) {
			toast.error("Daily limit reached, please try again tomorrow.");
			return;
		}

		if (emails > dailyLimit) {
			toast.error(`Your daily limit is ${dailyLimit}, you can't exceed that.`);
			return;
		}
		const updateSummary = {
			...summary,
			documentId: docId,
			document: doc,
			emailsToSend: emails,
		};
		// @ts-ignore
		setSummary(updateSummary);
		nextStep();
	};

	// @ts-ignore
	return (
		<Section>
			<Title>Send to recruiters</Title>
			<BillingText>
				<h3>Please Select Options</h3>
				<p>Choose a document to send, and how many emails to send.</p>
			</BillingText>
			<BillingContainer>
				<CVCustomDropDown
					data={documentChoices}
					selectedItem={doc}
					onSelect={(id: string, c: string) => {
						setDoc(id);
						setDocId(c);
					}}
					search={false}
				/>
				<Input
					label={"How many email do you want to send?"}
					type={"number"}
					//@ts-ignore
					value={emails}
					//@ts-ignore
					onChange={(e: React.SetStateAction<string>) => setEmails(e.target.value)}
					ErrorMessage={
						emails > remainingCredits
							? `Exceeds credits, buy more credits or choose lower amount.`
							: null
					}
				/>
				<Paragraph>{`Available credits: ${remainingCredits}`}</Paragraph>
				<Paragraph>{`Daily Limit: ${dailyLimit} out of 1000`}</Paragraph>
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
	);
}
