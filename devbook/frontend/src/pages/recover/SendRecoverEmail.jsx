import React from "react";

import { Formik, Form } from "formik";
import LoginInput from "../../components/inputs/LoginInput/LoginInput";
import * as Yup from "yup";

import { Link } from "react-router-dom";

import axios from "axios";

export default function SendRecoverEmail({
	email,
	setEmail,
	error,
	setError,
	setUserInfos,
	setVisible,
	loading,
	setLoading,
}) {
	const validateEmail = Yup.object({
		email: Yup.string()
			.required("*Email address is required")
			.email("*Must be a valid email address.")
			.max(50, "*Email address can't have more than 50 characters."),
	});
	const handleSearch = async () => {
		try {
			setLoading(true);
			const { data } = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/findUser`,
				{ email }
			);
			setUserInfos(data);
			setVisible(1);
			setError("");
			setLoading(false);
		} catch (error) {
			setLoading(false);

			setError(
				<div className="input__error account__error">
					{error.response.data.message}
				</div>
			);
		}
	};
	const sendEmail = async () => {
		try {
			setLoading(true);
			await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/sendResetPasswordCode`,
				{
					email,
				}
			);
			setError("");
			setVisible(1);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(
				<div className="input__error account__error">
					{error.response.data.message}
				</div>
			);
		}
	};
	return (
		<div className="recover__form flex__column__start gap__y16">
			<h1>Recover Your Password</h1>
			<p>Please enter your email address.</p>

			<Formik
				enableReinitialize
				initialValues={{ email }}
				validationSchema={validateEmail}
				onSubmit={() => {
					handleSearch();
				}}
			>
				{(formik) => (
					<Form className="width100">
						<LoginInput
							className="recover__input"
							type="text"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email address"
						/>
						{error && <div>{error}</div>}
						<div className="recover__form__buttons gap__x8 flex__row__center">
							<Link to="/login">
								<button className="button-white">CANCEL</button>
							</Link>
							<button
								onClick={() => {
									sendEmail();
								}}
								className="button-purple"
							>
								CONTINUE
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
