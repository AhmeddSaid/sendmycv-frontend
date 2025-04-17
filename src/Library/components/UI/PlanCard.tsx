"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import styled from "styled-components";
import pattern from "./../../../../public/pattern.webp";
import { Flex } from "@/Library/Grids/Grids";

const Checkmark = () => (
	<svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M10.3994 1.27299L4.39941 7.27299C4.34715 7.32543 4.28506 7.36704 4.21669 7.39543C4.14831 7.42382 4.07501 7.43843 4.00098 7.43843C3.92694 7.43843 3.85364 7.42382 3.78527 7.39543C3.71689 7.36704 3.6548 7.32543 3.60254 7.27299L0.977538 4.64799C0.925215 4.59566 0.883709 4.53355 0.855392 4.46518C0.827075 4.39682 0.8125 4.32355 0.8125 4.24955C0.8125 4.17555 0.827075 4.10228 0.855392 4.03392C0.883709 3.96555 0.925215 3.90344 0.977538 3.85111C1.02986 3.79879 1.09198 3.75728 1.16034 3.72897C1.22871 3.70065 1.30198 3.68607 1.37598 3.68607C1.44997 3.68607 1.52324 3.70065 1.59161 3.72897C1.65997 3.75728 1.72209 3.79879 1.77441 3.85111L4.00144 6.07814L9.60348 0.47705C9.70915 0.371378 9.85247 0.312012 10.0019 0.312012C10.1514 0.312012 10.2947 0.371378 10.4004 0.47705C10.506 0.582722 10.5654 0.726044 10.5654 0.875488C10.5654 1.02493 10.506 1.16825 10.4004 1.27393L10.3994 1.27299Z"
			fill="#ffffff"
		/>
	</svg>
);

const Plan = styled.div<{ $name: string }>`
	width: 20rem;
	height: 31.25rem;
	border-radius: 10px;
	border: 1px solid;
	border-color: ${({ $name }) => ($name === "Elite" ? "#FFC530" : "#ffffff26")};
	padding: 1.25rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	gap: 0.5rem;
	transition: all 500ms;
	overflow: hidden;
	position: relative;
	z-index: 1;
	background: ${({ $name }) =>
		$name === "Basic" ? "linear-gradient(180deg, #010002 0%, #361764 100%)" : "#0000000F"};

	box-shadow: ${({ $name }) => ($name === "Basic" ? "0px 10px 74px 10px #4e00bf69" : "none")};

	& .pattern {
		opacity: ${({ $name }) => ($name === "Basic" ? 1 : 0)};
		transition: all 500ms;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -2;
	}

	&::before {
		content: "";
		position: absolute;
		transition: all 500ms ease;
		z-index: -1;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: linear-gradient(180deg, #000000 29%, rgba(0, 0, 0, 0) 100%);
		opacity: ${({ $name }) => ($name === "Basic" ? 1 : 0)};
	}

	&:hover {
		background: linear-gradient(180deg, #010002 0%, #361764 100%);
		box-shadow: 0px 10px 74px 10px #4e00bf69;

		& .pattern {
			opacity: 1;
		}

		&::before {
			opacity: 1;
		}
	}

	& h3 {
		color: ${({ $name }) => ($name === "Elite" ? "#FFC530" : "#ffffff")};
		font-weight: 500;
		font-size: 1.5rem;
		cursor: pointer;
	}

	& p {
		color: ${({ $name }) => ($name === "Elite" ? "#FFC530B2" : "#ffffffb2")};

		font-weight: 400;
		font-size: 1rem;
		text-align: start;
		padding-bottom: 1.25rem;
		width: 100%;
		border-bottom: 2px solid #282729;
	}

	& ul {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
		padding-top: 1.25rem;
		width: 100%;
		text-align: start;

		& li {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			color: #fff;
			font-weight: 400;
			font-size: 0.875rem;

			& svg {
				stroke: ${({ $name }) => ($name === "Elite" ? "#ffc530" : "#fff")};
			}
		}
	}

	& a {
		width: 100%;
		height: 2.5rem;
		border-radius: 0.5rem;
		background-color: ${({ $name }) => ($name === "Elite" ? "#FFC53066" : "#3d3d3d66")};
		color: #fff;
		font-weight: 300;
		font-size: 0.875rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 300ms ease;
		border: 1px solid #ffffff26;
		box-shadow: 0px 0px 6px 3px #ffffff40 inset;
		place-self: flex-end;
		backdrop-filter: blur(14px);

		&:hover {
			background: ${({ $name }) =>
				$name === "Elite"
					? "#fcc740b2"
					: "linear-gradient(81.29deg, #5a5aff 11.73%, #000099 170.69%)"};
		}
	}
`;

export default function PlanCard({
	plan,
	planPricing,
}: {
	pricing: boolean;
	plan: {
		name: string;
		priceByYear: number;
		priceByMonth: number;
		features: string[];
		credits: string;
	};
	link: string;
	planPricing: any;
}) {
	const { name, features, credits } = plan;
	const { priceByMonth, currency, id, country } = planPricing;

	const router = useRouter();

	const handleRout = useCallback(() => {
		router.push(`/pay?country=${country}&plan=${id}&term=ONETIME`);
	}, [country, id, router]);

	return (
		<Plan $name={name}>
			<Image className="pattern" src={pattern} alt="" fill objectFit="cover" />
			<Flex $direction="column" $gap="0.5rem" $justify={"start"} $align="flex-start">
				<h3>{name}</h3>

				<p>
					{currency}
					{priceByMonth}
				</p>

				<p>{credits}</p>

				<ul>
					{features.map((feature, index) => (
						<li key={index}>
							<Checkmark />
							<span>{feature}</span>
						</li>
					))}
				</ul>
			</Flex>
			<Link
				href={"#"}
				onClick={e => {
					e.preventDefault();
					handleRout();
				}}
			>
				Subscribe
			</Link>
		</Plan>
	);
}
