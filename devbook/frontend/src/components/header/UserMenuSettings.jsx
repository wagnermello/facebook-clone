import React from "react";
import headerImages from "../../constants/headerImages";

export default function UserMenuSettings({ setVisible }) {
	return (
		<>
			<div className="user-menu__settings flex__row__start gap__x8">
				<img
					src={headerImages.arrow_back}
					alt="back"
					onClick={() => {
						setVisible(0);
					}}
				/>
				<span>Settings</span>
			</div>
			<div className="user-menu__splitter"></div>
			<div className="user-menu__items flex__column__start gap__y16">
				<div className="flex__row__start gap__x8">
					<div className="user-menu__icon-container">
						<img src={headerImages.privacy} alt="privacy checkup" />
					</div>
					<span>Privacy Checkup</span>
				</div>
				<div className="flex__row__start gap__x8">
					<div className="user-menu__icon-container">
						<img src={headerImages.activity} alt="activity log" />
					</div>
					<span>Activity Log</span>
				</div>
				<div className="flex__row__start gap__x8">
					<div className="user-menu__icon-container">
						<img src={headerImages.feed_user_menu} alt="feed preferences" />
					</div>
					<span>Feed Preferences</span>
				</div>
				<div className="flex__row__start gap__x8">
					<div className="user-menu__icon-container">
						<img src={headerImages.language} alt="language" />
					</div>
					<span>Language</span>
				</div>
			</div>
		</>
	);
}
