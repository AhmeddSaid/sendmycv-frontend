import Image from "next/image";
import Link from "next/link";
import { ContinueButton, SuccessContainer, Title } from "../Checkout.styles";
import success from "./../../../../../public/success.webp";

export default function Success() {
	return (
		<SuccessContainer>
			<Image src={success} alt="success" />
			<Title>Congratulation!</Title>
			<p>Enjoy all the amazing features of your subscription and make the most out of it! 🌟</p>
			<Link href={"/"}>
				<ContinueButton $rounded $fontSize="1.5rem" $width="27.5rem">
					Back To Home
				</ContinueButton>
			</Link>
		</SuccessContainer>
	);
}
