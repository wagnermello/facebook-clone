import React, { useRef } from "react";
import homeImages from "../../../../constants/homeImages";

export default function ImagePreview({ images, setImages, setShowImgPrev }) {
	const imageInputRef = useRef(null);
	const handleImages = (e) => {
		let files = Array.from(e.target.files);
		files.forEach((img) => {
			const reader = new FileReader();
			reader.readAsDataURL(img);
			reader.onload = (readerEvent) => {
				setImages((images) => [...images, readerEvent.target.result]);
			};
		});
		console.log(files);
	};
	return (
		<div className="flex__column__center">
			<div className="image-preview__container">
				<input
					type="file"
					multiple
					hidden
					ref={imageInputRef}
					onChange={handleImages}
				/>
				{images && images.length ? (
					<div className="image-preview__images">
						{images.map((img, i) => (
							<img src={img} key={images[i]}></img>
						))}
					</div>
				) : (
					<div
						className="add-image flex__column__center gap__y4"
						onClick={() => {
							imageInputRef.current.click();
						}}
					>
						<img src={homeImages.add_image} alt="add" />
						<span>Add photos/videos</span>
						<h4>or drag and drop</h4>
					</div>
				)}
			</div>
		</div>
	);
}
