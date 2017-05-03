import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AuthScreen extends Component {
  // static navigationOptions = {
  //   tabBarLabel: 'kkkk',
  // };
  
  
  render() {
    return (
      <View>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
      </View>
    )
  }
}

export default AuthScreen;


// import Expo from 'expo';
// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import WelcomeScreen from './screens/WelcomeScreen';
// import AuthScreen from './screens/AuthScreen';
// import { TabNavigator } from 'react-navigation';
//
//
// class MyHomeScreen extends React.Component {
//   static navigationOptions = {
//     tabBarLabel: 'Luis',
//   };
//
//   render() {
//     return (
//       <Text>HHhHH</Text>
//     );
//   }
// }
//
// class MyNotificationsScreen extends React.Component {
//   static navigationOptions = {
//     tabBarLabel: 'kkkk',
//   };
//
//   render() {
//     return (
//       <Text>HHhHH</Text>
//     );
//   }
// }
//
//
// const MyApp = TabNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });
//
//
// Expo.registerRootComponent(MyApp);
