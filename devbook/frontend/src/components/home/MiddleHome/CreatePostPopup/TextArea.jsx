import React from "react";

export default function TextArea({ text, textRef, user, setText }) {
	return (
		<div className="create-post__text-area">
			<textarea
				ref={textRef}
				maxLength="100"
				value={text}
				placeholder={`What's on your mind, ${user.first_name}?`}
				onChange={(e) => setText(e.target.value)}
			></textarea>
		</div>
	);
}
