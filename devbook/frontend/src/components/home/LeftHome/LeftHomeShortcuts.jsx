import React from "react";
import homeImages from "../../../constants/homeImages";

export default function Shortcuts() {
	return (
		<div className="home__left-container__shortcuts flex__column__start gap__y16">
			<h3>Your shortcuts</h3>
			<div className="home__left-container__item gap__x8">
				<div className="left__icon__container">
					<img src={homeImages.my_page} alt="my devbook page" />
				</div>
				<span>My Devbook Page</span>
			</div>
			<div className="home__left-container__item gap__x8">
				<div className="left__icon__container">
					<img src={homeImages.my_instagram} alt="my instagram page" />
				</div>
				<span>My Instagram Page</span>
			</div>
		</div>
	);
}
