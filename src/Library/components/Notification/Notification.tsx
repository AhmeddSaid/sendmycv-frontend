import React, { ReactNode } from "react";
import {
	NotificationCaptoin,
	NotificationContanier,
	NotificationShell,
	NotificationTittle,
} from "@/Library/components/Notification/Notification.styles";

const Notifications = ({
	tittle,
	caption,
	icon,
	children,
	className,
	id,
	type,
}: {
	tittle: string;
	caption: string;
	icon?: ReactNode;
	children?: ReactNode;
	className?: string | undefined;
	id?: string;
	type?:
		| "error"
		| "success"
		| "information"
		| "white"
		| "Darkerror"
		| "Darksuccess"
		| "Darkinformation"
		| "Darkwhite";
}) => {
	return (
		<>
			<NotificationContanier type={type ?? "information"} className={className} id={id}>
				{icon}

				<NotificationShell>
					<NotificationTittle type={type ?? "information"}>{tittle}</NotificationTittle>
					<NotificationCaptoin type={type ?? "information"}>{caption}</NotificationCaptoin>
					{children}
				</NotificationShell>
			</NotificationContanier>
		</>
	);
};

export default Notifications;
