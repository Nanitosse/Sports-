import React from 'react';
import { View,  StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import vid from '../assets/videos/videoplayback1.mp4';



const NutriScreen = () => {

    return (
        <View style={styles.container}>
            <Video
                source={vid}
                isLooping
                resizeMode="cover"
                useNativeControls
                style={styles.video}
            />
          
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    video: {
      width: 355,
      height: 600,
    },
  });
  


export default NutriScreen;