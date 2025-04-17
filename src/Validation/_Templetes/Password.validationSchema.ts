import * as yup from "yup";
import passwordRegex from "../../../Regex/password.regex";

const passwordValidationSchema = yup
	.string()
	.required("Password is required")
	.min(8, "Password must be at least 8 characters long")
	.max(150, "Password cannot exceed 150 characters")
	.matches(/[a-z]/, "Password must contain at least one lowercase letter")
	.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
	.matches(/\d/, "Password must contain at least one digit")
	.matches(
		/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/,
		"Password must contain at least one special character",
	)
	.matches(
		passwordRegex,
		"Password must contain only English letters, numbers, and special characters",
	);

export default passwordValidationSchema;
