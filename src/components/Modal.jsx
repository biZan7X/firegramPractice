import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
	const onClickHandler = (e) => {
		//* closing the modal , if clicked anywhere except the image
		if (e.target.classList.contains("modal")) setSelectedImage(null);
	};

	return (
		<motion.div
			onClick={onClickHandler}
			className="modal"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<motion.img
				src={selectedImage}
				alt="larger image"
				initial={{ y: "-100%" }}
				animate={{ y: 0 }}
			/>
		</motion.div>
	);
};

export default Modal;
