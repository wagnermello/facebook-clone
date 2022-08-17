import React from "react";
import { Formik, Form } from "formik";
import LoginInput from "../../components/inputs/LoginInput/LoginInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function ChangePassword({
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	loading,
	setLoading,
	setError,
	userInfos,
}) {
	const { email } = userInfos;
	const navigate = useNavigate();
	const changePassword = async () => {
		try {
			setLoading(true);
			await axios.post(`${process.env.REACT_APP_BACKEND_URL}/changePassword`, {
				email,
				password,
			});
			setError("");
			setTimeout(() => {
				setLoading(false);
				navigate("/");
			}, 2000);
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
			<h1>Change Password </h1>
			<p>Please create your new password.</p>

			<Formik
				enableReinitialize
				initialValues={{ password, confirmPassword }}
				onSubmit={() => {
					changePassword();
				}}
			>
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
							<Link to="/login">
								<button className="button-white">CANCEL</button>
							</Link>
							<button className="button-purple">CONTINUE</button>
						</div>
						{loading === true && (
							<div className="recover__spinner__container flex__column__center">
								<PropagateLoader
									loading={loading}
									className="recover__spinner"
									color="#ffffff"
								/>
							</div>
						)}
					</Form>
				)}
			</Formik>
		</div>
	);
}
