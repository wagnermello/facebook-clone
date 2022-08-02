import React from "react";
import { useState } from "react";
import axios from "axios";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import RegisterInput from "../inputs/RegisterInput/RegisterInput";
import DateOfBirthSelect from "./DateOfBirthSelect";
import GenderSelect from "./GenderSelect";

import PropagateLoader from "react-spinners/PropagateLoader";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import "./RegisterForm.scss";

export default function RegisterForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userInfos = {
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		bYear: new Date().getFullYear(),
		bMonth: new Date().getMonth() + 1,
		bDay: new Date().getDate(),
		gender: "",
	};

	const [user, setUser] = useState(userInfos);
	const {
		first_name,
		last_name,
		email,
		password,
		bYear,
		bMonth,
		bDay,
		gender,
	} = user;

	const handleRegisterChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const yearTemp = new Date().getFullYear();
	const years = Array.from(new Array(108), (val, index) => yearTemp - index);
	const months = Array.from(new Array(12), (val, index) => 1 + index);
	const getDays = () => {
		return new Date(bYear, bMonth, 0).getDate();
	};
	const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

	const registerValidation = Yup.object({
		first_name: Yup.string()
			.required("*First name is required.")
			.min(2, "*First name is too short")
			.max(60, "*First name is too long")
			.matches(/^[aA-zZ\u00C0-\u00FF\s]+$/, "*Must be a valid name."),
		last_name: Yup.string()
			.required("*Last name is required.")
			.min(2, "*Last name is too short")
			.max(60, "*Last name is too long")
			.matches(/^[aA-zZ\u00C0-\u00FF\s]+$/, "*Must be a valid last name."),
		email: Yup.string()
			.required("*Email is required.")
			.email("*Must be a valid email"),
		password: Yup.string()
			.required(
				"*Password must have at least six numbers, letters and special characters"
			)
			.min(6, "Password must have at least 6 characters")
			.max(60, "Password can't be more than 60 characters."),
	});

	const [dateError, setDateError] = useState("");
	const [genderError, setGenderError] = useState("");

	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [loading, setLoading] = useState(false);

	const registerSubmit = async () => {
		try {
			const { data } = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/register`,
				{
					first_name,
					last_name,
					email,
					password,
					bYear,
					bMonth,
					bDay,
					gender,
				}
			);
			setError("");
			setSuccess(data.message);
			setLoading(true);
			const { message, ...rest } = data;
			setTimeout(() => {
				dispatch({ type: "LOGIN", payload: rest });
				Cookies.set("user", JSON.stringify(rest));
				setLoading(false);

				navigate("/");
			}, 2000);
		} catch (error) {
			setLoading(false);
			setSuccess("");
			setError(error.response.data.message);
		}
	};

	return (
		<div className="blur">
			<div className="register flex__column__center">
				<div className="register__form__header flex__column__start">
					<i className="exit_icon"></i>
					<span>Sign Up</span>
					<p>It's very quick and easy</p>
				</div>
				<Formik
					enableReinitialize
					initialValues={{
						first_name,
						last_name,
						email,
						password,
						bYear,
						bMonth,
						bDay,
						gender,
					}}
					validationSchema={registerValidation}
					onSubmit={() => {
						let current_date = new Date();
						let picked_date = new Date(bYear, bMonth - 1, bDay);
						let atleast14 = new Date(1970 + 14, 0, 1);
						if (current_date - picked_date < atleast14) {
							setDateError("*You must be at least 14 years old to sign up.");
						} else if (gender === "") {
							setDateError("");
							setGenderError("*Please chose a gender.");
						} else {
							setDateError("");
							setGenderError("");
							registerSubmit();
						}
					}}
				>
					{(formik) => (
						<Form className="register__form">
							<div className="register__form__inputs flex__column__center gap__y16">
								<RegisterInput
									type="text"
									placeholder="First name"
									name="first_name"
									onChange={handleRegisterChange}
								/>
								<RegisterInput
									type="text"
									placeholder="Last name"
									name="last_name"
									onChange={handleRegisterChange}
								/>
								<RegisterInput
									type="text"
									placeholder="Email address"
									name="email"
									onChange={handleRegisterChange}
								/>
								<RegisterInput
									type="password"
									placeholder="New password"
									name="password"
									onChange={handleRegisterChange}
								/>
							</div>
							<div className="register__form__birth flex__column__start">
								{dateError && <div className="input__error">{dateError}</div>}
								<span>Date of birth</span>
								<DateOfBirthSelect
									bday={bDay}
									bMonth={bMonth}
									bYear={bYear}
									days={days}
									months={months}
									years={years}
									handleRegisterChange={handleRegisterChange}
								/>
							</div>
							<div className="register__form__gender flex__column__start">
								{genderError && (
									<div className="input__error">{genderError}</div>
								)}
								<span>Gender</span>
								<GenderSelect handleRegisterChange={handleRegisterChange} />
							</div>
							<button className="button-purple">SIGN UP</button>

							{loading === true && (
								<div className="login__spinner__container flex__column__center">
									<PropagateLoader
										loading={loading}
										className="login__spinner"
										color="#ffffff"
									/>
								</div>
							)}

							{error && (
								<div className="error_text flex__column__center">{error}</div>
							)}
							{success && (
								<div className="success_text flex__column__center">
									{success}
								</div>
							)}
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}
