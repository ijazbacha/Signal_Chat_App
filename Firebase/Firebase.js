import {   initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, setDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB3xqO4x3KBXM2bEJFLes0CcJ-5SZKG6iU",
    authDomain: "signal-chat-app-66f47.firebaseapp.com",
    projectId: "signal-chat-app-66f47",
    storageBucket: "signal-chat-app-66f47.appspot.com",
    messagingSenderId: "133227142291",
    appId: "1:133227142291:web:bdc65c10dc8cf36aae8166"
  };

  let  app = initializeApp(firebaseConfig)
  
  const db = getFirestore();
  const auth = getAuth() 

  export { db, auth }