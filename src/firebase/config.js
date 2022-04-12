import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE4ZnTEYrpnnGsFVjXbQFb-LpouCnpnNo",
  authDomain: "app-boyerosport.firebaseapp.com",
  projectId: "app-boyerosport",
  storageBucket: "app-boyerosport.appspot.com",
  messagingSenderId: "976250674712",
  appId: "1:976250674712:web:b037b0f92250ccf3e92d6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);