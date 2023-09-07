// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_API_KEY,
  // authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  // projectId:process.env.REACT_APP_PROJECTID,
  // storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
  // appId:process.env.REACT_APP_APPID
   apiKey: "AIzaSyDRzhLFIylMSrxQ_5TFdJDoVN0UTlYUbfY",
  authDomain: "logica-f4803.firebaseapp.com",
  projectId: "logica-f4803",
  storageBucket: "logica-f4803.appspot.com",
  messagingSenderId: "290154333675",
  appId: "1:290154333675:web:616d88e4dc40c6c77185ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;