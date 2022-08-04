import "./Header.scss";

import { Link } from "react-router-dom";
import images from "../../constants/images";
import { useSelector } from "react-redux";
import SearchMenu from "./SearchMenu";
import { useRef, useState } from "react";
import Menu from "./Menu";
import useClickOutside from "../../helpers/clickOutside";
import UserMenu from "./UserMenu";

export default function Header() {
	const { user } = useSelector((user) => ({
		...user,
	}));
	const [showSearchMenu, setShowSearchMenu] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const [showUserMenu, setShowUserMenu] = useState(false);
	const menu = useRef(null);
	const userMenu = useRef(null);
	useClickOutside(menu, () => {
		setShowMenu(false);
	});
	useClickOutside(userMenu, () => {
		setShowUserMenu(false);
	});

	return (
		<header className="header">
			{/*-----HEADER-LEFT-----*/}
			<div className="header__left flex__row__start gap__x16">
				<Link to="/" className="header__logo">
					<img src={images.header_logo} alt="devbook logo" />
				</Link>
				<div
					className="header__search-container flex__row__center"
					onClick={() => {
						setShowSearchMenu(true);
					}}
				>
					<input
						type="text"
						placeholder="Search on Devbook"
						className="hide-input"
					/>
					<img src={images.header_search_icon} alt="" />
				</div>
			</div>
			{showSearchMenu && <SearchMenu setShowSearchMenu={setShowSearchMenu} />}

			{/*-----HEADER-MIDDLE-----*/}
			<div className="header__middle flex__row__center">
				<Link to="/" className="header__home flex__column__center">
					<img src={images.header_home_icon} alt="home" />
				</Link>
				<Link to="/" className="header__friends flex__column__center">
					<img src={images.header_friends_icon} alt="friends" />
					<div className="notification-2digits">9+</div>
				</Link>
				<Link to="/" className="header__videos flex__column__center">
					<img src={images.header_videos_icon} alt="videos" />
				</Link>
				<Link to="/" className="header__groups flex__column__center">
					<img src={images.header_groups_icon} alt="groups" />
				</Link>
			</div>
			{/*-----HEADER-RIGHT-----*/}
			<div className="header__right flex__row gap__x16">
				<Link to="/" className="header__menu flex__column__center">
					<img
						src={images.header_menu_icon}
						alt="menu"
						ref={menu}
						onClick={() => {
							setShowMenu((prev) => !prev);
						}}
					/>
					{showMenu && <Menu />}
				</Link>
				<Link to="/" className="header__chat flex__column__center">
					<img src={images.header_chat_icon} alt="chat" />
				</Link>
				<Link to="/" className="header__notifications flex__column__center">
					<img src={images.header_notifications_icon} alt="notifications" />
					<div className="notification-1digit">7</div>
				</Link>
				<Link to="/" className="header__profile flex__row__center gap__x8">
					<img
						src={user?.picture}
						alt="profile"
						ref={userMenu}
						onClick={() => {
							setShowUserMenu((prev) => !prev);
						}}
					/>
					<span>{user?.first_name}</span>
				</Link>
				{showUserMenu && <UserMenu user={user} />}
			</div>
		</header>
	);
}
