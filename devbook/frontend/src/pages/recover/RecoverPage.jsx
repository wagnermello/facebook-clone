import "./RecoverPage.scss";
import loginImages from "../../constants/loginImages";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Formik, Form } from "formik";
import LoginInput from "../../components/inputs/LoginInput/LoginInput";

export default function RecoverPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { email, setEmail } = useState("");
	const { error, setError } = useState(" ");
	const logout = () => {
		Cookies.set("user", "");
		dispatch({
			type: "LOGOUT",
		});
		navigate("/login");
	};
	const { user } = useSelector((state) => ({ ...state }));
	return (
		<div className="recover flex__column__center">
			<div className="recover__header flex__row">
				<img src={loginImages.logo_2} alt="" />
				{user ? (
					<button
						className="button-purple"
						onClick={() => {
							logout();
						}}
					>
						LOGOUT
					</button>
				) : (
					<button
						className="button-purple"
						onClick={() => {
							navigate("/login");
						}}
					>
						LOGIN
					</button>
				)}
			</div>
			{/*Code verification*/}
			{/* <div className="recover__form flex__column__start gap__y16">
				<h1>Code verification</h1>
				<p>Please enter the code thar been sent to your email.</p>
				<input type="text" placeholder="Code" />
				<div className="recover__form__buttons gap__x8">
					<button className="button-white">CANCEL</button>
					<button className="button-purple">CONTINUE</button>
				</div>
			</div> */}
			{/*Find your account*/}
			<div className="recover__form flex__column__start gap__y16">
				<h1>Find your account</h1>
				<p>
					Please enter your email address or mobile number to search for your
					account.
				</p>

				<Formik enableInitialize initialValues={{ email }}>
					{(formik) => (
						<Form className="width100">
							<LoginInput
								className="recover__input"
								type="text"
								name="email"
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email address or phone number"
							/>
							{error && <div className="recover__input__error">{error}</div>}
						</Form>
					)}
				</Formik>
				<div className="recover__form__buttons gap__x8">
					<button className="button-white">CANCEL</button>
					<button className="button-purple">CONTINUE</button>
				</div>
			</div>
		</div>
	);
}
