import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../Home";
import Subscript from "../Subscript";
// import Finance from "../Finance";
import User from "../User";
import RootStackRouter from "../../Route";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../Login";


const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
class Nav extends Component {

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="首页" component={Home} />
                    <Tab.Screen name="订阅" component={Subscript} />
                    {/*<Tab.Screen name="财务" component={Finance} />*/}
                    <Tab.Screen name="用户" component={User} />
                </Tab.Navigator>
                {/*<RootStackRouter/>*/}
                {/*<Stack.Navigator>*/}
                {/*    <Stack.Screen name="User" component={User}></Stack.Screen>*/}
                {/*    /!*<Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>*!/*/}
                {/*    <Stack.Screen name="Login" component={Login}></Stack.Screen>*/}
                {/*</Stack.Navigator>*/}
            </NavigationContainer>
        );
    }
}

export default Nav;
