import { useEffect, useState } from "react";
import { projFirestore } from "../firebase/config";

const useFirestore = (collection) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		//* unsub() is a function returned by RHS for stoping the live fetch
		const unsub = projFirestore
			.collection(collection)
			.orderBy("createdAt", "desc")
			.onSnapshot((snap) => {
				const documents = snap.docs.map((doc) => {
					return {
						url: doc.data().url,
						createdAt: doc.data().createdAt,
						id: doc.id,
					};
				});
				console.log("step 1");
				setDocs(documents);
			});

		//* clean-up code
		return () => {
			unsub();
		};
	}, [collection]);

	return { docs };
};

export default useFirestore;
