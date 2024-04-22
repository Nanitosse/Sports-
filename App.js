
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { app, storage, db } from './config'
import 'firebase/storage';
import firebase from 'firebase/app';
import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import image from './assets/images/soccer.png';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Main from './screens/MainComponent';


export default function App() {


  return (

    <ImageBackground
      source={image}
      style={{
        flex: 1,
        // resizeMode:'cover',
        justifyContent: 'center',

      }}

    >
      <NavigationContainer theme={MyTheme}  >
        <Main />
      </NavigationContainer>

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

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'transparent',
  },
};