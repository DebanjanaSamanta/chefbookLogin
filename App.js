import React from 'react';
import { View } from 'react-native';
// import Home from './screens/Home';
// import Welcomescreen from './screens/Welcomescreen';
import Login from './screens/Login';
// import SignUp from './screens/SignUp';
// import ReadRecipe from './screens/ReadRecipe';
// import BottomTabNavigator from './navigator/bottomnavigator';

import * as firebase from "firebase"
import {firebaseConfig} from './config'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default class App extends React.Component{
  render()
  {
    return(
      <View>
        <Login/>
      </View>
    )
  }
}