import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACF_Zsin07pH1a7g3IMib5ld8pHoBOg50",
  authDomain: "coffee-expresso-aceb7.firebaseapp.com",
  projectId: "coffee-expresso-aceb7",
  storageBucket: "coffee-expresso-aceb7.appspot.com",
  messagingSenderId: "698968642079",
  appId: "1:698968642079:web:03016df6a6c8dc86187b2a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;
