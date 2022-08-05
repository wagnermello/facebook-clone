import React from "react";
import homeImages from "../../../constants/homeImages";

export default function LeftHomeMenu({ user }) {
	return (
		<>
			<div className="home__left-container__profile flex__row__start gap__x8">
				<img src={user?.picture} alt="profile" />
				<span>
					{user?.first_name} {user?.last_name}
				</span>
			</div>
			<div className=" flex__column__start gap__y16">
				{/*Left Menu*/}
				<div className="home__left-container__item gap__x8">
					<div className="left__icon__container">
						<img src={homeImages.friends} alt="friends" />
					</div>
					<span>Friends</span>
				</div>
				<div className="home__left-container__item gap__x8">
					<div className="left__icon__container">
						<img src={homeImages.memories} alt="memories" />
					</div>
					<span>Memories</span>
				</div>
				<div className="home__left-container__item gap__x8">
					<div className="left__icon__container">
						<img src={homeImages.groups} alt="groups" />
					</div>
					<span>Groups</span>
				</div>
				<div className="home__left-container__item gap__x8">
					<div className="left__icon__container">
						<img src={homeImages.market} alt="market" />
					</div>
					<span>Market</span>
				</div>
				<div className="home__left-container__item gap__x8">
					<div className="left__icon__container">
						<img src={homeImages.watch} alt="watch" />
					</div>
					<span>Watch</span>
				</div>
				<div className="home__left-container__item gap__x8">
					<div className="left__icon__container">
						<img src={homeImages.saved} alt="saved" />
					</div>
					<span>Saved</span>
				</div>
				<div className="home__left-container__item gap__x8">
					<div className="left__icon__container">
						<img src={homeImages.pages} alt="pages" />
					</div>
					<span>Pages</span>
				</div>
				<div className="home__left-container__item gap__x8">
					<div className="left__icon__container">
						<img src={homeImages.events} alt="events" />
					</div>
					<span>Events</span>
				</div>
			</div>
		</>
	);
}
