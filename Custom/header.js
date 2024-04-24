import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



const CustomHeader = ({ navigation }) => {
    const toggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={toggleDrawer}>
                <Ionicons name="menu" size={30} color="black" style={{ marginLeft: 30}} />
            </TouchableOpacity>
            
        </View>

    )
};

export default CustomHeader;

