import React from "react";

const Modal = ({ selectedImage, setSelectedImage }) => {
	const onClickHandler = (e) => {
		//* closing the modal , if clicked anywhere except the image
		if (e.target.classList.contains("modal")) setSelectedImage(null);
	};

	return (
		<div onClick={onClickHandler} className="modal">
			<img src={selectedImage} alt="larger image" />
		</div>
	);
};

export default Modal;
