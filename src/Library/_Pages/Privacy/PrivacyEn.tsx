import React from "react";
import { Section } from "@/Library/Grids/Grids";
import { TermsContainer } from "@/Library/_Pages/Privacy/Privacy.styles";
import Footer from "@/Library/components/Footer/Footer";
import MainHeader from "@/Library/components/UI/MainHeader";

const PrivacyEn = () => {
	return (
		<>
			<MainHeader />
			<Section>
				<TermsContainer>
					<article>
						<header>
							<h1>Privacy Policy</h1>
							<p>
								<em>Effective Date: March 2025</em>
							</p>
						</header>
						<div>
							<p>
								At Send My CV, we are committed to protecting your privacy. This Privacy Policy
								explains how we collect, use, and protect your personal data.
							</p>
							<h3>1. Information We Collect</h3>
							<p>We collect the following data:</p>
							<p>Personal Information: Name, email, payment details, and CV content.</p>
							<p>
								Usage Data: IP addresses, device type, browser details, and interaction history.
							</p>
							<p>
								Cookies &amp; Tracking: We use cookies for user experience enhancement and
								analytics.
							</p>
							<h3>
								<br />
								2. How We Use Your Data
							</h3>
							<p>Your data is used for:</p>
							<p>Delivering and improving our services.</p>
							<p>Processing payments securely.</p>
							<p>Communicating updates, promotions, or important service changes.</p>
							<h3>
								<br />
								3. Third-Party Sharing
							</h3>
							<p>We do not sell or rent personal data. However, we share necessary data with:</p>
							<p>Payment processors (e.g., Stripe, PayPal).</p>
							<p>Analytics providers (e.g., Google Analytics).</p>
							<p>Law enforcement when required by legal obligations.</p>
							<h3>
								<br />
								4. International Data Transfers
							</h3>
							<p>
								As a global service, we may process data in multiple jurisdictions, including the
								United Kingdom, the European Union, and the United States. We comply with GDPR,
								CCPA, and other relevant data protection laws.
							</p>
							<h3>5. Security Measures</h3>
							<p>
								We implement strong encryption, firewalls, and secure authentication protocols to
								protect user data. While we strive to maintain security, no system is completely
								immune to breaches.
							</p>
							<h3>6. Your Rights</h3>
							<p>Users have the right to:</p>
							<p>Request access to their data.</p>
							<p>Request data deletion (except where legally required to retain).</p>
							<p>Opt out of marketing emails via support@sendmycv.ai.</p>
							<h3>
								<br />
								7. Retention Policy
							</h3>
							<p>
								We retain user data only as long as necessary for legal and operational reasons.
							</p>
							<h3>8. Changes to the Privacy Policy</h3>
							<p>
								We may update this Privacy Policy periodically. Major changes will be communicated
								via email.
							</p>
							<p>For inquiries, contact: support@sendmycv.ai</p>
						</div>
					</article>
				</TermsContainer>
			</Section>

			<Footer />
		</>
	);
};

export default PrivacyEn;
