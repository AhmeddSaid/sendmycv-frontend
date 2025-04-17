"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import styled from "styled-components";
import icon from "../../../../../public/icons/plan-checkmark.svg";
import { Flex } from "@/Library/Grids/Grids";
import { Button } from "@/Library/components/UI/Button";

const Table = styled.div`
	display: grid;
	grid-template-columns: 1fr repeat(3, 1fr);
	width: 90%;
	border: 1px solid #e6e9f526;
	margin: 3rem auto 0;
	border-radius: 1.625rem;
	overflow: auto;

	@media screen and (max-width: 960px) {
		//overflow-x: auto;
		width: 100%;
		border-radius: 0;
		margin-bottom: 3rem;
	}
`;
const Head = styled(Flex)`
	@media screen and (max-width: 768px) {
		margin: 1rem 0;
	}
`;

const Cell = styled.div`
	padding: 1rem 0;
	border: 1px solid #ffffff26;
	text-align: center;
	font-size: 0.875rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 0.25rem;

	@media screen and (max-width: 768px) {
		font-size: 0.75rem;
		padding: 1rem 0.5rem;
	}
`;
const PlanPrice = styled.span`
	font-weight: 700;
	font-size: 2.5rem;
	@media screen and (max-width: 768px) {
		font-size: 2rem;
	}
`;
const PriceDuration = styled.span`
	font-size: 0.875rem;
	font-weight: 500;
`;
const CompareTitle = styled.span`
	font-size: 1.5rem;
	font-weight: 700;
`;
const SaleTag = styled.span`
	width: 6.375rem;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0.0625rem solid #fff;
	border-radius: 15984px;
	font-size: 1rem;
	font-weight: 500;
	@media screen and (max-width: 768px) {
		margin: auto;
		font-size: 0.875rem;
	}
`;

const Desc = styled.p`
	text-align: start;
	font-weight: 500;
	font-size: 0.875rem;
	width: 80%;

	@media screen and (max-width: 768px) {
		font-size: 0.75rem;
		width: 100%;
	}
`;

