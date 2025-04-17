import React from "react";
import { toast } from "sonner";
import { BillingText, ContinueButton, Section, Title } from "../../Checkout/Checkout.styles";
import sendAction from "@/app/[locale]/(protected)/send/action";

export default function Summary({
	nextStep,
	summary,
}: {
	nextStep: () => void;
	summary: {
		subject: string;
		emailbody: string;
		document: string;
		jobField: string;
		emailsToSend: number;
	};
}) {
	const [loading, setLoading] = React.useState(false);
	const submitForm = async () => {
		setLoading(true);
		try {
			const res = await sendAction(summary);
			if (!res.failed) {
				nextStep();
			} else {
				toast.error(res.message ?? "Something went wrong, please try again later");
			}
		} catch (e) {
			toast.error("Something went wrong, please try again later");
		}

		setLoading(false);
	};
	return (
		<Section>
			<Title>Review Your Selections</Title>
			<BillingText width="40%" align="start">
				<h3>You&apos;re about to send the following details:</h3>
				<p>
					<strong>Document to send:</strong> {summary.document || "Not selected"}
				</p>
				<p>
					<strong>Number of Emails:</strong> {summary.emailsToSend || "Not selected"}
				</p>

				<p>
					<strong>Email:</strong> {summary.subject || "Not selected"}
				</p>

				<p>{summary.emailbody || "Not selected"}</p>
				<p>
					Please confirm the information before continuing. Once you proceed, the emails will be
					sent to recruiters.
				</p>
			</BillingText>

			<ContinueButton
				disabled={loading}
				$width="35rem"
				$rounded
				onClick={submitForm}
				$fontSize="1.5rem"
			>
				Confirm and Send
			</ContinueButton>
		</Section>
	);
}
