import { useNavigation } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native'
import { createAppContainer, createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native'
import Information from '../screens/Information';
import Setting from '../screens/Setting';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

function Menu() {
    return (
        <Drawer.Navigator
            initialRouteName="Inforamation"
            DrawerNavigator="left"
            backBehavior="History"
        >
            <Drawer.Screen name="공지사항"component={Information}/>
            <Drawer.Screen name="설정"component={Setting}/>
        </Drawer.Navigator>
      );
}

export default Menu;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
    },
    profileView: {
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        paddingLeft: 30,
      },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 100,
      },
    textView:{
        flex: 1,
        justifyContent: 'space-between',
        //justifyContent:'center',
        paddingRight:15,
        paddingVertical:13,
    },
    line: {
      backgroundColor: "#f2f2f2",
      height: 0.75,
      //marginVertical: 10,
    },
});