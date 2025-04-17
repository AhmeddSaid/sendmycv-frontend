import { getCountryData, TCountryCode } from "countries-list";
import { plansPricing } from "@/app/[locale]/pricing/_pricingUtils/plans";

const middleEastCountries = [
	"YE",
	"JO",
	"QA",
	"KW",
	"PS",
	"IR",
	"LB",
	"BH",
	"AE",
	"EG",
	"CY",
	"IQ",
	"SA",
	"OM",
	"SY",
	"TR",
];

export const RegionDetector = (country: string) => {
	if (country === "US") {
		return plansPricing.US;
	} else if (country === "UK") {
		return plansPricing.UK;
	} else if (middleEastCountries.includes(country)) {
		return plansPricing.ME;
	} else if (getCountryData(country as TCountryCode).continent === "AS") {
		return plansPricing.ASIA;
	} else if (getCountryData(country as TCountryCode).continent === "EU") {
		return plansPricing.EUROPE;
	} else {
		return plansPricing.US;
	}
};

export const PricingDetector = (region: string) => {
	if (region === "US") {
		return plansPricing.US;
	} else if (region === "UK") {
		return plansPricing.UK;
	} else if (region === "ME") {
		return plansPricing.ME;
	} else if (region === "ASIA") {
		return plansPricing.ASIA;
	} else if (region === "EUR") {
		return plansPricing.EUROPE;
	} else {
		return plansPricing.US;
	}
};
