import React from "react";
import homeImages from "../../../constants/homeImages";

export default function RightHomeSponsored() {
	return (
		<div className="home__right__sponsored-container flex__column__start gap__y16">
			<span>Sponsored</span>
			<div className="sponsored__items flex__row__start gap__x8">
				<img src={homeImages.sponsored_1} alt="announcement" />
				<div className="flex__column__start">
					<h2>Nike Air [50% OFF]</h2>
					<span>nike.com</span>
				</div>
			</div>
			<div className="sponsored__items flex__row__start gap__x8">
				<img src={homeImages.sponsored_2} alt="announcement" />
				<div className="flex__column__start">
					<h2>Get Uber ticket</h2>
					<span>uber.com</span>
				</div>
			</div>
		</div>
	);
}
