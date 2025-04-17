"use client";
import Image from "next/image";
import { ActionButton } from "../Documents.styles";

export default function CardButton({
	text,
	icon,
	onClick,
	...rest
}: {
	text: string;
	icon: string;
	onClick?: () => void;
}) {
	return (
		<ActionButton {...rest} onClick={onClick}>
			<Image src={icon} alt="" width={24} height={24} />
			<span>{text}</span>
		</ActionButton>
	);
}
