"use client";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { Button } from "../../../components/UI/Button";
import Input from "../../../components/UI/Input";
import { LoginForm, SignUpLink } from "../Auth.styles";

const validationSchema = Yup.object().shape({
	password: Yup.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Passwords must match")
		.required("Confirm password is required"),
});

export default function ResetPassword() {
	const formik = useFormik({
		initialValues: {
			password: "",
			confirmPassword: "",
		},
		validationSchema,
		onSubmit: async values => {
			console.log(values);
			// const result = await resetPasswordAction(values.password);
			// alert(result.message);
		},
	});
	``;

	return (
		<LoginForm>
			<h4>Reset Password</h4>
			<Input
				type="password"
				id="password"
				name="password"
				placeholder="Enter your password"
				value={formik.values.password}
				width="25rem"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			<Input
				type="password"
				id="confirmPassword"
				name="confirmPassword"
				placeholder="Confirm your password"
				value={formik.values.confirmPassword}
				width="25rem"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			<Button $width="100%" type="submit">
				Change password
			</Button>
			<SignUpLink>
				Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
			</SignUpLink>
		</LoginForm>
	);
}
