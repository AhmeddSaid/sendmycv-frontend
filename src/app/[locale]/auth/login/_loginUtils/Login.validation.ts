import * as yup from "yup";

export const LoginValidationSchema = yup
	.object()
	.shape({
		email: yup
			.string()
			.email("Enter a valid email address.")
			.matches(
				/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
				"Enter a valid email address.",
			)
			.required("Email is required"),
		password: yup.string().required("Password is required"),
	})
	.strict(true)
	.noUnknown(true, "Please enter a valid info.");
