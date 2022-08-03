import { Link } from "react-router-dom";
import images from "../../constants/images";

import "./Header.scss";

export default function Header() {
	return (
		<header className="header">
			{/*-----HEADER-LEFT-----*/}
			<div className="header__left flex__row__start gap__x16">
				<Link to="/" className="header__logo">
					<img src={images.header_logo} alt="devbook logo" />
				</Link>
				<div className="header__search-container flex__row__center">
					<input
						type="text"
						placeholder="Search on Devbook"
						className="hide-input"
					/>
					<img src={images.header_search_icon} alt="" />
				</div>
			</div>
			{/*-----HEADER-MIDDLE-----*/}
			<div className="header__middle flex__row__center">
				<div className="header__home flex__column__center">
					<img src={images.header_home_icon} alt="home" />
				</div>
				<div className="header__friends flex__column__center">
					<img src={images.header_friends_icon} alt="friends" />
					<div className="notification">9+</div>
				</div>
				<div className="header__videos flex__column__center">
					<img src={images.header_videos_icon} alt="videos" />
				</div>
				<div className="header__groups flex__column__center">
					<img src={images.header_groups_icon} alt="groups" />
				</div>
			</div>
			{/*-----HEADER-RIGHT-----*/}
			<div className="header__right flex__row gap__x16">
				<div className="header__menu flex__column__center">
					<img src={images.header_menu_icon} alt="menu" />
				</div>
				<div className="header__chat flex__column__center">
					<img src={images.header_chat_icon} alt="chat" />
				</div>
				<div className="header__notifications flex__column__center">
					<img src={images.header_notifications_icon} alt="notifications" />
				</div>
				<div className="header__profile flex__column__center">
					<img src={images.header_profile_icon} alt="profile" />
				</div>
			</div>
		</header>
	);
}
