import Link from "next/link";
import React from "react";
import { Flex } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Title } from "@/Library/_Pages/Documents/Documents.styles";
import { Shell } from "@/Library/_Pages/Pricing/PaymentSuccess";
import Send from "@/Library/_Pages/Send/Send";
import { GetData } from "@/Library/axios/AxiosFetch";
import { Button } from "@/Library/components/UI/Button";

export default async function page({
	searchParams,
}: {
	searchParams: { cv?: string; cover?: string };
}) {
	const { cv, cover } = searchParams;

	const [docsData, subscription] = await Promise.all([
		await GetData("/cv/user-cv"),
		await GetData("/subscription"),
	]);

	// @ts-ignore
	const subData = subscription?.data?.data;

	if (subscription.status !== 200) {
		return (
			<>
				<Shell $justify={"center"} $align={"center"}>
					<div>
						<Title>you don&#39;t have subscription yet.</Title>
						<Flex $justify={"center"} className={styles.marginTop16}>
							<Link href={"/pricing"}>
								<Button>Pricing and plans</Button>
							</Link>
						</Flex>
					</div>
				</Shell>
			</>
		);
	}

	if (subData.remainingCredits === 0) {
		return (
			<>
				<Shell $justify={"center"} $align={"center"}>
					<div>
						<Title>you have 0 credits in your account remaining.</Title>
						<Flex $justify={"center"} className={styles.marginTop16}>
							<Link href={"/pricing"}>
								<Button>Purchase more</Button>
							</Link>
						</Flex>
					</div>
				</Shell>
			</>
		);
	}

	// @ts-ignore
	if (docsData?.data?.data.length === 0) {
		return (
			<>
				<Shell $justify={"center"} $align={"center"}>
					<div>
						<Title>you don&#39;t have any cvs or cover letters yet, create one.</Title>
						<Flex $justify={"center"} className={styles.marginTop16}>
							<Link href={"/documents"}>
								<Button>Create</Button>
							</Link>
						</Flex>
					</div>
				</Shell>
			</>
		);
	}

	return (
		// @ts-ignore
		<Send
			cv={cv}
			cover={cover}
			// @ts-ignore
			userDocs={docsData?.data?.data}
			remainingCredits={subData.remainingCredits}
			dailyLimit={subData.dailyLimit}
		/>
	);
}
