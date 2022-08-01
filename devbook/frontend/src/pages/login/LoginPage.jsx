import React from "react";
import LoginForm from "../../components/login/LoginForm";

import { login_cyborg, login_logo } from "../../constants/images";
import "./LoginPage.scss";

export default function LoginPage() {
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
					<LoginForm />
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
