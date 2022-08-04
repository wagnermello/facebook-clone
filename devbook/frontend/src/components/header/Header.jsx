import "./Header.scss";

import { Link } from "react-router-dom";
import headerImages from "../../constants/headerImages";
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
					<img src={headerImages.header_logo} alt="devbook logo" />
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
					<img src={headerImages.header_search_icon} alt="" />
				</div>
			</div>
			{showSearchMenu && <SearchMenu setShowSearchMenu={setShowSearchMenu} />}

			{/*-----HEADER-MIDDLE-----*/}
			<div className="header__middle flex__row__center">
				<div className="header__home flex__column__center">
					<img src={headerImages.header_home_icon} alt="home" />
				</div>
				<div className="header__friends flex__column__center">
					<img src={headerImages.header_friends_icon} alt="friends" />
					<div className="notification-2digits">9+</div>
				</div>
				<div className="header__videos flex__column__center">
					<img src={headerImages.header_videos_icon} alt="videos" />
				</div>
				<div className="header__groups flex__column__center">
					<img src={headerImages.header_groups_icon} alt="groups" />
				</div>
			</div>
			{/*-----HEADER-RIGHT-----*/}
			<div className="header__right flex__row gap__x16">
				<div className="header__menu flex__column__center" ref={menu}>
					<div
						className="flex__column__center"
						onClick={() => {
							setShowMenu((prev) => !prev);
						}}
					>
						<img src={headerImages.header_menu_icon} alt="menu" />
					</div>

					{showMenu && <Menu />}
				</div>
				<div className="header__chat flex__column__center">
					<img src={headerImages.header_chat_icon} alt="chat" />
				</div>
				<div className="header__notifications flex__column__center">
					<img
						src={headerImages.header_notifications_icon}
						alt="notifications"
					/>
					<div className="notification-1digit">7</div>
				</div>
				<div className="flex__row__center " ref={userMenu}>
					<div
						className="flex__row__center header__profile gap__x8"
						onClick={() => {
							setShowUserMenu((prev) => !prev);
						}}
					>
						<img
							className="header__profile-icon"
							src={user?.picture}
							alt="profile"
						/>
						<span>{user?.first_name}</span>
					</div>
					{showUserMenu && <UserMenu user={user} />}
				</div>
			</div>
		</header>
	);
}
