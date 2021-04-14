import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
	apiKey: "AIzaSyBNrAWjhOA55xpsEL4QwZsaYKeWdMjp-mY",
	authDomain: "firegram-9dc99.firebaseapp.com",
	projectId: "firegram-9dc99",
	storageBucket: "firegram-9dc99.appspot.com",
	messagingSenderId: "839019329071",
	appId: "1:839019329071:web:237dc70701b42bec3ff8da",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projStorage = firebase.storage();
export const projFirestore = firebase.firestore();
