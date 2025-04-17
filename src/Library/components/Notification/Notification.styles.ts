"use client";

import styled from "styled-components";

export const NotificationContanier = styled.div<{
	type?:
		| "error"
		| "success"
		| "information"
		| "white"
		| "Darkerror"
		| "Darksuccess"
		| "Darkinformation"
		| "Darkwhite";
}>`
	display: flex;
	width: 100%;
	padding: var(--Spacing-spacing-04, 0.75rem);
	align-items: flex-start;
	gap: var(--Spacing-spacing-03, 0.5rem);
	border-radius: var(--corner-04, 0.75rem);
	//border: 1px solid var(--Border-border-primary-muted, #e2e5eb);

	border: ${({ type }) => {
		switch (type) {
			case "error":
				return " 1px solid	 var(--Border-border-danger-muted, #F5A79A)";
			case "success":
				return " 1px solid	  var(--Border-border-success-muted, #9DCBA8)";
			case "information":
				return " 1px solid	 var(--Border-border-info-muted, #9EBCFF)";
			case "white":
				return " 1px solid	  var(--Border-border-primary-muted, #E2E5EB)";
			case "Darkerror":
				return " 1px solid var(--Border-border-danger-muted, #730300)";
			case "Darksuccess":
				return " 1px solid var(--Border-border-success-muted, #00491C)";
			case "Darkinformation":
				return " 1px solid var(--Border-border-info-muted, #152C8C) 	";
			case "Darkwhite":
				return "  1px solid var(--Border-border-primary-muted, #22262E)";
		}
	}};

	background: ${({ type }) => {
		switch (type) {
			case "error":
				return " var(--Surface-surface-danger-muted, #FFF4F1)";
			case "success":
				return " var(--Surface-surface-success-muted, #F0FCF2)";
			case "information":
				return " var(--Surface-surface-info-muted, #F3F8FF)";
			case "white":
				return "  var(--Surface-surface-elevation, #FFF)";
			case "Darkerror":
				return " var(--Surface-surface-danger-muted, #220402)";
			case "Darksuccess":
				return " var(--Surface-surface-success-muted, #021407)";
			case "Darkinformation":
				return " var(--Surface-surface-info-muted, #050C2A)";
			case "Darkwhite":
				return "  var(--Surface-surface-elevation, #151A1F)";
		}
	}};
`;

export const NotificationShell = styled.div`
	width: 100%;
`;

export const NotificationTittle = styled.p<{
	type?:
		| "error"
		| "success"
		| "information"
		| "white"
		| "Darkerror"
		| "Darksuccess"
		| "Darkinformation"
		| "Darkwhite";
}>`
	font-variant-numeric: lining-nums proportional-nums;

	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.75rem;

	//color: var(--Text-text-primary, #000);
	color: ${({ type }) => {
		switch (type) {
			case "error":
				return "var(--Text-text-danger, #C32518)";
			case "success":
				return " var(--Text-text-success, #00823E)";
			case "information":
				return " var(--Text-text-info, #3259E8)";
			case "white":
				return " var(--Text-text-primary, #000)";
			case "Darkerror":
				return "var(--Text-text-danger, #C32518)";
			case "Darksuccess":
				return " var(--Text-text-success, #00823E)";
			case "Darkinformation":
				return " var(--Text-text-info, #3259E8)";
			case "Darkwhite":
				return " var(--Text-text-primary, #FFF)";
		}
	}};
`;

export const NotificationCaptoin = styled.p<{
	type?:
		| "error"
		| "success"
		| "information"
		| "white"
		| "Darkerror"
		| "Darksuccess"
		| "Darkinformation"
		| "Darkwhite";
}>`
	font-variant-numeric: lining-nums proportional-nums;

	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.5rem;
	margin-bottom: 0.5rem;

	//color: var(--Text-text-secondary, #626d7c);

	color: ${({ type }) => {
		switch (type) {
			case "error":
				return "var(--Text-text-danger, #C32518)";
			case "success":
				return " var(--Text-text-success, #00823E)";
			case "information":
				return " var(--Text-text-info, #3259E8)";
			case "white":
				return "  var(--Text-text-secondary, #626D7C)";
			case "Darkerror":
				return "var(--Text-text-danger, #C32518)";
			case "Darksuccess":
				return " var(--Text-text-success, #00823E)";
			case "Darkinformation":
				return " var(--Text-text-info, #3259E8)";
			case "Darkwhite":
				return "  var(--Text-text-secondary, #626D7C)";
		}
	}};
`;
