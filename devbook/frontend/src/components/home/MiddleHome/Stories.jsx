import React from "react";
import homeImages from "../../../constants/homeImages";
import { stories } from "../../../data/home";
import Story from "./Story";

export default function Stories({ user }) {
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
			{/*-----FRIENDS-STORIES-CARD-----*/}
			{stories.map((story, i) => (
				<Story story={story} />
			))}
		</div>
	);
}
