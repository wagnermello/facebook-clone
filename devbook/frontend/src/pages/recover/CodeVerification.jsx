import React from "react";
import { Formik, Form } from "formik";
import LoginInput from "../../components/inputs/LoginInput/LoginInput";

export default function CodeVerification({ code, setCode, error }) {
	return (
		<div className="recover__form flex__column__start gap__y16">
			<h1>Code Verification</h1>
			<p>Please enter the code that has been sent to your code.</p>

			<Formik enableInitialize initialValues={{ code }}>
				{(formik) => (
					<Form className="width100">
						<LoginInput
							className="recover__input"
							type="text"
							name="code"
							onChange={(e) => setCode(e.target.value)}
							placeholder="Code"
						/>
						{error && <div className="recover__input__error">{error}</div>}
					</Form>
				)}
			</Formik>
			<div className="recover__form__buttons-right gap__x8 flex__row__center">
				<button className="button-white">CANCEL</button>
				<button className="button-purple">CONTINUE</button>
			</div>
		</div>
	);
}
