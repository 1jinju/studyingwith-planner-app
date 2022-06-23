import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tab from "./navigations/Tab";
import Menu from './screens/Menu';
import Follow from './screens/Follow';
import Notification from './screens/Notification';
import Search from './screens/Search'

const stackNav = createNativeStackNavigator();

const Root = () => {
    return(
        <stackNav.Navigator>
            <stackNav.Screen name="Tab" component={Tab} options={{headerShown:false}}></stackNav.Screen>
            <stackNav.Screen name="Menu" component={Menu} options={{headerShown:false}}></stackNav.Screen>
            <stackNav.Screen name="Search" component={Search}></stackNav.Screen>
            <stackNav.Screen name="Follow" component={Follow} /*options={{headerTitleStyle:{color:'#fff'}}}*/></stackNav.Screen>
            <stackNav.Screen name="Notification" component={Notification}></stackNav.Screen>
        </stackNav.Navigator>
    );
};

export default Root