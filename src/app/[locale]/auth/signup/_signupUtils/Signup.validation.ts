import * as yup from "yup";
import EmailValidationSchema from "@/Validation/_Templetes/Email.validationSchema";
import passwordValidationSchema from "@/Validation/_Templetes/Password.validationSchema";

export const signupValidationSchema = yup
	.object()
	.shape({
		fullName: yup
			.string()
			.required("Name is required")
			.min(2, "Name must be at least 2 characters")
			.max(32, "Name maximum 32 character"),
		email: EmailValidationSchema,
		password: passwordValidationSchema,
		repeatPassword: yup
			.string()
			.oneOf([yup.ref("password")], "Passwords must match")
			.required("Repeat password is required"),
		terms: yup
			.boolean()
			.oneOf([true], "You must accept the terms and privacy policy.")
			.required("You must accept the terms and privacy policy."),
	})
	.noUnknown(true, { noExtensions: true, message: "Unknown field" })
	.strict(true);

export const signupInitialValues = {
	fullName: "",
	email: "",
	password: "",
	repeatPassword: "",
	terms: false,
};
