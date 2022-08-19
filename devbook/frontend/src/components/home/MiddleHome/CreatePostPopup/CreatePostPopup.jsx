import React, { useRef, useState } from "react";
import homeImages from "../../../../constants/homeImages";
import "./CreatePostPopup.scss";
import Picker from "emoji-picker-react";
import ImagePreview from "./ImagePreview";
import TextArea from "./TextArea";

export default function CreatePostPopup({ user }) {
	const [text, setText] = useState("");
	const [showImgPrev, setShowImgPrev] = useState(false);
	const [picker, setPicker] = useState(false);
	const textRef = useRef(null);
	const handleEmoji = (e, { emoji }) => {
		const ref = textRef.current;
		ref.focus();
		const start = text.substring(0, ref.selectionStart);
		const end = text.substring(ref.selectionStart);
		const newText = start + emoji + end;
		setText(newText);
	};
	return (
		<div className="create-post white-blur flex__column__center">
			<div className="create-post__container flex__column gap__y16">
				<div className="create-post__header">
					<h2>Create Post</h2>
					<img src={homeImages.close_icon} alt="close" />
				</div>
				<div className="create-post__splitter"></div>
				<div className="create-post__profile flex__row__start gap__x8">
					<img src={user.picture} alt="picture" />
					<span>
						{user.first_name} {user.last_name}
					</span>
				</div>
				{!showImgPrev ? (
					<TextArea
						text={text}
						setText={setText}
						textRef={textRef}
						user={user}
					/>
				) : (
					<>
						<TextArea
							text={text}
							setText={setText}
							textRef={textRef}
							user={user}
						/>
						<ImagePreview />
					</>
				)}
				<div className="create-post__footer  gap__x16">
					<span>Add to your post</span>
					<div className="create-post__footer__icons flex__row__center gap__x8">
						<img
							src={homeImages.emoji_icon}
							alt="emojis"
							onClick={() => {
								setPicker((prev) => !prev);
							}}
						/>
						<img
							src={homeImages.photo_video}
							alt="add media"
							onClick={() => {
								setShowImgPrev((prev) => !prev);
							}}
						/>
						<img src={homeImages.live_coding} alt="live coding" />
						<img src={homeImages.pin_icon} alt="local pin" />
						<img src={homeImages.professional} alt="professional_achievment" />
					</div>
				</div>
				{picker && (
					<div className="create-post__emojis">
						<div className="emoji-picker">
							<Picker onEmojiClick={handleEmoji} />
						</div>
					</div>
				)}
				<button className="button-purple">SUBMIT</button>
			</div>
		</div>
	);
}
