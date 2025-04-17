import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner"; // @ts-ignore
import styles from "./../../../Grids/Spaces.module.css";
import {
	BillingContainer,
	BillingText,
	ContinueButton,
	Section,
	Title,
} from "@/Library/_Pages/Checkout/Checkout.styles";
import Input from "@/Library/components/UI/Input";
import { Paragraph } from "@/Library/components/documentation"; // @ts-ignore
// @ts-ignore
const ChooseSmtp = ({ nextStep, summary, setSummary }) => {
	const [credentials, setCredentials] = useState({
		email: summary.smtpemail,
		password: summary.smtpPassword,
	});

	const handleContinue = () => {
		if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
			toast.error("Please enter a valid Gmail email address.");
			return;
		}

		const updateSummary = {
			...summary,
			smtpemail: credentials.email,
			smtpPassword: credentials.password,
		};
		// @ts-ignore
		setSummary(updateSummary);
		nextStep();
	};

	const { email, password } = credentials;
	const isContinueDisabled = !email || !password;
	// @ts-ignore
	// @ts-ignore
	return (
		<>
			<Section>
				<Title>Setup gmail smtp</Title>
				<BillingText>
					<h3>Authenticate with your gmail email address.</h3>
				</BillingText>
				<BillingContainer>
					<Input
						label={"Enter your email address you want to send from"}
						type={"text"}
						placeholder={"Enter your email address"}
						// @ts-ignore
						value={credentials.email}
						onChange={(e: React.SetStateAction<string>) =>
							setCredentials(prev => {
								// @ts-ignore
								return { ...prev, email: e.target.value };
							})
						}
					/>

					<Input
						label={"Enter your gmail app password"}
						placeholder={"Enter your password"}
						type={"text"}
						// @ts-ignore
						value={credentials.password}
						onChange={(e: React.SetStateAction<string>) =>
							setCredentials(prev => {
								// @ts-ignore
								return { ...prev, password: e.target.value };
							})
						}
						// @ts-ignore
						required
					/>
					<h3>
						Get the app password from your Gmail account To get an App Password for your Gmail
						account, follow these detailed steps:
					</h3>
					<Paragraph style={{ lineHeight: "1.5rem" }}>
						<br />
						Note: You may need to sign in to your Google Account. You’ll need to have two-step
						verification enabled on your Gmail account before generating an App Password.
						<br />
					</Paragraph>

					<Paragraph style={{ lineHeight: "1.5rem" }}>
						{/*Get the app password from your Gmail account To get an App Password for your Gmail*/}
						{/*account, follow these detailed steps: Note: You’ll need to have two-step verification*/}
						{/*enabled on your Gmail account before generating an App Password. If you haven’t enabled*/}
						{/*it, do so first by going to your Google Account settings. Access Your Google Account:*/}
						{/*Start by visiting the Google Account management page. You can do this by navigating to*/}
						{/*https://myaccount.google.com/. Sign In: Sign in to the Google Account associated with*/}
						{/*the Gmail address you want to use for sending emails programmatically. Security: In the*/}
						{/*left sidebar, click on “Security.” Scroll down to How you sign in to google and click on*/}
						{/*2-step verification. App Passwords: Scroll down to “App passwords.” Click on “App*/}
						{/*passwords.” You may be prompted to re-enter your password for security purposes.*/}
						<div className={styles.marginBottom32}>
							<strong>Step 1 Create app: </strong> <br />
							Visit{" "}
							<Link href={"https://myaccount.google.com/apppasswords"} target={"_blank"}>
								Create and manage your app passwords.
							</Link>
						</div>
						<div className={styles.marginBottom32}>
							<strong>Step 2 App name: </strong>
							<br />
							Enter a custom name for this App Password. It helps you identify it later, so choose
							something related to the application or use case where you plan to use this App
							Password.
						</div>
						<div className={styles.marginBottom32}>
							<strong>Step 3 Create:</strong>
							<br />
							Click the “Create” button. Google will create a unique 16-character App Password for
							your custom application/device.
						</div>
					</Paragraph>
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

export default ChooseSmtp;
