/*import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
);
};

export default StackNavigation*/

import React from "react";
import { createNativeStackNavigator, createStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text } from 'react-native';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Folllow from '../screens/Follow';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Follow" component={Follow} />
      </Stack.Navigator>
  );
}

export default StackNavigator;