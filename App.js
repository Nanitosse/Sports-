
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StatusBar } from 'react-native';
// import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/images/soccer.png')}
      style={{
        flex: 1,
        // resizeMode:'cover',
        justifyContent: 'center',

      }}

    >

    </ImageBackground>







  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    backgroundColor: 'black',
    textAlign: 'center',
    alignItems: "center"

  },


});

// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'rgb(255, 45, 85)',
//     background: 'transparent',
//   },
// };
