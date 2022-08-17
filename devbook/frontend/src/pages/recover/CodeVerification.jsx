import React from "react";
import { Formik, Form } from "formik";
import LoginInput from "../../components/inputs/LoginInput/LoginInput";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CodeVerification({
	code,
	setCode,
	error,
	loading,
	setLoading,
	setVisible,
	setError,
	userInfos,
}) {
	const validateCode = Yup.object({
		code: Yup.string()
			.required("*Code is required.")
			.min(5, "Code must be 5 characters.")
			.max(5, "Code must be 5 characters."),
	});
	const { email } = userInfos;
	const verifyCode = async () => {
		try {
			setLoading(true);
			await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/validateResetCode`,
				{ email, code }
			);
			setVisible(2);
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
	console.log(email);
	return (
		<div className="recover__form flex__column__start gap__y16">
			<h1>Code Verification</h1>
			<p>Please enter the code that has been sent to your code.</p>

			<Formik
				enableReinitialize
				initialValues={{
					code,
				}}
				validationSchema={validateCode}
				onSubmit={() => {
					verifyCode();
				}}
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
							<Link to="/login">
								<button className="button-white">CANCEL</button>
							</Link>{" "}
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
