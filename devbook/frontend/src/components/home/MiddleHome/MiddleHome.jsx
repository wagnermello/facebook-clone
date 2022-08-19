import "./MiddleHome.scss";
import Stories from "./Stories";
import CreatePost from "./CreatePostPopup/CreatePost";
import SendVerification from "./SendVerification";
import React from "react";
import CreatePostPopup from "./CreatePostPopup/CreatePostPopup";

export default function MiddleHome({ user }) {
	return (
		<div className="home__middle-container flex__column__center gap__y32">
			<Stories user={user} />
			{user.verified === false && <SendVerification user={user} />}
			<CreatePost user={user} />
			<CreatePostPopup user={user} />
		</div>
	);
}
