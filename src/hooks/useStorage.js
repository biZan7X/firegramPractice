import React, { useEffect, useState } from "react";
import { projStorage } from "../firebase/config";

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState("");

	//* useEffect so that the hook re-renders for every change in selected file
	useEffect(() => {
		const storageRef = projStorage.ref(file.name);

		//* uploading to firestorage
		//& on() -> event listener since put() is ajax in nature
		storageRef.put(file).on(
			"state_change",
			(snap) => {
				let percentage = (snap.bytesTransferred / snap.tottalBytes) * 100;
				setProgress(percentage);
			},
			(err) => setError(err),
			async () => {
				const urlTemp = await storageRef.getDownloadURL();
				setUrl(urlTemp);
			}
		);
	}, [file]);

	return { progress, error, url };
};
