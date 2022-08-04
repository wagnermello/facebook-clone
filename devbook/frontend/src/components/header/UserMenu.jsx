import "./UserMenu.scss";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import React, { useState } from "react";
import UserMenuSettings from "./UserMenuSettings";

export default function UserMenu({ user }) {
	const [visible, setVisible] = useState(1);
	return (
		<div className="user-menu flex__column__start gap__y16">
			{visible === 0 && (
				<>
					<Link
						to="/profile"
						className="user-menu__header flex__row__start gap__x8"
					>
						<img src={user?.picture} alt="profile picture" />
						<div className="flex__column__start gap__y20">
							<span>
								{user?.first_name} {user?.last_name}
							</span>
							<p>See your profile</p>
						</div>
					</Link>
					<div className="user-menu__splitter"></div>
					<div className="user-menu__items flex__column__start gap__y16">
						<div className="flex__row__start gap__x8">
							<div className="user-menu__icon-container">
								<img src={images.feedback} alt="give feedback" />
							</div>
							<span>Give Feedback</span>
						</div>
						<div className="flex__row__start gap__x8">
							<div className="user-menu__icon-container">
								<img src={images.seetings} alt="seetings" />
							</div>
							<span>Seetings</span>
						</div>
						<div className="flex__row__start gap__x8">
							<div className="user-menu__icon-container">
								<img src={images.support} alt="support" />
							</div>
							<span>Support</span>
						</div>
						<div className="flex__row__start gap__x8">
							<div className="user-menu__icon-container">
								<img src={images.logout} alt="logout" />
							</div>
							<span>Log out</span>
						</div>
					</div>
				</>
			)}
			{visible === 1 && <UserMenuSettings />}
		</div>
	);
}
