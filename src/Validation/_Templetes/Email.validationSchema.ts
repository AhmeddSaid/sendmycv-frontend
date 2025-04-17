import * as yup from "yup";
import EmailRegex from "../../../Regex/Email.regex";

const EmailValidationSchema = yup
	.string()
	.trim()
	.email("Please enter a valid email address.")
	.matches(EmailRegex, "Please enter a valid email address.")
	.required("Please enter your email address");

export default EmailValidationSchema;
