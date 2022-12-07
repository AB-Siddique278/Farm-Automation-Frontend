
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  

  

  apiKey: "AIzaSyB4732wmyOJ6tAELZDD2lEtE5RddaywMG0",
  authDomain: "farm-automation-b88e3.firebaseapp.com",
  projectId: "farm-automation-b88e3",
  storageBucket: "farm-automation-b88e3.appspot.com",
  messagingSenderId: "877648993159",
  appId: "1:877648993159:web:b3015cffa0cfe108af9122"




};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;




// apiKey: process.env.REACT_APP_API_KEY ,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
//   projectId: process.env.REACT_APP_PROJECT_ID ,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID ,
//   appId: process.env.REACT_APP_APP_ID ,