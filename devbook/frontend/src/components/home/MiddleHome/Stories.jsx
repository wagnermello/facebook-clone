import React from "react";
import homeImages from "../../../constants/homeImages";
import { stories } from "../../../data/home";
import Story from "./Story";
import { useMediaQuery } from "react-responsive";

export default function Stories({ user }) {
	const query880px = useMediaQuery({
		query: "(max-width: 880px)",
	});
	const max = query880px ? 3 : stories.length;
	return (
		<div className="stories__container flex__row__center gap__x8">
			{/*-----CREATE-STORIES-CARD-----*/}
			<div className="stories__create-story-card">
				<div className="create-story-card__image">
					<img src={user?.picture} alt="profile" />
				</div>
				<div className="create-story__icon__container flex__column__center">
					<img
						className="create-story__icon"
						src={homeImages.add_story}
						alt="create story"
					/>
				</div>
			</div>
			{stories.slice(0, max).map((story, i) => (
				<Story story={story} key={i} />
			))}
		</div>
	);
}
