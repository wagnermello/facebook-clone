import React from "react";
import headerImages from "../../constants/headerImages";

export default function UserMenuSupport({ setVisible }) {
	return (
		<>
			<div className="user-menu__support flex__row__start gap__x8">
				<img
					src={headerImages.arrow_back}
					alt="back"
					onClick={() => {
						setVisible(0);
					}}
				/>
				<span>Support</span>
			</div>
			<div className="user-menu__splitter"></div>
			<div className="user-menu__items flex__column__start gap__y16">
				<div className="flex__row__start gap__x8">
					<div className="user-menu__icon-container">
						<img src={headerImages.help} alt="help checkup" />
					</div>
					<span>Help Center</span>
				</div>
				<div className="flex__row__start gap__x8">
					<div className="user-menu__icon-container">
						<img src={headerImages.support} alt="support inbox" />
					</div>
					<span>Support Inbox</span>
				</div>
				<div className="flex__row__start gap__x8">
					<div className="user-menu__icon-container">
						<img src={headerImages.report} alt="report a problem" />
					</div>
					<span>Report a Problem</span>
				</div>
			</div>
		</>
	);
}
