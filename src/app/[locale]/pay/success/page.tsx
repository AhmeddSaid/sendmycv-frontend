import React from "react";

import Stripe from "stripe";
import PaymentSuccess from "@/Library/_Pages/Pricing/PaymentSuccess";
import { PostData } from "@/Library/axios/AxiosFetch";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const dynamic = "force-dynamic";

const Page = async ({ searchParams }: { searchParams: { session_id: string } }) => {
	// eslint-disable-next-line camelcase
	const { session_id } = searchParams;

	let isVerified = false;

	const stripeRes = await stripe.checkout.sessions.retrieve(session_id, {
		expand: ["subscription", "payment_intent", "line_items", "customer"],
	});

	if (stripeRes.mode === "payment") {
		const customer = stripeRes.customer_details;
		const payload = {
			fullName: customer?.name,
			email: customer?.email,
			// @ts-ignore
			priceId: stripeRes.line_items?.data[0].price.id,
			// @ts-ignore
			stripeSubscribtionId: stripeRes.payment_method_configuration_details.id,
			// @ts-ignore
			stripeCustomerId: stripeRes.customer.id,
			startDate: new Date().toISOString(),
			endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
		};
		const res = await PostData("/subscription", payload);
		isVerified = res.status === 200;
	}

	if (stripeRes.mode === "subscription") {
		// @ts-ignore
		if (stripeRes?.subscription?.plan?.active) {
			const customer = stripeRes.customer_details;
			const payload = {
				fullName: customer?.name,
				email: customer?.email,
				// @ts-ignore
				priceId: stripeRes?.subscription?.plan?.id,
				// @ts-ignore
				stripeSubscribtionId: stripeRes?.subscription?.id,
				stripeCustomerId: stripeRes.customer,
				// @ts-ignore
				startDate: new Date(stripeRes?.subscription?.current_period_start * 1000).toISOString(),
				// @ts-ignore
				endDate: new Date(stripeRes.subscription?.current_period_end * 1000).toISOString(),
			};

			const res = await PostData("/subscription", payload);
			isVerified = res.status === 200;
		}
	}

	return (
		<>
			<PaymentSuccess isVerified={isVerified} />
		</>
	);
};

export default Page;
