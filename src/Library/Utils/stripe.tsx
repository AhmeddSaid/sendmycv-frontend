"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
	apiVersion: "2025-02-24.acacia",
});

export async function stripeCheckoutSession(content: string): Promise<void> {
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card", "paypal"],
		mode: "subscription",
	});
}
