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
import TabBarBackground from '../Custom/TabNav';



const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator tabBar={() => <TabBarBackground />}  >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: true,
                }}
            />
            <Tab.Screen
                name='Reservation'
                component={ReservationScreen}
                options={{
                    title: 'Reservation Search', headerShown: true,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={black}/>
                    ),

                }}
            />
        </Tab.Navigator>
    );
};


const Main = () => {
    const Stack = createStackNavigator();

    return (

        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
            <Stack.Screen name='Splash' component={SplashScreen} />
            <Stack.Screen name='Home' component={BottomTabNav} />
            <Stack.Screen name='Calisthenics' component={CalisScreen} options={{ title: 'BodyWeight', headerShown: true }} />
            <Stack.Screen name='Intake' component={NutriScreen} options={{ title: 'Nutrition', headerShown: true }} />
        </Stack.Navigator>

    );
};
const styles = StyleSheet.create({
    BackgroundColor: 'transparent'

})

export default Main;








