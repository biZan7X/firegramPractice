import React, { useState } from "react";
//& components
import UploadForm from "./components/UploadForm";
import Title from "./components/Title.jsx";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import DarkMode from "./components/DarkMode";

function App() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [darKMode, setDarkMode] = useState(false);
	return (
		<div className="App">
			{darKMode ? <DarkMode /> : null}
			<Title />
			<UploadForm />
			<ImageGrid setSelectedImage={setSelectedImage} />
			{selectedImage && (
				<Modal
					selectedImage={selectedImage}
					setSelectedImage={setSelectedImage}
				/>
			)}

			<div className="button-container">
				<button
					className="dark-mode"
					onClick={() => setDarkMode(!darKMode)}
				>
					{darKMode ? "Light Mode" : "Dark Mode"}
				</button>
			</div>
		</div>
	);
}

export default App;
