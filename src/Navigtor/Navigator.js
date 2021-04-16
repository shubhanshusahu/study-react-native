import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import  Home from '../screens/home'
import StartPage from '../Screens/startpage'
import Tutorial from '../Screens/Tutorial'
import { ToastAndroid } from 'react-native';



const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true,}}  >
    <AppStack.Screen name="Study React Native"  component={StartPage}  />
    <AppStack.Screen name="Tutorial"  component={Tutorial}  />
   

    {/* <AppStack.Screen name="Product" component={Product} /> */}
    </AppStack.Navigator>
    </NavigationContainer>
    );
}