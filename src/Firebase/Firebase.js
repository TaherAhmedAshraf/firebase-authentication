import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAML5porjfk1QtDWDGh9i7l7sZu5dfsa8Y",
    authDomain: "authentication-app-7d1cb.firebaseapp.com",
    projectId: "authentication-app-7d1cb",
    storageBucket: "authentication-app-7d1cb.appspot.com",
    messagingSenderId: "684568302112",
    appId: "1:684568302112:web:cb6c87766e1ab479dfe245",
    measurementId: "G-H9GKLEYQGH"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase, useAuthState, useCollectionData };