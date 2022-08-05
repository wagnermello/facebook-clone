import React from "react";
import homeImages from "../../../constants/homeImages";

export default function Contacts({ user }) {
	return (
		<div className="home__right__contact__container flex__column__start gap__y16">
			{/*-----CONTACT-HEADER-----*/}
			<div className="home__right__contact__header">
				<div>
					<span>Contacts</span>
				</div>
				<div className="home__right__contact__header__icons gap__x16">
					<img src={homeImages.live_video} alt="live video" />
					<img src={homeImages.search_icon} alt="contact menu" />
					<img src={homeImages.horizontal_dots} alt="contact menu" />
				</div>
			</div>

			{/*-----CONTACT-LIST-----*/}
			<div className="home__right__contact-list flex__column__start">
				<div className="home__right__contact gap__x8">
					<img src={user?.picture} />
					<span>
						{user?.first_name} {user?.last_name}
					</span>
				</div>
			</div>
		</div>
	);
}
