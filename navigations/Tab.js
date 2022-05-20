import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Time from '../screens/Time';
import Statistics from '../screens/Statistics';
import Download from '../screens/Download';

const TabIcon = ({ name, size, color }) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  };
const Tab = createBottomTabNavigator();

const Tabs = ({route}) => {
  return (
    <Tab.Navigator
      initialRouteName={Home}
      tabBarPosition="Bottom"
      screenOptions={{
        tabBarShowIcon: true,
        tabBarScrollEnabled: false,
        swipeEnabled: false,
        tabBarIndicatorStyle: {
            backgroundColor: "white"
        },
        headerTitle: '✏',
        headerTitleAlign: 'left',
        headerTitleStyle: {fontSize: 25},
        headerStyle:{height: 100}
    }}>
        <Tab.Screen 
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => 
                focused ? (
                  <Ionicons name="home" size={24} color="black" />) : (
                  <Ionicons name="home-outline" size={24} color="#5D5D5D" />),
          }}
        />
        <Tab.Screen 
          name="Time"
          component={Time}
          options={{
            tabBarIcon: ({focused}) => 
                focused ? (
                  <Ionicons name="time" size={24} color="black" />) : (
                  <Ionicons name="timer-outline" size={24} color="#5D5D5D" />),
        }}
        />
        <Tab.Screen 
          name="Statistics"
          component={Statistics}
          options={{
            tabBarIcon: ({focused}) => 
                focused ? (
                  <Ionicons name="bar-chart" size={24} color="black" />) : (
                  <Ionicons name="bar-chart-outline" size={24} color="#5D5D5D" />),
        }}
        />
        <Tab.Screen 
          name="Download"
          component={Download}
          options={{
            tabBarIcon: ({focused}) => 
                focused ? (
                  <Ionicons name="download" size={24} color="black" />) : (
                  <Ionicons name="download-outline" size={24} color="#5D5D5D" />),
        }}
        />
    </Tab.Navigator>
    );
};

export default Tabs;