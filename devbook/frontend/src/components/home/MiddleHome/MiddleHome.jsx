import "./MiddleHome.scss";
import Stories from "./Stories";
import React from "react";

export default function MiddleHome({ user }) {
	return (
		<div className="home__middle-container flex__column__center gap__y32">
			<Stories user={user} />
		</div>
	);
}
