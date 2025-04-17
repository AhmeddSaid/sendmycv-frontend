"use client";
import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import { Button } from "../../../components/UI/Button";
import Input from "../../../components/UI/Input";
import { LoginForm, SignUpLink } from "../Auth.styles";
import styles from "./../../../Grids/Spaces.module.css";
import { Flex } from "@/Library/Grids/Grids";
import ConfirmEmail from "@/Library/_Pages/ConfirmEmail/ConfirmEmail";
import ErrorIcon from "@/Library/components/Notification/ErrorIcon/ErrorIcon";
import Notifications from "@/Library/components/Notification/Notification";
import InputError from "@/Library/components/UI/InputError"; // const socials = [
import {
	signupInitialValues,
	signupValidationSchema,
} from "@/app/[locale]/auth/signup/_signupUtils/Signup.validation";
import { signUpAction } from "@/app/[locale]/auth/signup/action";

export default function SignUp() {
	const [error, setErrors] = React.useState<boolean>(false);
	const [Success, setSuccess] = React.useState<boolean>(false);

	const handleSubmit = async (values: {
		email: string;
		terms: boolean;
		fullName: string;
		password: string;
		repeatPassword: string;
	}) => {
		setErrors(false);
		try {
			const response = await signUpAction(values);
			if (response.status) {
				setSuccess(true);
			} else {
				setErrors(true);
			}
		} catch {
			setErrors(true);
		}
	};

	return (
		<>
			<Formik
				initialValues={signupInitialValues}
				validationSchema={signupValidationSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting, values, handleChange, handleBlur, errors, touched }) => (
					<Form>
						<LoginForm>
							{Success ? (
								<ConfirmEmail />
							) : (
								<>
									<h4>Sign Up</h4>

									{error && (
										<Notifications
											className={styles.marginBottom16}
											caption={"Something went wrong please try again."}
											tittle={"Error"}
											type={"error"}
											icon={<ErrorIcon />}
										/>
									)}

									<div className={styles.marginTop16}>
										<Input
											type="text"
											id="fullName"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.fullName}
											name={"fullName"}
											ErrorMessage={touched.fullName && errors.fullName ? errors.fullName : null}
											autoComplete="name"
											label={"Full name"}
											placeholder={"Enter your name"}
										/>
									</div>
									<div className={styles.marginTop16}>
										{" "}
										<Input
											type="email"
											id="email"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
											name={"email"}
											ErrorMessage={touched.email && errors.email ? errors.email : null}
											autoComplete="password"
											label={"Email"}
											placeholder={"Enter your email"}
										/>
									</div>
									<div className={styles.marginTop16}>
										<Input
											type="password"
											id="password"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.password}
											name={"password"}
											ErrorMessage={touched.password && errors.password ? errors.password : null}
											autoComplete="password"
											label={"Password"}
											placeholder={"Enter a password"}
										/>
									</div>
									<div className={styles.marginTop16}>
										<Input
											type="password"
											id="repeatPassword"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.repeatPassword}
											name={"repeatPassword"}
											ErrorMessage={
												touched.repeatPassword && errors.repeatPassword
													? errors.repeatPassword
													: null
											}
											autoComplete="password"
											label={"Confirm Password"}
											placeholder={"Confirm your password"}
										/>
									</div>

									<div className={styles.marginTop16}>
										<Flex
											className={styles.marginTop16}
											$align="center"
											$gap="0.5rem"
											$margin="0 0 1.5rem"
										>
											<input
												type="checkbox"
												id="terms"
												name="terms"
												checked={values.terms}
												onChange={handleChange}
											/>

											<label htmlFor="rememberMe">
												I{" "}
												<Link href="/terms" target={"_blank"}>
													{" "}
													agree to Terms
												</Link>
												<span> and </span>
												<Link href="/privacy" target={"_blank"}>
													Privacy Policy*
												</Link>
											</label>
										</Flex>

										{touched.terms && errors.terms && (
											<InputError message={errors.terms ? errors.terms : ""} />
										)}
									</div>

									<div className={styles.marginTop16}>
										<Button
											type={isSubmitting ? "button" : "submit"}
											disabled={isSubmitting}
											$width="100%"
											loading={isSubmitting}
										>
											Sign Up
										</Button>
									</div>

									{/*<Separator>OR</Separator>*/}
									{/*<Socials>*/}
									{/*	{socials.map(item => (*/}
									{/*		<SocialHolder key={item.id} src={item.icon} alt={item.text} />*/}
									{/*	))}*/}
									{/*</Socials>*/}
									<div className={styles.marginTop16}>
										<SignUpLink>
											Already Registered? <Link href="/auth/login">Login</Link>
										</SignUpLink>
									</div>
								</>
							)}
						</LoginForm>
					</Form>
				)}
			</Formik>
		</>
	);
}
