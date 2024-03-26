
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {app,storage,db} from './config'
import 'firebase/storage';
import firebase from  'firebase/app';
import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from './config'; 








export default function App() {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {

     const func=async()=>{
        const storage= getStorage;
        const reference= ref(storage,'/soccer.png')
        await getDownloadURL(reference).then((x)=>{
           setImageUrl(x)
        })

     }

     func()

    },[])  


  return (
    <ImageBackground
      source={imageUrl ? { uri: imageUrl } : require('./assets/images/soccer.png')}
      style={{
        flex: 1,
        // resizeMode:'cover',
        justifyContent: 'center',

      }}

    >

    </ImageBackground>







  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    backgroundColor: 'black',
    textAlign: 'center',
    alignItems: "center"

  },


});



