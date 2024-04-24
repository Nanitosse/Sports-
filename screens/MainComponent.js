import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';
import CalisScreen from './CalisScreen';
import NutriScreen from './NutritionScreen';
import logo from "../assets/images/logo.jpg";
import { Platform, View, Image, StyleSheet,  } from "react-native";
import ReservationScreen from './ReservationScreen';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from '../Custom/header';
import CustomDrawerContent from '../Custom/drawer';





const Drawer = createDrawerNavigator();
const screenOptions = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: 'blue-Sky' }


};



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
                initialRouteName='Splash'
                
            >

                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ title: 'Home', headerShown: false ,fontSize:50,

                }}
                   
                    
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


    const Main = () => {
    
    
    
        return (
            <View
                style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}
            >
                <Drawer.Navigator
                    initialRouteName='Splash'
                    drawerStyle={{ backgroundColor: '#CEC8FF' }}
                    drawerContent={CustomDrawerContent}
                    screenOptions={{
                        headerShown: ({ navigation, route }) => {
                            route.name === 'Splash' ? false : true
    
                        }
                    }}
                    drawerContentContainerStyle={{ paddingVertical: 0 }}
    
    
                >
                    <Drawer.Screen
                        name='Home'
                        component={HomeNavigator}
                        options={{ headerShown: true ,
                           
                        }}
                        drawerContentContainerStyle={{ paddingVertical: 0 }}
                       
    
                    />
    
                    {/* <Drawer.Screen
                        name='Directory'
                        component={DirectoryNavigator}
                        options={{ title: 'Directory' }}
                    /> */}
                    <Drawer.Screen
                        name='ReserveTraining'
                        component={ReservationNavigator}
                        options={{ title: 'Reservation' }}
                    />
                    {/* <Drawer.Screen
                        name='Favorites'
                        component={FavoritesNavigator}
                        options={{
                            title: 'My Favorites',
    
                        }}
    
                    />
                    <Drawer.Screen
                        name='login'
                        component={LoginNavigator}
    
                    />
                    <Drawer.Screen
                        name='Contact'
                        component={ContactNavigator}
                        options={{ title: "contact" }}
                    />
                    <Drawer.Screen
                        name='AboutUs'
                        component={AboutNavigator}
                        options={{ title: "AboutUs" }}
                    />
     */}
                </Drawer.Navigator>
    
    
            </View>
        )
    
}


const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: 'black',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },

    drawerHeaderText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 2,
        height: 2,
        width: 2,
    }

});
    
    
    
    
       







export default Main;