import React from "react";
import Contact from "./Contact";
import "./RightHome.scss";
import RightHomeSponsored from "./RightHomeSponsored";

export default function RightHome({ user }) {
	return (
		<div className="home__right-container flex__column__start gap__y32">
			<RightHomeSponsored />
			<div className="home__right-container__splitter"></div>
			<Contact user={user} />
		</div>
	);
}
