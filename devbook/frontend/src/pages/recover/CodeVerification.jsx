import React from "react";
import { Formik, Form } from "formik";
import LoginInput from "../../components/inputs/LoginInput/LoginInput";
import * as Yup from "yup";

export default function CodeVerification({ code, setCode, error }) {
	const validateCode = Yup.object({
		code: Yup.string()
			.required("*Code is required.")
			.min(5, "Code must be 5 characters.")
			.max(5, "Code must be 5 characters."),
	});
	return (
		<div className="recover__form flex__column__start gap__y16">
			<h1>Code Verification</h1>
			<p>Please enter the code that has been sent to your code.</p>

			<Formik
				enableInitialize
				initialValues={{ code }}
				validationSchema={validateCode}
			>
				{(formik) => (
					<Form className="width100">
						<LoginInput
							className="recover__input"
							type="text"
							name="code"
							onChange={(e) => setCode(e.target.value)}
							placeholder="Code"
						/>
						{error && <div>{error}</div>}
						<div className="recover__form__buttons-right gap__x8 flex__row__center">
							<button className="button-white">CANCEL</button>
							<button type="submit" className="button-purple">
								CONTINUE
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
