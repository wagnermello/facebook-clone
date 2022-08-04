import React from "react";
import images from "../../constants/images";

import "./Menu.scss";

export default function Menu() {
	return (
		<div className="menu-dropdown flex__column__start scrollbar">
			<h1>Menu</h1>
			<div className="menu-dropdown__search-container flex__row">
				<input type="text" placeholder="Search on Menu" />
				<img src={images.header_search_icon} alt="" />
			</div>
			<div className="menu-dropdown__container flex__column__start gap__y16">
				<div className="menu-dropdown__splitter"></div>

				<div className="menu-dropdown__item-container flex__column__start gap__y16">
					{/*-----SOCIAL-----*/}
					<h3>Social</h3>
					<div className="menu-dropdown__item flex__column__start gap__y16">
						{/*campus*/}
						<div className="flex__row__start gap__x8">
							<img src={images.campus} alt="campus" />
							<div className="menu-dropdown__column flex__column__start gap__y4">
								<h4>Campus</h4>
								<span>Exclusive space for students.</span>
							</div>
						</div>
						{/*events*/}
						<div className="flex__row__start gap__x8">
							<img src={images.events} alt="events" />
							<div className="menu-dropdown__column flex__column__start gap__y4">
								<h4>Events</h4>
								<span>Organize or find events.</span>
							</div>
						</div>
						{/*friends*/}
						<div className="flex__row__start gap__x8">
							<img src={images.friends} alt="friends" />
							<div className="menu-dropdown__column flex__column__start gap__y4">
								<h4>Find Friends</h4>
								<span>Search for friends.</span>
							</div>
						</div>
						{/*groups*/}
						<div className="flex__row__start gap__x8">
							<img src={images.groups} alt="groups" />
							<div className="menu-dropdown__column flex__column__start gap__y4">
								<h4>Groups</h4>
								<span>Create or search for groups.</span>
							</div>
						</div>
						{/*feed*/}
						<div className="flex__row__start gap__x8">
							<img src={images.feed} alt="feed" />
							<div className="menu-dropdown__column flex__column__start gap__y4">
								<h4>Feed</h4>
								<span>See relevant posts.</span>
							</div>
						</div>
						{/*favorites*/}
						<div className="flex__row__start gap__x8">
							<img src={images.fav} alt="fav" />
							<div className="menu-dropdown__column flex__column__start gap__y4">
								<h4>favorites</h4>
								<span>View favorite posts.</span>
							</div>
						</div>
						{/*recent*/}
						<div className="flex__row__start gap__x8">
							<img src={images.recent} alt="recent" />
							<div className="menu-dropdown__column flex__column__start gap__y4">
								<h4>Most Recent</h4>
								<span>See the most recent posts.</span>
							</div>
						</div>
						{/*pages*/}
						<div className="flex__row__start gap__x8">
							<img src={images.pages} alt="pages" />
							<div className="menu-dropdown__column flex__column__start gap__y4">
								<h4>Pages</h4>
								<span>Discover pages on Devbook.</span>
							</div>
						</div>
					</div>
					<div className="menu-dropdown__splitter"></div>

					{/*-----ENTERTAINMENT-----*/}
					<h3>Entertainment</h3>
					<div className="menu-dropdown__item flex__column__start gap__y16">
						{/*gaming*/}
						<div className="flex__row__start gap__x8">
							<img src={images.gaming} alt="gaming" />
							<div className="menu-dropdown__column flex__column__start gap__y4">
								<h4>Gaming</h4>
								<span>Watch gaming streams.</span>
							</div>
						</div>
						{/*play*/}
						<div className="flex__row__start gap__x8">
							<img src={images.play} alt="play" />
							<div className="menu-dropdown__column flex__column__start gap__y4">
								<h4>Play</h4>
								<span>Play games on Devbook.</span>
							</div>
						</div>
						{/*watch*/}
						<div className="flex__row__start gap__x8">
							<img src={images.watch} alt="watch" />
							<div className="menu-dropdown__column flex__column__start gap__y4">
								<h4>Watch</h4>
								<span>Watch videos on Devbook.</span>
							</div>
						</div>
						{/*live*/}
						<div className="flex__row__start gap__x8">
							<img src={images.live} alt="live" />
							<div className="menu-dropdown__column flex__column__start gap__y4">
								<h4>Live</h4>
								<span>Watch popular live videos.</span>
							</div>
						</div>
						<div className="menu-dropdown__splitter"></div>

						{/*-----SHOPPING-----*/}
						<h3>Shopping</h3>
						<div className="menu-dropdown__item flex__column__start gap__y16">
							{/*pay*/}
							<div className="flex__row__start gap__x8">
								<img src={images.pay} alt="pay" />
								<div className="menu-dropdown__column flex__column__start gap__y4">
									<h4>Pay</h4>
									<span>Devbook secure pay system.</span>
								</div>
							</div>
							{/*marketplace*/}
							<div className="flex__row__start gap__x8">
								<img src={images.marketplace} alt="marketplace" />
								<div className="menu-dropdown__column flex__column__start gap__y4">
									<h4>Marketplace</h4>
									<span>Buy and sell on Devbook.</span>
								</div>
							</div>
							<div className="menu-dropdown__splitter"></div>

							{/*-----PERSONAL-----*/}
							<h3>Personal</h3>
							<div className="menu-dropdown__item flex__column__start gap__y16">
								{/*recentad*/}
								<div className="flex__row__start gap__x8">
									<img src={images.recentad} alt="recentad" />
									<div className="menu-dropdown__column flex__column__start gap__y4">
										<h4>Recent Ad activity</h4>
										<span>See all the ads you interacted.</span>
									</div>
								</div>
								{/*memories*/}
								<div className="flex__row__start gap__x8">
									<img src={images.memories} alt="memories" />
									<div className="menu-dropdown__column flex__column__start gap__y4">
										<h4>Memories</h4>
										<span>Browde your old posts.</span>
									</div>
								</div>
								{/*saved*/}
								<div className="flex__row__start gap__x8">
									<img src={images.saved} alt="saved" />
									<div className="menu-dropdown__column flex__column__start gap__y4">
										<h4>Saved</h4>
										<span>Find posts that you saved.</span>
									</div>
								</div>
							</div>
							<div className="menu-dropdown__splitter"></div>

							{/*-----PROFESSIONAL-----*/}
							<h3>Professional</h3>
							<div className="menu-dropdown__item flex__column__start gap__y16">
								{/*ads*/}
								<div className="flex__row__start gap__x8">
									<img src={images.ads} alt="ads" />
									<div className="menu-dropdown__column flex__column__start gap__y4">
										<h4>Ads Manager</h4>
										<span>Create or manage your ads.</span>
									</div>
								</div>
							</div>
							<div className="menu-dropdown__splitter"></div>

							{/*-----Community-----*/}
							<h3>Community</h3>
							<div className="menu-dropdown__item flex__column__start gap__y16">
								{/*climate*/}
								<div className="flex__row__start gap__x8">
									<img src={images.climate} alt="climate" />
									<div className="menu-dropdown__column flex__column__start gap__y4">
										<h4>Climate Science</h4>
										<span>Learn about climate change.</span>
									</div>
								</div>
								{/*covid*/}
								<div className="flex__row__start gap__x8">
									<img src={images.covid} alt="covid" />
									<div className="menu-dropdown__column flex__column__start gap__y4">
										<h4>COVID-19</h4>
										<span>See COVID-19 informations.</span>
									</div>
								</div>
								{/*community*/}
								<div className="flex__row__start gap__x8">
									<img src={images.community} alt="community" />
									<div className="menu-dropdown__column flex__column__start gap__y4">
										<h4>Community Help</h4>
										<span>Get involved in your community.</span>
									</div>
								</div>
								{/*emotional*/}
								<div className="flex__row__start gap__x8">
									<img src={images.emotional} alt="emotional" />
									<div className="menu-dropdown__column flex__column__start gap__y4">
										<h4>Emotional Health</h4>
										<span>Emotional health informations.</span>
									</div>
								</div>
								{/*fund*/}
								<div className="flex__row__start gap__x8">
									<img src={images.fund} alt="fund" />
									<div className="menu-dropdown__column flex__column__start gap__y4">
										<h4>Fundraisers</h4>
										<span>Donate and raise money.</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
