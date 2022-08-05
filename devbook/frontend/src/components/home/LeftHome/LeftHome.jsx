import React from "react";
import "./LeftHome.scss";
import LeftHomeMenu from "./LeftHomeMenu";
import LeftHomeShortcuts from "./LeftHomeShortcuts";
import LeftHomeCopyright from "./LeftHomeCopyright";
import { useSelector } from "react-redux";

export default function LeftHome({ user }) {
	return (
		<div className="home__left-container flex__column__start gap__y32">
			<LeftHomeMenu user={user} />
			<div className="home__left-container__splitter"></div>
			<LeftHomeShortcuts />
			<LeftHomeCopyright />
		</div>
	);
}
