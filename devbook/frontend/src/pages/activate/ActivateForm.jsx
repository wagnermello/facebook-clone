import PropagateLoader from "react-spinners/PropagateLoader";
import React from "react";
import homeImages from "../../constants/homeImages";

export default function ActivateForm({ type, header, text, loading }) {
	return (
		<div className="blur">
			<div className="activate__popup flex__column__center">
				<div
					className={`activate__popup__header ${
						type === "success"
					} ? 'activate__success-text': 'activate__error-text'`}
				>
					{type === "success" && (
						<img src={homeImages.activate} alt="activate success" />
					)}
					{type !== "success" && <img src={homeImages.failed} alt="failed" />}

					<p>{header}</p>
				</div>
				<div className="activate__popup__message">{text}</div>
				<div className="activate__spinner__container flex__column__center">
					<PropagateLoader
						loading={loading}
						className="activate__spinner"
						color="#ffffff"
					/>
				</div>
			</div>
		</div>
	);
}
