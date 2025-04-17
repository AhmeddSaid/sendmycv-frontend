import { StaticImageData } from "next/image";
import Link from "next/link";
import { HeroSection } from "../Home.styles";
import { Col, Row } from "@/Library/Grids/Grids";
import uuid from "@/Library/Utils/uuid";
import FeatureCard from "@/Library/_Pages/Home/_components/FeatureCard";
import { Button } from "@/Library/components/UI/Button";

export default function Hero({
	features,
}: {
	features: {
		id: number;
		icon: StaticImageData;
		title: string;
		text: string;
	}[];
}) {
	return (
		<HeroSection>
			<h1 data-text="Welcome To SendMyCV">Welcome To SendMyCV</h1>
			<p>
				SendMyCV is not just a CV builder. It’s your AI-powered partner for creating, optimizing,{" "}
				<br /> and distributing resumes tailored to your target market, ensuring your profile
				reaches <br />
				the right HR professionals.
			</p>

			<Link href={"/auth/signup"}>
				<Button $rounded>Start Now!</Button>
			</Link>

			<Row className={"RowStyles"} $justify="center">
				{features.map(feature => (
					<Col key={uuid()} className={"displayFlex"} $md={6} $lg={4}>
						<FeatureCard key={feature.id} {...feature} />
					</Col>
				))}
			</Row>
		</HeroSection>
	);
}
