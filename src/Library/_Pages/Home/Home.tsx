"use client";
import Image from "next/image";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/UI/MainHeader";
import Growth from "./../../../../public/Growth.png";
import howItWorkImg from "./../../../../public/how-it-work-img.webp";
import briefcase from "./../../../../public/icons/briefcase.svg";
import pen from "./../../../../public/icons/edit-b.svg";
import user from "./../../../../public/icons/user.svg";
import bg from "./../../../../public/main.webp";
import robot from "./../../../../public/robot.png";
import { HomeContainer } from "./Home.styles";
import CTASection from "./_components/CTASection";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";
import ResumeTools from "./_components/ResumeTools";

const heroFeatures = [
	{
		id: 1,
		icon: briefcase,
		title: "ATS-Compatible CVs",
		text: "Optimized CVs that pass tracking systems to reach recruiters effectively.",
	},
	{
		id: 2,
		icon: pen,
		title: "Customized Cover Letters",
		text: "AI-generated, tailored cover letters for standout applications.",
	},
	{
		id: 3,
		icon: user,
		title: "Live HR Database",
		text: "Direct access to thousands of updated HR contacts for real-time outreach.",
	},
];

const howItWorks = [
	{
		id: 1,
		image: robot,
		subtitle: "Upload OR Create",
		title: "Your CV with AI",
	},
	{
		id: 2,
		image: howItWorkImg,
		subtitle: "Choose Your Target Role & Location for",
		title: "Tailored CV and Cover Letter",
	},
	{
		id: 3,
		image: Growth,
		subtitle: "Send Directly to",
		title: "+5,000 HR Contacts with Our Live Database",
	},
];

// const testimonials = [
// 	{
// 		id: 1,
// 		image: reviewer,
// 		name: "Talia Taylor",
// 		position: "Digital Marketing Director @ Quantum",
// 		text: "I am still using their service to update my resume, even after finding a job. Trust the process of allowing someone else who offers this expertise to help you. They know what they are doing.",
// 	},
// 	{
// 		id: 2,
// 		image: reviewer,
// 		name: "Talia Taylor",
// 		position: "Digital Marketing Director @ Quantum",
// 		text: "I am still using their service to update my resume, even after finding a job. Trust the process of allowing someone else who offers this expertise to help you. They know what they are doing.",
// 	},
// 	{
// 		id: 3,
// 		image: reviewer,
// 		name: "Talia Taylor",
// 		position: "Digital Marketing Director @ Quantum",
// 		text: "I am still using their service to update my resume, even after finding a job. Trust the process of allowing someone else who offers this expertise to help you. They know what they are doing.",
// 	},
// ];

export default function Home() {
	return (
		<HomeContainer>
			<Image src={bg} alt="" fill objectFit="contain" className="bg" />
			<MainHeader />
			<Hero features={heroFeatures} />
			<HowItWorks data={howItWorks} />
			<CTASection />
			<ResumeTools />
			{/*<Testimonials reviews={testimonials} />*/}
			<FAQ />
			<Footer />
		</HomeContainer>
	);
}
