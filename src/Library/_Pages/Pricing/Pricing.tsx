// @ts-nocheck
/* eslint-disable */
"use client";
import Image from "next/image";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/UI/MainHeader";
import PlanCard from "../../components/UI/PlanCard";
import { GradientShapeOne, Hero, PlansHolder, PricingPage, ToggleSwitch } from "./Pricing.styles";
import arrow from "../../../../public/swirly-arrow.svg";
import ComparePlans from "./_components/ComparePlans";
import { useState } from "react";
import { onetimeplans, plans } from "@/app/[locale]/pricing/_pricingUtils/plans";
import styles from "./../../Grids/Spaces.module.css";

export default function Pricing({ pricingPlan }) {
	const [pricing, setPricing] = useState(false);

	return (
		<PricingPage>
			<GradientShapeOne></GradientShapeOne>
			<GradientShapeOne $right={true}></GradientShapeOne>
			<Image className="arrow left" src={arrow} alt="" />
			<Image className="arrow right" src={arrow} alt="" />
			<MainHeader />
			<Hero
				$direction="column"
				$margin="10rem auto -10rem"
				$gap="2rem"
				$height="calc(100dvh - 10rem)"
			>
				<h1>
					Flexible Pricing Options <br />
					To Suit Your Needs
				</h1>
				<p>
					Find a package that suits you, we will provide <br /> the best and special price for you
				</p>
			</Hero>
			{/*<Flexbox $justify={"center"}>*/}
			{/*	<div>*/}
			{/*		<ToggleSwitch $active={pricing}>*/}
			{/*			<div onClick={() => setPricing(false)} className={"month"}>*/}
			{/*				month*/}
			{/*			</div>*/}
			{/*			<div onClick={() => setPricing(true)} className={"year"}>*/}
			{/*				year*/}
			{/*			</div>*/}
			{/*		</ToggleSwitch>*/}
			{/*	</div>*/}
			{/*</Flexbox>*/}

			<h2 className={styles.marginBottom32}>One time purchase plans</h2>
			<PlansHolder
				$width="80rem"
				$wrap="wrap"
				$justify="center"
				$align="center"
				$gap="1.5rem"
				$margin="0 auto 10.5rem"
			>
				{onetimeplans.map((plan, index) => (
					<PlanCard
						key={plan.id}
						planPricing={pricingPlan.find(r => r.id === plan.id)}
						plan={plan}
					/>
				))}
			</PlansHolder>

			<h2 className={styles.marginBottom32}>Monthly plans</h2>
			<h2>Compare all features</h2>

			<ToggleSwitch $active={pricing}>
				<div onClick={() => setPricing(false)} className={"month"}>
					month
				</div>
				<div onClick={() => setPricing(true)} className={"year"}>
					year
				</div>
			</ToggleSwitch>
			<ComparePlans pricing={pricing} planPricing={pricingPlan} plans={plans} />
			<FAQ />
			<Footer />
		</PricingPage>
	);
}
