import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tab from "./navigations/Tab";
import Drawer from './navigations/Drawer';
import StackNavigator from "./navigations/Stack";

const stackNav = createNativeStackNavigator();
//<stackNav.Screen name="Stack" component={StackNavigator}></stackNav.Screen>
const Root = () => {
    return(
        <stackNav.Navigator screenOptions={{headerShown: false}}>
            <stackNav.Screen name="Tab" component={Tab}></stackNav.Screen>
            <stackNav.Screen name="Drawer" component={Drawer}></stackNav.Screen>
        </stackNav.Navigator>
    );
};

export default Root