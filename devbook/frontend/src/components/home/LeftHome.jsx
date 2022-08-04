import React from "react";
import homeImages from "../../constants/homeImages";
import "./LeftHome.scss";

export default function LeftHome({ user }) {
	return (
		<div className="home__left-container flex__column__start gap__y32">
			<div className="home__left-container__profile flex__row__start gap__x8">
				<img src={user?.picture} alt="profile picture" />
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
				<div className="home__left-container__item gap__x8">
					<div className="left__icon__container">
						<img src={homeImages.see_more} alt="see more" />
					</div>
					<span>See more</span>
				</div>
			</div>

			<div className="home__left-container__splitter"></div>

			{/*Shortcuts*/}
			<div className="home__left-container__shortcuts flex__column__start gap__y16">
				<h3>Your shortcuts</h3>
				<div className="home__left-container__item gap__x8">
					<div className="left__icon__container">
						<img src={homeImages.my_page} alt="my devbook page" />
					</div>
					<span>My Devbook Page</span>
				</div>
				<div className="home__left-container__item gap__x8">
					<div className="left__icon__container">
						<img src={homeImages.my_instagram} alt="my instagram page" />
					</div>
					<span>My Instagram Page</span>
				</div>
			</div>
		</div>
	);
}
