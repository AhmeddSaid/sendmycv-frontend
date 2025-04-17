import React from "react";
import { Section } from "@/Library/Grids/Grids";
import { TermsContainer } from "@/Library/_Pages/Privacy/Privacy.styles";
import Footer from "@/Library/components/Footer/Footer";
import MainHeader from "@/Library/components/UI/MainHeader";

const RefundEn = () => {
	return (
		<>
			<MainHeader />
			<Section>
				<TermsContainer>
					<article>
						<header>
							<h1>Refund Policy</h1>
							<p>
								<em>Last Updated: March 2025</em>
							</p>
						</header>
						<div>
							<p>
								We want our users to be satisfied with Send My CV services. However, due to the
								nature of digital content, we have a strict refund policy.
							</p>
							<h3>1. Refund Eligibility</h3>
							<p>Refunds are considered only in the following cases:</p>
							<p>
								Non-delivery of Service: If a paid service has not been delivered within the
								specified timeframe.
							</p>
							<p>
								Technical Errors: If a system malfunction prevents access to a purchased service.
							</p>
							<p>Duplicate Payments: If a user is charged more than once for the same service.</p>
							<h3>
								<br />
								2. Non-Refundable Services
							</h3>
							<p>Refunds are NOT granted for:</p>
							<p>CVs, outreach emails, or content that has already been delivered.</p>
							<p>Subscription fees for services already accessed.</p>
							<p>
								User dissatisfaction based on subjective preferences (e.g., stylistic CV
								differences).
							</p>
							<h3>
								<br />
								3. Refund Request Process
							</h3>
							<p>To request a refund, you must:</p>
							<p>1. Submit a request to customer.service@sendmycv.ai within 7 days of purchase.</p>
							<p>
								<br />
								2. Provide supporting documentation, including transaction ID and issue details.
							</p>
							<p>
								<br />
								3. Allow 10 business days for review and response.
							</p>
							<p>&nbsp;</p>
							<h3>4. Refund Processing</h3>
							<p>Approved refunds will be credited to the original payment method.</p>
							<p>Processing time depends on your bank or payment provider.</p>
							<h3>
								<br />
								5. Chargebacks &amp; Disputes
							</h3>
							<p>
								Initiating a chargeback without contacting us first may result in account
								suspension. We encourage users to resolve disputes through disputes@sendmycv.ai
								before taking external action.
							</p>
							<p>6. Amendments to the Refund Policy</p>
							<p>
								We reserve the right to modify this policy at any time. Updates will be posted on
								our website.
							</p>
							<p>
								For refund requests: customer.service@sendmycv.ai
								<br />
								For payment disputes: disputes@sendmycv.ai
							</p>
						</div>
					</article>
				</TermsContainer>
			</Section>
			<Footer />
		</>
	);
};

export default RefundEn;
