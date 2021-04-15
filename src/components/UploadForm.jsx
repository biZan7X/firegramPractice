import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const fileTypes = ["image/jpeg", "image/png"];

	const onChangeHandler = (e) => {
		const fileTemp = e.target.files[0];

		if (fileTemp && fileTypes.includes(fileTemp.type)) {
			setFile(fileTemp);
			setError("");
		} else {
			setFile(null);
			setError("Please select an image file (png or jpg)");
		}
	};

	return (
		<form>
			<label>
				<input type="file" onChange={onChangeHandler} />
				<span>+</span>
			</label>
			<div className="output">
				{error && <div className="error">{error}</div>}
				{file && <div>{file.name}</div>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	);
};

export default UploadForm;
