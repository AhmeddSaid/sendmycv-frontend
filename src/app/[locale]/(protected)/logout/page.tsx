"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Flexbox } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import ErrorIcon from "@/Library/components/Notification/ErrorIcon/ErrorIcon";
import Notifications from "@/Library/components/Notification/Notification";
import QuestionSpinner from "@/Library/components/QuestionSpinner/QuestionSpinner";
import { Paragraph } from "@/Library/components/documentation";
import logoutAction from "@/app/[locale]/(protected)/logout/actions";

const Page = () => {
	const router = useRouter();
	const [error, setError] = useState<boolean>(false);
	const performLogout = useCallback(async () => {
		await logoutAction();
		router.push("/auth/login");
	}, [router]);

	useEffect(() => {
		const logoutAsync = async () => {
			try {
				await performLogout();
			} catch {
				setError(prev => !prev);
			}
		};

		logoutAsync().then(r => r);
	}, [performLogout]);

	return (
		<>
			<div className={styles.marginTop54}>
				{!error ? (
					<div className={styles.marginTop54}>
						<Flexbox $justify="center">
							<QuestionSpinner />
						</Flexbox>
						<Paragraph>Logging out...</Paragraph>
					</div>
				) : (
					<div className={styles.marginTop54}>
						<Notifications
							className={styles.marginBottom16}
							caption={"Something went wrong while logging you out, please try again later."}
							tittle={"Error logging out"}
							type={"error"}
							icon={<ErrorIcon />}
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default Page;
