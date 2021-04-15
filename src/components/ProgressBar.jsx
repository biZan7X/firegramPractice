import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
	const { progress, url } = useStorage(file);

	//& setting the selected file as null , as soon as the upload is complete
	useEffect(() => {
		if (url) setFile(null);
	}, [url, setFile]);

	return (
		<div className="progress-bar" style={{ width: progress + "%" }}></div>
	);
};

export default ProgressBar;
