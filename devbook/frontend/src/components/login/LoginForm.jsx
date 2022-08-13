import React from "react";

import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import LoginInput from "../../components/inputs/LoginInput/LoginInput";
import { useState } from "react";

import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import "./LoginForm.scss";

const loginInfos = {
	email: "",
	password: "",
};
export default function LoginForm({ setVisible }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

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

	const [error, setError] = useState("");
	const loginSubmit = async () => {
		try {
			const { data } = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/login`,
				{ email, password }
			);
			dispatch({ type: "LOGIN", payload: data });
			Cookies.set("user", JSON.stringify(data));
			navigate("/");
		} catch (error) {
			setError(error.response.data.message);
		}
	};

	return (
		<div className="login__form-container flex__column__center gap__y32">
			<Formik
				enableReinitialize
				initialValues={{
					email,
					password,
				}}
				validationSchema={loginValidation}
				onSubmit={() => {
					loginSubmit();
				}}
			>
				{(formik) => (
					<Form className="flex__column__center  gap__y16">
						<LoginInput
							tyoe="text"
							name="email"
							placeholder="Email address"
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
			{error && <div className="login_error_text">{error}</div>}
			<Link className="forgotten_password" to="/recover">
				Forgotten password?
			</Link>
			<div className="sign-splitter"></div>
			<button className="button-white" onClick={() => setVisible(true)}>
				CREATE ACCOUNT
			</button>
		</div>
	);
}
