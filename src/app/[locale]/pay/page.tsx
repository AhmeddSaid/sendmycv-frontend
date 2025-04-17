// import { redirect } from "next/navigation";
import { redirect } from "next/navigation";
import React from "react";
import Stripe from "stripe";
import { PricingDetector } from "@/app/[locale]/pricing/_pricingUtils/RegionDetector";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const dynamic = "force-dynamic";

interface ParamsType {
	plan?: "ELITE" | "PRO";
	country?: string;
	term?: "MONTHLY" | "YEARLY" | "ONETIME";
}

const Page = async ({ searchParams }: { searchParams?: ParamsType }) => {
	const { country, plan, term } = searchParams || {};

	if (!country || !plan || !term) {
		throw new Error("Missing required query parameters");
	}

	const planPricing = PricingDetector(country);

	const planDetails = planPricing.find(item => item.id === Number(plan)) || null;

	if (!planDetails) {
		throw new Error("Invalid plan selection");
	}

	const priceId =
		term === "YEARLY" ? planDetails.stripePriceIdYearly : planDetails.stripePriceIdMonthly;

	if (!priceId) {
		throw new Error("Invalid price ID");
	}

	if (!process.env.SUCCESS_URL || !process.env.CANCEL_URL) {
		throw new Error("Missing environment variables for Stripe URLs");
	}

	const stripeSession = await stripe.checkout.sessions.create({
		mode: term === "ONETIME" ? "payment" : "subscription",
		// eslint-disable-next-line camelcase
		billing_address_collection: "required",
		// eslint-disable-next-line camelcase
		allow_promotion_codes: true,
		// eslint-disable-next-line camelcase
		customer_creation: "always",
		// eslint-disable-next-line camelcase
		line_items: [{ price: priceId, quantity: 1 }],
		// eslint-disable-next-line camelcase
		phone_number_collection: { enabled: true },
		// eslint-disable-next-line camelcase
		submit_type: term === "ONETIME" ? "pay" : "subscribe",
		// eslint-disable-next-line camelcase
		success_url: `${process.env.SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
		// eslint-disable-next-line camelcase
		cancel_url: process.env.CANCEL_URL,
		// eslint-disable-next-line camelcase
		consent_collection: { terms_of_service: "required" },
	});

	if (stripeSession.url) {
		redirect(stripeSession.url);
	}

	return <></>;
};

export default Page;
