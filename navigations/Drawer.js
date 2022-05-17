import React from "react";
import { createAppContainer, createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./Stack";
import Information from '../screens/Information';
import Setting from '../screens/Setting';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        initialRouteName="Home"
        DrawerNavigator="left"
        backBehavior="History"
    >
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="공지사항"component={Information}/>
        <Drawer.Screen name="설정"component={Setting}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;