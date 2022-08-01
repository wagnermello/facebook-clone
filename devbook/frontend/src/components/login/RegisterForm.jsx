import React from "react";
import { Form, Formik } from "formik";

import "./RegisterForm.scss";
import RegisterInput from "../inputs/RegisterInput/RegisterInput";
import { useState } from "react";

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

	console.log(user);

	return (
		<div className="blur">
			<div className="register flex__column__center">
				<div className="register__form__header flex__column__start">
					<i className="exit_icon"></i>
					<span>Sign Up</span>
					<p>It's very quick and easy</p>
				</div>
				<Formik>
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
