import React, { useState } from "react";
//& components
import UploadForm from "./components/UploadForm";
import Title from "./components/Title.jsx";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

function App() {
	const [selectedImage, setSelectedImage] = useState(null);
	return (
		<div className="App">
			<Title />
			<UploadForm />
			<ImageGrid setSelectedImage={setSelectedImage} />
			{selectedImage && (
				<Modal
					selectedImage={selectedImage}
					setSelectedImage={setSelectedImage}
				/>
			)}
		</div>
	);
}

export default App;
