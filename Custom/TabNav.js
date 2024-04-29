import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import Ionicons from '@expo/vector-icons/Ionicons';






const TabBarBackground = () => (


    <View style={styles.tabBarBackground} >
        <View style={{ flex: 1, alignItems: 'left', justifyContent: 'left' }}>
            <Ionicons name="home" size={40} color="white" />
        </View>
        <View style={{  alignItems: 'center', }}>
            <Ionicons name="chatbubble" size={40} color="white" />
        </View>
        <View style={{ position: 'absolute', right: 0 }}>
            <Ionicons name="menu" size={40} color="white" />
        </View>
    </View>



);

const styles = StyleSheet.create({
    tabBarBackground: {

        bottom: 0,
        left: 0,
        right: 0,
        height: 80, // Adjust this according to your tab bar height
        backgroundColor: 'rgba(0, 0, 0, 0.5)'


    },

});



export default TabBarBackground;