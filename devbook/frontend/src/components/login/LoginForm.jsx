import React from "react";

import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import LoginInput from "../../components/inputs/LoginInput/LoginInput";
import { useState } from "react";

import "./LoginForm.scss";

const loginInfos = {
	email: "",
	password: "",
};
export default function LoginForm() {
	const [login, setLogin] = useState(loginInfos);
	const { email, password } = login;
	console.log(login);

	const handleLoginChange = (e) => {
		const { name, value } = e.target;
		setLogin({ ...login, [name]: value });
	};
	const loginValidation = Yup.object({
		email: Yup.string()
			.required("*Email adress is required.")
			.email("*Must be a valid email.")
			.max(100),
		password: Yup.string().required("*Password is required."),
	});

	return (
		<div className="login__form-container flex__column__center gap__y32">
			<Formik
				enableReinitialize
				initialValues={{
					email,
					password,
				}}
				validationSchema={loginValidation}
			>
				{(formik) => (
					<Form className="flex__column__center  gap__y16">
						<LoginInput
							tyoe="text"
							name="email"
							placeholder="Email or phone number"
							onChange={handleLoginChange}
						/>
						<LoginInput
							type="password"
							name="password"
							placeholder="Password"
							onChange={handleLoginChange}
						/>
						<button className="button-purple" type="submit">
							LOG IN
						</button>
					</Form>
				)}
			</Formik>
			<Link className="forgotten_password" to="/forgot">
				Forgotten password?
			</Link>
			<div className="sign-splitter"></div>
			<button className="button-white">CREATE ACCOUNT</button>
		</div>
	);
}
