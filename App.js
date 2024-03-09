
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StatusBar } from 'react-native';
// import React, { useState, useEffect } from 'react';
// 
 start 


export default function App() {

  //  const [imageUrl, setImageUrl]=useState(null);
  //  useEffect(() => {
  //   const fetchImage = async () => {
  //     const storageRef = firebase.storage().ref();
  //     const imageRef = storageRef.child('gs://sporty-6fdac.appspot.com/images/calisthenics/soccer.png'); // Replace with your actual path

  //     try {
  //       const url = await imageRef.getDownloadURL();
  //       setImageUrl(url);
  //     } catch (error) {
  //       console.error('Error fetching image:', error);
  //     }
  //   };

  //   fetchImage();
  // }, []);

  return (
    <ImageBackground
      source={require('./assets/images/gym.jpg')}
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

// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'rgb(255, 45, 85)',
//     background: 'transparent',
//   },
// };
