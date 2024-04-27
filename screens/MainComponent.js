import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';
import CalisScreen from './CalisScreen';
import NutriScreen from './NutritionScreen';
import logo from "../assets/images/logo.jpg";
import { Platform, View, Image, StyleSheet, } from "react-native";
import ReservationScreen from './ReservationScreen';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from '../Custom/header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();





const screenOptions = {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: 'blue-Sky' }


};
const SplashNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={screenOptions}

        >
            <Stack.Screen
                component={SplashScreen}
                name='plash'
                options={{ headerShown:false, }}
            />

        </Stack.Navigator>
    )
}



const ReservationNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Resevation'
                component={ReservationScreen}
                options={{ title: 'Reservation Search' }}
            />


        </Stack.Navigator>
    )

}


const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='plash'

        >
            <Stack.Screen
                name='Splash'
                component={SplashScreen}
                options={({ navigation }) => ({
                    headerShown: false,


                })}


            />
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'Home', headerShown: false, fontSize: 50,

                }}
            />
            <Stack.Screen
                name="Plash" component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='calisthenics'
                component={CalisScreen}
                options={{ title: 'BodyWeight', headerShown: true }}
            />
            <Stack.Screen
                name='Intake'
                component={NutriScreen}
                options={{ title: 'Nutrition', headerShown: true }}
            />
        </Stack.Navigator>
    )


};


const Main = () => {


    return (
        
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={{headerShown:false}}
            >
                {/* <Tab.Screen
                    name='Plash'
                    component={SplashNavigator}
                    options={{ tabBarVisible: false,
                         headerShown:false
                     }}

                /> */}
                <Tab.Screen
                    name='Home'
                    component={HomeNavigator}

                />
                <Tab.Screen
                    name='ReserveTraining'
                    component={ReservationNavigator}
                    options={{headerShown:true}}
                />
            </Tab.Navigator>


        
    )

}


// const styles = StyleSheet.create({
//     drawerHeader: {
//         backgroundColor: 'black',
//         height: 150,
//         alignItems: 'center',
//         justifyContent: 'center',
//         flex: 1,
//         flexDirection: 'row'
//     },

//     drawerHeaderText: {
//         color: 'black',
//         fontSize: 24,
//         fontWeight: 'bold'
//     },
//     drawerImage: {
//         margin: 2,
//         height: 2,
//         width: 2,
//     }

// });












export default Main;