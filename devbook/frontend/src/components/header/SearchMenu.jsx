import React, { useRef } from "react";
import images from "../../constants/images";
import "./Header.scss";
import useClickOutside from "../../helpers/clickOutside";

export default function SearchMenu({ setShowSearchMenu }) {
	const menu = useRef(null);
	const input = useRef(null);

	useClickOutside(menu, () => {
		setShowSearchMenu(false);
	});
	return (
		<div className="header__left search__area scroll_bar" ref={menu}>
			<div className="flex__row__center gap__x16">
				<img
					src={images.header_arrow_left}
					alt="back"
					onClick={() => {
						setShowSearchMenu(false);
					}}
				/>
				<div
					className="header__search-container flex__row__center"
					onClick={() => {
						input.current.focus();
					}}
				>
					<input type="text" placeholder="Search on Devbook" ref={input} />

					<img
						src={images.header_search_icon}
						alt=""
						className="cursor-default"
					/>
				</div>
			</div>
			<div className="search__history-header">
				<span>Recent searches</span>
				<a>Edit</a>
			</div>
			<div className="search__history"></div>
			<div className="search__results scrollbar"></div>
		</div>
	);
}
