"use client";

import { HttpStatusCode } from "axios";
import { Form, Formik } from "formik";
import { useCallback, useState } from "react";
import { Button } from "../../../components/UI/Button";
import Input from "../../../components/UI/Input";
import { LoginForm, SignUpLink } from "../Auth.styles";
import styles from "./../../../Grids/Spaces.module.css";
import ErrorIcon from "@/Library/components/Notification/ErrorIcon/ErrorIcon";
import InfoIcon from "@/Library/components/Notification/InfoIcon/Infoicon";
import Notifications from "@/Library/components/Notification/Notification";
import { LoginValidationSchema } from "@/app/[locale]/auth/login/_loginUtils/Login.validation";
import { loginAction } from "@/app/[locale]/auth/login/action";
import { Link, useRouter } from "@/i18n/routing";

export default function Login() {
	const initialValues = {
		email: "",
		password: "",
	};

	const router = useRouter();
	const [state, setState] = useState({
		loading: false,
		error: false,
		invalid: false,
		verifyEmail: false,
		suspended: false,
		twoFactorAuth: false,
	});

	const { loading, error, invalid, verifyEmail, suspended } = state;

	const onSubmit = useCallback(
		async (values: { email: string; password: string }) => {
			if (loading) return;
			setState({
				...state,
				error: false,
				invalid: false,
				verifyEmail: false,
				suspended: false,
				twoFactorAuth: false,
				loading: true,
			});

			try {
				const res = await loginAction(values);

				switch (res.status) {
					case HttpStatusCode.NotAcceptable:
						setState({
							...state,
							verifyEmail: false,
							suspended: false,
							twoFactorAuth: false,
							error: false,
							invalid: true,
							loading: false,
						});
						return;
					case HttpStatusCode.Locked:
						setState({
							...state,
							invalid: false,
							verifyEmail: false,
							twoFactorAuth: false,
							error: false,
							suspended: true,
							loading: false,
						});
						return;
					case HttpStatusCode.Ok:
						router.push("/documents");
						return;
					case HttpStatusCode.PartialContent:
						setState({
							...state,
							verifyEmail: true,
							loading: false,
							invalid: false,
							twoFactorAuth: false,
							error: false,
							suspended: false,
						});
						return;
					default:
						setState({
							...state,
							invalid: false,
							verifyEmail: false,
							suspended: false,
							twoFactorAuth: false,
							error: true,
							loading: false,
						});
						return;
				}
			} catch (err) {
				setState({
					...state,
					error: true,
					loading: false,
					invalid: false,
					verifyEmail: false,
					twoFactorAuth: false,
					suspended: false,
				});
				return;
			}
		},
		[loading, state, router],
	);

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={LoginValidationSchema}
				onSubmit={onSubmit}
			>
				{({ isSubmitting, values, handleChange, handleBlur, errors, touched }) => (
					<Form>
						<LoginForm>
							<h4>Login</h4>
							<div className={`${styles.marginBottom56}`}>
								{invalid && (
									<Notifications
										className={styles.marginBottom16}
										tittle={"Invalid Credentials"}
										caption={"Please enter a valid email and password."}
										type={"error"}
										icon={<ErrorIcon />}
									/>
								)}

								{error && (
									<Notifications
										className={styles.marginBottom16}
										caption={"Something went wrong please try again."}
										tittle={"Error"}
										type={"error"}
										icon={<ErrorIcon />}
									/>
								)}

								{suspended && (
									<Notifications
										className={styles.marginBottom16}
										caption={"Suspended account"}
										tittle={"Your account has been suspended."}
										type={"error"}
										icon={<ErrorIcon />}
									/>
								)}

								{verifyEmail && (
									<Notifications
										className={styles.marginBottom16}
										caption={"Please verify your account"}
										tittle={`Verify your email. ${(<Link href={"/resend"}>Resend email</Link>)}`}
										type={"information"}
										icon={<InfoIcon />}
									/>
								)}
							</div>
							<div className={styles.marginTop16}>
								<Input
									id="email"
									name="email"
									placeholder="Enter your email"
									label={"Email Address"}
									type="email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									ErrorMessage={errors.email && touched.email ? errors.email : null}
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
									placeholder={"Enter your password"}
								/>
							</div>

							<div className={`${styles.marginTop16} ${styles.marginBottom16}`}>
								<Button
									$width="100%"
									type={isSubmitting ? "button" : "submit"}
									disabled={isSubmitting}
									loading={isSubmitting}
								>
									Login
								</Button>
							</div>

							<SignUpLink className={styles.marginBottom16}>
								<Link href="/auth/forgot-password">Forgot password?</Link>
							</SignUpLink>

							{/*<Separator>OR</Separator>*/}
							{/*<Socials>*/}
							{/*	{socials.map(item => (*/}
							{/*		<SocialHolder key={item.id} src={item.icon} alt={item.text} />*/}
							{/*	))}*/}
							{/*</Socials>*/}
							<SignUpLink>
								Don&apos;t have an account? <Link href="/auth/signup">Sign Up</Link>
							</SignUpLink>
						</LoginForm>
					</Form>
				)}
			</Formik>
		</>
	);
}
