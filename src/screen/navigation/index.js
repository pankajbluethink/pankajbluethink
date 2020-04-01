import React,{Component} from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../dashboard';
const Drawer = createDrawerNavigator();

export default class Navigation extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Dashboard">
                    <Drawer.Screen name="Dashboard" component={(props)=><Dashboard {...props}/>} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }


}