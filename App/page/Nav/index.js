import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../Home";
import Subscript from "../Subscript";
// import Finance from "../Finance";
import User from "../User";


const Tab = createBottomTabNavigator();
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
            </NavigationContainer>
        );
    }
}

export default Nav;