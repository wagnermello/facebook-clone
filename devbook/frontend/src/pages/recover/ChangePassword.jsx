import React from "react";
import { Formik, Form } from "formik";
import LoginInput from "../../components/inputs/LoginInput/LoginInput";

export default function ChangePassword({
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
}) {
	return (
		<div className="recover__form flex__column__start gap__y16">
			<h1>Change Password </h1>
			<p>Please create your new password.</p>

			<Formik enableInitialize initialValues={{ password, confirmPassword }}>
				{(formik) => (
					<Form className="width100">
						<LoginInput
							className="recover__input"
							type="text"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							placeholder="New password"
						/>
						<LoginInput
							className="recover__input new-password__input"
							type="text"
							name="confirmPassword"
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="Confirm new password"
						/>
						<div className="recover__form__buttons-right gap__x8 flex__row__center">
							<button className="button-white">CANCEL</button>
							<button className="button-purple">CONTINUE</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