export default function ComparePlans({
	plans,
	pricing,
	planPricing,
}: {
	plans: {
		id: number;
		name: string;
		priceByYear: number;
		priceByMonth: number;
		features: string[];
		number_of_users: {
			count: string;
			note: string;
		};
		users_per_page: {
			count: string;
			note: string;
		};
		benefits: {
			AIPoweredCVCreation: boolean;
			CoverLetterAssistance: boolean;
			LinkedInProfileOptimization: boolean;
			AnalyticsandJobMatching: boolean;
			InterviewPrepResources: boolean;
			PrioritySupport: boolean;
			QuarterlyUpdates: boolean;
			ExclusiveHRDatabase: boolean;
			management: boolean;
		};
	}[];
	pricing: boolean;
	planPricing: any;
}) {
	const router = useRouter();

	const handleRout = useCallback(
		(country: string, id: string) => {
			router.push(`/pay?country=${country}&plan=${id}&term=${pricing ? "YEARLY" : "MONTHLY"}`);
		},
		[pricing, router],
	);

	return (
		<Table>
			<Cell>
				<Flex $direction="column" $align="center" $gap=".75rem">
					<Flex $direction="column" $align="flex-start" $gap="16px">
						<CompareTitle>Compare plans</CompareTitle>
					</Flex>
					<Desc>Choose your workspace plan according to your organisational plan</Desc>
				</Flex>
			</Cell>
			{plans.map((plan, index) => (
				<Cell key={plan.id}>
					<Head $margin="1.75rem 0" $gap=".5rem" $align="flex-end">
						{pricing ? (
							<>
								<PlanPrice>
									{planPricing[index].priceByYear === 0
										? "Free"
										: planPricing[index].currency + planPricing[index].priceByYear}
								</PlanPrice>
								<PriceDuration>
									{planPricing[index].priceByYear === 0 ? "/Lifetime" : "/year"}
								</PriceDuration>
							</>
						) : (
							<>
								<PlanPrice>
									{planPricing[index].priceByMonth === 0
										? "Free"
										: planPricing[index].currency + planPricing[index].priceByMonth}
								</PlanPrice>
								<PriceDuration>
									{planPricing[index].priceByMonth === 0 ? "/Lifetime" : "/month"}
								</PriceDuration>
							</>
						)}
					</Head>
					<Button
						onClick={() => handleRout(planPricing[index].country, plan.id.toString())}
						$width="80%"
						$height="3rem"
						$bg="#4444FF"
						$smWidth="80%"
					>
						Choose This Plan
					</Button>
				</Cell>
			))}

			{/*<Cell>Number of Pages</Cell>*/}
			{/*{plans.map(plan => (*/}
			{/*	<Cell key={plan.id}>*/}
			{/*		{plan.number_of_users.count}*/}
			{/*		<br />*/}
			{/*		{plan.number_of_users.note && <small>{plan.number_of_users.note}</small>}*/}
			{/*	</Cell>*/}
			{/*))}*/}

			{/*<Cell>Users per Page</Cell>*/}
			{/*{plans.map(plan => (*/}
			{/*	<Cell key={plan.id}>*/}
			{/*		{plan.users_per_page.count} <br />*/}
			{/*		{plan.users_per_page.note && <small>{plan.users_per_page.note}</small>}*/}
			{/*	</Cell>*/}
			{/*))}*/}

			<Cell>AI-Powered CV Creation</Cell>
			{plans.map(plan => (
				<Cell key={plan.id}>
					{plan.benefits.AIPoweredCVCreation ? <Image src={icon} alt="" /> : "No"}
				</Cell>
			))}

			<Cell>Cover Letter Assistance</Cell>
			{plans.map(plan => (
				<Cell key={plan.id}>
					{plan.benefits.CoverLetterAssistance ? <Image src={icon} alt="" /> : ""}
				</Cell>
			))}

			{/*<Cell>LinkedIn Profile Optimization </Cell>*/}
			{/*{plans.map(plan => (*/}
			{/*	<Cell key={plan.id}>*/}
			{/*		{plan.benefits.LinkedInProfileOptimization ? <Image src={icon} alt="" /> : ""}*/}
			{/*	</Cell>*/}
			{/*))}*/}

			<Cell>Analytics and Job Matching</Cell>
			{plans.map(plan => (
				<Cell key={plan.id}>
					{plan.benefits.AnalyticsandJobMatching ? <Image src={icon} alt="" /> : ""}
				</Cell>
			))}

			<Cell>Interview Prep Resources </Cell>
			{plans.map(plan => (
				<Cell key={plan.id}>
					{plan.benefits.InterviewPrepResources ? <Image src={icon} alt="" /> : ""}
				</Cell>
			))}

			<Cell>Priority Support </Cell>
			{plans.map(plan => (
				<Cell key={plan.id}>
					{plan.benefits.PrioritySupport ? <Image src={icon} alt="" /> : ""}
				</Cell>
			))}

			<Cell>Quarterly Updates </Cell>
			{plans.map(plan => (
				<Cell key={plan.id}>
					{plan.benefits.QuarterlyUpdates ? <Image src={icon} alt="" /> : ""}
				</Cell>
			))}

			<Cell>Exclusive HR Database</Cell>
			{plans.map(plan => (
				<Cell key={plan.id}>
					{plan.benefits.ExclusiveHRDatabase ? <Image src={icon} alt="" /> : ""}
				</Cell>
			))}

			{/*<Cell>Management</Cell>*/}
			{/*{plans.map(plan => (*/}
			{/*	<Cell key={plan.id}>{plan.benefits.management ? <Image src={icon} alt="" /> : ""}</Cell>*/}
			{/*))}*/}
		</Table>
	);
}
