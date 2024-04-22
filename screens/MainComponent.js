import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';
import CalisScreen from './CalisScreen';
import NutriScreen from './NutritionScreen';





// const Drawer = createDrawerNavigator();

const Main = () => {

    const HomeNavigator = () => {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='Splash'
            >

                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ title: 'Home', headerShown: false }}
                />
                <Stack.Screen
                    name="Splash" component={SplashScreen}
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


    return (
        <HomeNavigator/>
    )







}

export default Main;