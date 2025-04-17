import React from "react";
import { Section } from "@/Library/Grids/Grids";
import { TermsContainer } from "@/Library/_Pages/Privacy/Privacy.styles";
import Footer from "@/Library/components/Footer/Footer";
import MainHeader from "@/Library/components/UI/MainHeader";

const TermsEn = () => {
	return (
		<>
			<MainHeader />
			<Section>
				<TermsContainer>
					<article>
						<header>
							<h1>Terms and Conditions</h1>
							<p>
								<em>Last Updated: March 2025</em>
							</p>
						</header>
						<div>
							<p>Send My CV - Terms and Conditions</p>
							<p>Last Updated: March 2025</p>
							<p>
								Welcome to Send My CV. These Terms and Conditions (“Terms”) govern your use of our
								website, platform, and services. By using Send My CV, you agree to abide by these
								Terms. If you do not accept these Terms, you must discontinue the use of our
								services immediately.
							</p>
							<h3>1. Acceptance of Terms</h3>
							<p>
								By accessing or using Send My CV, you confirm that you have read, understood, and
								agreed to these Terms and our Privacy Policy. If you are using our services on
								behalf of a company or legal entity, you represent that you have the authority to
								bind that entity to these Terms.
							</p>
							<h3>2. Company Information &amp; Licensing</h3>
							<p>
								Send My CV Limited is a licensed entity in the United Kingdom and operates in
								compliance with applicable UK and international laws.
							</p>
							<h3>3. Services Provided</h3>
							<p>
								We offer CV creation, AI-powered CV optimization, automated outreach, and career
								enhancement tools. While we provide support for job applications, we do not
								guarantee job placement or hiring results.
							</p>
							<h3>4. Account Registration &amp; User Responsibility</h3>
							<p>Users must be at least 18 years old to register for our services.</p>
							<p>
								You are responsible for maintaining the confidentiality of your login credentials.
							</p>
							<p>
								Any unauthorized access to your account must be reported immediately to
								support@sendmycv.ai.
							</p>
							<h3>
								<br />
								5. Payment, Pricing &amp; Subscriptions
							</h3>
							<p>Payments are accepted via Stripe, PayPal, and other secure payment processors.</p>
							<p>All pricing is displayed in USD, and applicable taxes may apply.</p>
							<p>
								If you enroll in a subscription plan, it will renew automatically unless canceled
								before the renewal date.
							</p>
							<h3>
								<br />
								6. Prohibited Conduct
							</h3>
							<p>Users may not:</p>
							<p>Use the services for fraudulent, unlawful, or misleading purposes.</p>
							<p>Submit false or misleading information in their CV or job applications.</p>
							<p>Attempt to reverse-engineer or misuse Send My CV technologies.</p>
							<h3>
								<br />
								7. Service Availability &amp; Modifications
							</h3>
							<p>
								While we strive for continuous service availability, we do not guarantee
								uninterrupted access. Send My CV may update or modify its platform at any time,
								including pricing and feature adjustments.
							</p>
							<h3>8. Intellectual Property &amp; Data Usage</h3>
							<p>
								All software, AI algorithms, and platform content are intellectual property of Send
								My CV. Unauthorized reproduction or redistribution is strictly prohibited.
							</p>
							<h3>9. Limitation of Liability</h3>
							<p>
								To the fullest extent permitted by law, Send My CV is not liable for indirect,
								incidental, or consequential damages resulting from service use.
							</p>
							<h3>10. Governing Law &amp; Dispute Resolution</h3>
							<p>
								These Terms are governed by the laws of the United Kingdom. Any disputes arising
								under these Terms shall be resolved through binding arbitration in London, UK. If
								arbitration is not applicable in your jurisdiction, disputes will be handled in the
								courts of the United Kingdom.
							</p>
							<h3>11. Amendments &amp; Updates</h3>
							<p>
								We reserve the right to modify these Terms at any time. Users will be notified via
								email or an announcement on our website.
							</p>
							<p>
								For inquiries, contact: support@sendmycv.ai
								<br />
								For disputes: disputes@sendmycv.ai
							</p>
						</div>
					</article>
				</TermsContainer>
			</Section>
			<Footer />
		</>
	);
};

export default TermsEn;
