import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
	apiKey: "AIzaSyAJ4SKv65YQxVQ5rKeuzZ2F2FD6uSUBjD4",
	authDomain: "react-todoist-clone.firebaseapp.com",
	databaseURL: "https://react-todoist-clone.firebaseio.com",
	projectId: "react-todoist-clone",
	storageBucket: "react-todoist-clone.appspot.com",
	messagingSenderId: "1039864415736",
	appId: "1:1039864415736:web:a771c2546a5c0d39"
});

export { firebaseConfig as firebase };