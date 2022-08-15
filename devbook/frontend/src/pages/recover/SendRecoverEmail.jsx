import React from "react";
import { useState } from "react";

import { Formik, Form } from "formik";
import LoginInput from "../../components/inputs/LoginInput/LoginInput";
import * as Yup from "yup";

export default function SendRecoverEmail({ email, setEmail, error }) {
	const validateEmail = Yup.object({
		email: Yup.string()
			.required("*Email address is required")
			.email("*Must be a valid email address.")
			.max(50, "*Email address can't have more than 50 characters."),
	});
	return (
		<div className="recover__form flex__column__start gap__y16">
			<h1>Recover Your Password</h1>
			<p>Please enter your email address.</p>

			<Formik
				enableReinitialize
				initialValues={{ email }}
				validationSchema={validateEmail}
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
							<button className="button-white">CANCEL</button>
							<button className="button-purple">CONTINUE</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
