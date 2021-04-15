import React from "react";
//& components
import UploadForm from "./components/UploadForm";
import Title from "./components/Title.jsx";
import ImageGrid from "./components/ImageGrid";

function App() {
	return (
		<div className="App">
			<Title />
			<UploadForm />
			<ImageGrid />
		</div>
	);
}

export default App;
