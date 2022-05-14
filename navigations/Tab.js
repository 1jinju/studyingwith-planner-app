import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Timer from '../screens/Timer';
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
        }
    }}>
        <Tab.Screen 
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => 
                focused ? (
                  <Ionicons name="home" size={24} color="black" />) : (
                  <Ionicons name="home-outline" size={24} color="black" />)
        }}
        />
        <Tab.Screen 
          name="Timer"
          component={Timer}
          options={{
            tabBarIcon: ({focused}) => 
                focused ? (
                  <Ionicons name="timer" size={24} color="black" />) : (
                  <Ionicons name="timer-outline" size={24} color="black" />)
        }}
        />
        <Tab.Screen 
          name="Statistics"
          component={Statistics}
          options={{
            tabBarIcon: ({focused}) => 
                focused ? (
                  <Ionicons name="bar-chart" size={24} color="black" />) : (
                  <Ionicons name="bar-chart-outline" size={24} color="black" />)
        }}
        />
        <Tab.Screen 
          name="Download"
          component={Download}
          options={{
            tabBarIcon: ({focused}) => 
                focused ? (
                  <Ionicons name="download" size={24} color="black" />) : (
                  <Ionicons name="download-outline" size={24} color="black" />)
        }}
        />
    </Tab.Navigator>
    );
};

export default Tabs;