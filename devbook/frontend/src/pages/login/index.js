import React from "react";

import { login_cyborg, login_logo } from "../../constants/images";
import "./login.scss";

import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<section className="login app__wrapper">
			<div className="login__container container__wrapper flex__row__center">
				<div className="login__container__left flex__column__center gap__y32">
					<img src={login_logo} alt="devbook" />
					<p>
						Devbook helps you connect and share with the devs who are part of
						your network.
					</p>
					<img className="cyborg" src={login_cyborg} alt="smart cyborg" />
				</div>
				<div className="login__container__right  flex__column__center gap__y32">
					<div className="login__form-container flex__column__center gap__y32">
						<Formik>
							{(formik) => (
								<Form className="flex__column__center  gap__y16">
									<input type="text" placeholder="Email or phone number" />
									<input type="text" placeholder="Password" />
									<button className="button-purple" type="submit">
										LOG IN
									</button>
								</Form>
							)}
						</Formik>
						<Link className="forgotten_password" to="/forgot">
							Forgotten password?
						</Link>
						<div className="sign-splitter"></div>
						<button className="button-white">CREATE ACCOUNT</button>
					</div>
					<span>
						Share knowledge, ask for code <br />
						review and much more!
					</span>
					<img src={login_cyborg} alt="smart cyborg" />
				</div>
			</div>
		</section>
	);
}
