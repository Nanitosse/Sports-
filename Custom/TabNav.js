import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";


const Tab = createBottomTabNavigator();


const BottomTAb =()=>{

    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" 
                component={HomeScreen}
            />   

        </Tab.Navigator>
    )

};


export default BottomTAb;