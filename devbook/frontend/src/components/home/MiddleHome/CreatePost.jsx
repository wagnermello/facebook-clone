import React from "react";
import homeImages from "../../../constants/homeImages";

export default function createPost({ user }) {
	return (
		<div className="create-post flex__column__center gap__y16">
			<div className="create-post__header flex__row__center gap__x16">
				<img src={user?.picture} alt="create post" />
				<div className="create-post__input">
					What's on your mind, {user?.first_name}?
				</div>
			</div>
			<div className="create-post__splitter"></div>
			<div className="create-post__footer flex__row gap__x16">
				<div className="create-post__footer__item gap__x8">
					<img src={homeImages.live_coding} alt="live coding" />
					<span>Live coding</span>
				</div>
				<div className="create-post__footer__item gap__x8">
					<img src={homeImages.photo_video} alt="" />
					<span>Photo/video</span>
				</div>
				<div className="create-post__footer__item gap__x8">
					<img src={homeImages.professional} alt="professional achievement" />
					<span>Professional achievement</span>
				</div>
			</div>
		</div>
	);
}
