import "./UserMenu.scss";
import { Link, useNavigate } from "react-router-dom";
import headerImages from "../../constants/headerImages";
import React, { useState } from "react";
import UserMenuSettings from "./UserMenuSettings";
import UserMenuSupport from "./UserMenuSupport";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

export default function UserMenu({ user }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [visible, setVisible] = useState(0);
	const logout = () => {
		Cookies.set("user", "");
		dispatch({
			type: "LOGOUT",
		});
		navigate("/login");
	};

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
								<img src={headerImages.feedback} alt="give feedback" />
							</div>
							<span>Give Feedback</span>
						</div>
						<div
							className="flex__row__start gap__x8"
							onClick={() => {
								setVisible(1);
							}}
						>
							<div className="user-menu__icon-container">
								<img src={headerImages.seetings} alt="seetings" />
							</div>
							<span>Seetings</span>
						</div>
						<div
							className="flex__row__start gap__x8"
							onClick={() => {
								setVisible(2);
							}}
						>
							<div className="user-menu__icon-container ">
								<img src={headerImages.support} alt="support" />
							</div>
							<span>Support</span>
						</div>
						<div
							className="flex__row__start gap__x8"
							onClick={() => {
								logout();
							}}
						>
							<div className="user-menu__icon-container">
								<img src={headerImages.logout} alt="logout" />
							</div>
							<span>Log out</span>
						</div>
					</div>
				</>
			)}
			{visible === 1 && <UserMenuSettings setVisible={setVisible} />}
			{visible === 2 && <UserMenuSupport setVisible={setVisible} />}
		</div>
	);
}
