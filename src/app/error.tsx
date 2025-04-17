"use client";
import Link from "next/link";
import React from "react";
import { ErrorStack, Main, PageContainer, Title } from "@/Library/Globals/Globals";
import { Flex } from "@/Library/Grids/Grids";
import Footer from "@/Library/components/Footer/Footer";
import { Button } from "@/Library/components/UI/Button";
import MainHeader from "@/Library/components/UI/MainHeader";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
	return (
		<PageContainer>
			<MainHeader />
			<Main>
				<Title>Something went wrong!</Title>
				{process.env.NODE_ENV === "development" && (
					<>
						<h3>⚠️ {error.message}</h3>
						<ErrorStack>{error.stack}</ErrorStack>
					</>
				)}
				<Flex $gap="3rem">
					<Button onClick={reset}>Try again</Button>
					<Link href="/">
						<Button>Go back</Button>
					</Link>
				</Flex>
			</Main>
			<Footer />
		</PageContainer>
	);
}
