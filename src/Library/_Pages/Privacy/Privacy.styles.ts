"use client";

import styled from "styled-components";

export const TermsContainer = styled.section`
	& > article {
		padding-block: 80px;
		max-width: 900px;
		margin: 0 auto;
		padding-inline: 1.25rem;
	}

	& h1 {
		font-size: 46px;
		font-weight: 600;
		line-height: 130%;
	}

	header {
		margin-bottom: 80px;
	}

	& h2,
	& h3,
	& h4 {
		margin-top: 4rem;
		margin-bottom: 0.5rem;
	}

	& h2 {
		font-size: 2rem;
		font-weight: 600;
		line-height: 1.5;
	}

	& h3 {
		font-size: 1.25rem;
		margin-top: 1.25rem;
		font-weight: 600;
		line-height: 1.5;
	}

	& h4 {
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.5;
	}

	& p {
		font-size: 16px;
		line-height: 1.7;
		margin-bottom: 1.5rem;

		& strong {
			margin-top: 2rem;
		}
	}

	& ul {
		margin-block: 1.5rem;

		& li {
			padding-inline-start: 0.5rem;
			list-style-type: disc;
		}
	}

	& * {
		color: white;

		& > strong {
			font-weight: 600;
		}
	}

	& table {
		font-size: 0.875rem;

		& td {
			padding: 0.5rem;
			border: 1px solid rgba(55, 53, 47, 0.09);
			border-collapse: collapse;
		}
	}
`;
