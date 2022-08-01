import React from "react";
import { Form, Formik } from "formik";

import "./RegisterForm.scss";
import RegisterInput from "../inputs/RegisterInput/RegisterInput";
import { useState } from "react";

const userInfos = {
	first_name: "",
	last_name: "",
	email: "",
	password: "",
	bYear: "",
	bMonth: "",
	bDay: "",
	gender: "",
};

export default function RegisterForm() {
	const [user, setUser] = useState();
	const handleRegisterChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

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
									<select name="bDay">
										<option>15</option>
									</select>
									<select name="bMonth">
										<option>15</option>
									</select>
									<select name="bYear">
										<option>15</option>
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
