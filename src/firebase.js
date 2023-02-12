import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAxcSF85zXWha8cqk2Sjp2gjGDRjH0ezNo",
  authDomain: "unitea-chat.firebaseapp.com",
  projectId: "unitea-chat",
  storageBucket: "unitea-chat.appspot.com",
  messagingSenderId: "791458474085",
  appId: "1:791458474085:web:b124d122c047ec1944be8c"
  };  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export const storage = getStorage();