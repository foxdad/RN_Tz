import React, {Component} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import User from "../page/User";
import Login from "../page/Login";
import {Image} from "react-native";

const Stack = createStackNavigator();

class RootStackRouter extends Component {
    render() {
        return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    {
                        headerMode:"none",
                        headerTitleAlign:"center",
                    }
                }
            >
                <Stack.Screen name="LLAP" component={Login} options={{
                    headerTransparent: true,
                    headerTintColor:"#00A0E9"
                }}></Stack.Screen>
                <Stack.Screen name="User" component={User}></Stack.Screen>
                {/*<Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>*/}

            </Stack.Navigator>
        </NavigationContainer>


        );
    }
}

export default RootStackRouter;
