import { useState } from "react";
import { ContinueButton, PlansHolder, Section, Title } from "../Checkout.styles";
import PlanCard from "./UI/PlanCard";

const data = [
	{
		name: "Basic Plan",
		popular: true,
		price: "79",
	},
	{
		name: "Pro Lite Plan",
		popular: false,
		price: "90",
	},
	{
		name: "Premium Plan",
		popular: false,
		price: "120",
	},
	{
		name: "Enterprise Plan",
		popular: false,
		price: "160",
	},
];

export default function PaymentFrequency({ nextStep }: { nextStep: () => void }) {
	const [selectedPlan, setSelectedPlan] = useState<string | null>("Basic Plan");

	const handlePlanSelect = (planName: string) => {
		setSelectedPlan(planName);
	};

	return (
		<Section>
			<Title>Choose payment frequency</Title>
			<PlansHolder>
				{data.map((item, index) => (
					<PlanCard
						key={index}
						name={item.name}
						popular={item.popular}
						price={item.price}
						selected={selectedPlan === item.name}
						onSelect={() => handlePlanSelect(item.name)}
					/>
				))}
			</PlansHolder>
			<ContinueButton
				$rounded
				$width="35rem"
				onClick={nextStep}
				disabled={!selectedPlan}
				$fontSize="1.25rem"
			>
				Details Billing To Continue
			</ContinueButton>
		</Section>
	);
}
