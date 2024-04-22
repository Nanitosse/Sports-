import React from 'react';
import { View,  StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import video from '../assets/videos/videoplayback.mp4';



const CalisScreen = () => {
    

    return (
        <View style={styles.container}>
            <Video
                source={video}
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
  


export default CalisScreen;