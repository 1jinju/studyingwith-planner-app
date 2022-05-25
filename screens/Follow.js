import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import FollowingTab from './FollowingTab';
import FollowerTab from './FollowerTab';

const Tabs = createMaterialTopTabNavigator();

function Follow({navigation}) {

    return (
        <Tabs.Navigator 
        screenOptions={{
            tabBarLabelStyle:{
                padding: 15
            },
            tabBarIndicatorStyle:{
                backgroundColor: '#5D5D5D'
            }
        }}
        >
            <Tabs.Screen name="팔로잉 7" component={FollowingTab} />
            <Tabs.Screen name="팔로워 7" component={FollowerTab} />
        </Tabs.Navigator>
    )
}

export default Follow