import { Text, View, Animated, StyleSheet, Button, ScrollView, SafeAreaView } from 'react-native';
import { Tile } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import image from '../assets/images/calisImg.jpg';
import nutrition from '../assets/images/nutrution.jpg';
import gym from '../assets/images/gym.jpg';





const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: 'center' }}>
      <ScrollView style={{ paddingVertical: 10 }}>

        <Tile

          imageSrc={image}
          featured

          height={230}
        //   onPress={() => navigation.navigate('Intake')}
        />
        <Tile

          imageSrc={gym}
          featured

          height={230}
        //   onPress={() => navigation.navigate('Intake')}
        />
        <Tile

          imageSrc={nutrition}
          featured

          height={230}
        //   onPress={() => navigation.navigate('Intake')}
        />


      </ScrollView>
    </View>
  );

}



export default HomeScreen;