// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage, ref, uploadBytes } from "firebase/storage";
const { initializeApp }=require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const {getStorage, ref, uploadBytes} =require('firebase/storage');
const  { readFileSync }=require("fs")



const firebaseConfig = {
    apiKey: "AIzaSyBOJiVXsQA3-nqgFToxXL65EvPBfLrV20g",
    authDomain: "sporty-6fdac.firebaseapp.com",
    projectId: "sporty-6fdac",
    storageBucket: "sporty-6fdac.appspot.com",
    messagingSenderId: "199287062968",
    appId: "1:199287062968:web:42489e762dfa93975e4f4d",
    measurementId: "G-XQV48Q7LBF"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
module.exports = { app, db, storage };

