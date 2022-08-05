import React from "react";

export default function Story({ story }) {
	return (
		<div className="story__card">
			<img src={story.image} alt="story" />
			<div className="story__profile-picture">
				<img src={story.profile_picture} alt="profile" />
			</div>
			<div className="story__profile-name">{story.profile_name}</div>
		</div>
	);
}
