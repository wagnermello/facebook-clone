import React from "react";
import { Form, Formik } from "formik";

import "./RegisterForm.scss";
import RegisterInput from "../inputs/RegisterInput/RegisterInput";
import { useState } from "react";

import * as Yup from "yup";

export default function RegisterForm() {
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
	const { first_name, last_name, email, password, bYear, bMonth, bDay } = user;

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
			.min(6, "Password must have atleast 6 characters")
			.max(60, "Password can't be more than 60 characters."),
	});

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
					}}
					validationSchema={registerValidation}
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
								<span>Date of birth</span>
								<div className="flex__row__center register__form__birth__select gap__x16">
									<select
										name="bDay"
										value={bDay}
										onChange={handleRegisterChange}
									>
										{days.map((day, i) => (
											<option value={bDay} key={i}>
												{day}
											</option>
										))}
									</select>
									<select
										name="bMonth"
										value={bMonth}
										onChange={handleRegisterChange}
									>
										{months.map((month, i) => (
											<option value={month} key={i}>
												{month}
											</option>
										))}
									</select>
									<select
										name="bYear"
										value={bYear}
										onChange={handleRegisterChange}
									>
										{years.map((year, i) => (
											<option value={year} key={i}>
												{year}
											</option>
										))}
									</select>
								</div>
							</div>
							<div className="register__form__gender flex__column__start">
								<span>Gender</span>
								<div className="flex__row__center register__form__gender__label gap__x16">
									<label htmlFor="male">
										Male
										<input
											type="radio"
											name="gender"
											id="male"
											value="male"
											onChange={handleRegisterChange}
										/>
									</label>
									<label htmlFor="female">
										Female
										<input
											type="radio"
											name="gender"
											id="female"
											value="female"
											onChange={handleRegisterChange}
										/>
									</label>
									<label htmlFor="custom">
										Custom
										<input
											type="radio"
											name="gender"
											id="custom"
											value="custom"
											onChange={handleRegisterChange}
										/>
									</label>
								</div>
							</div>
							<button className="button-purple">SIGN UP</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}
