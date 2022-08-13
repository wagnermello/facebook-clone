import React from "react";
import { Formik, Form } from "formik";
import LoginInput from "../../components/inputs/LoginInput/LoginInput";

export default function SendRecoverEmail({ email, setEmail, error }) {
	return (
		<div className="recover__form flex__column__start gap__y16">
			<h1>Recover Your Password</h1>
			<p>Please enter your email address.</p>

			<Formik enableInitialize initialValues={{ email }}>
				{(formik) => (
					<Form className="width100">
						<LoginInput
							className="recover__input"
							type="text"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email address"
						/>
						{error && <div className="recover__input__error">{error}</div>}
					</Form>
				)}
			</Formik>
			<div className="recover__form__buttons gap__x8 flex__row__center">
				<button className="button-white">CANCEL</button>
				<button className="button-purple">CONTINUE</button>
			</div>
		</div>
	);
}
