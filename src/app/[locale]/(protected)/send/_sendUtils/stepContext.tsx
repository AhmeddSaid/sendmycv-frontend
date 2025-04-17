"use client";

import { createContext, useContext, useState } from "react";

// Define the context type
interface StepContextType {
	step: number;
	nextStep: () => void;
	prevStep: () => void;
	summary: {
		document: string;
		emailsToSend: number;
		smtpemail: string;
		smtpPassword: string;
	};
	setSummary: React.Dispatch<
		React.SetStateAction<{
			document: string;
			emailsToSend: string;
			smtpemail: string;
			smtpPassword: string;
		}>
	>;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
	const [step, setStep] = useState(1);

	const nextStep = () => setStep(prev => prev + 1);
	const prevStep = () => setStep(prev => (prev > 1 ? prev - 1 : 1));

	const [summary, setSummary] = useState({
		document: "Select document",
		emailsToSend: 0,
		smtpemail: null,
		smtpPassword: null,
		subject: "Open to Opportunities",
		documentId: null,
		emailbody:
			"Hi,\n" +
			"\n" +
			"I hope you're doing well! I came across your profile and wanted to reach out because I'm currently exploring new opportunities in your industry." +
			"\n" +
			"I’ve attached my CV for your review. If you have any relevant opportunities or would like to discuss how my skills align with any open roles, I’d love to connect. Please let me know a convenient time to chat!\n" +
			"\n" +
			"Looking forward to hearing from you.\n" +
			"\n" +
			"Best regards",
	});

	return (
		// @ts-ignore
		<StepContext.Provider value={{ step, nextStep, prevStep, summary, setSummary }}>
			{children}
		</StepContext.Provider>
	);
};

export default function StepProviderWrap({ children }: { children: React.ReactNode }) {
	return <StepProvider>{children}</StepProvider>;
}

// Custom hook for easy access
export const useStep = () => {
	const context = useContext(StepContext);
	if (!context) {
		throw new Error("useStep must be used within a StepProvider");
	}
	return context;
};
