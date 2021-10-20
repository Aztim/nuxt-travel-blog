
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLdHK--LIaJzh6NZBtM7SPRLJrAq2I7HA",
  authDomain: "travel-blog-ffe19.firebaseapp.com",
  databaseURL: "https://travel-blog-ffe19-default-rtdb.firebaseio.com",
  projectId: "travel-blog-ffe19",
  storageBucket: "travel-blog-ffe19.appspot.com",
  messagingSenderId: "986674382778",
  appId: "1:986674382778:web:898cebaef5cab78b6d3f83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export {app, getStorage, ref, uploadBytesResumable, getDownloadURL }