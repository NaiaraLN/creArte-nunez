
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvR8cjQOeRBoCgSIBUbsLxJSNNj5aPNlU",
    authDomain: "crearte-20d88.firebaseapp.com",
    projectId: "crearte-20d88",
    storageBucket: "crearte-20d88.appspot.com",
    messagingSenderId: "470103925590",
    appId: "1:470103925590:web:6ccae14865c751bc49acf7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
