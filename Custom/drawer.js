import React from "react";
import { View,Image, StyleSheet, } from "react-native";
import {DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import   logo from "../assets/images/logo.jpg";


const CustomDrawerContent = (props) => (

    <DrawerContentScrollView {...props}>
        <View >
            <View style={{ flex: 1 }}>
                <Image source={logo} style={StyleSheet.drawerImage} />
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
    </DrawerContentScrollView>
  );


  const styles = StyleSheet.create({  
    drawerImage: {
        margin: 2,
        height: 2,
        width: 2,
    }
});
    


  export default  CustomDrawerContent;