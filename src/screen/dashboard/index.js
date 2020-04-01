import React,{Component} from 'react';
import { View, Text, Button } from 'react-native';
import {  DrawerActions } from '@react-navigation/native';
class Dashboard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Button title="Open drawer" onPress={()=>{this.props.navigation.dispatch(DrawerActions.openDrawer())}} />
            </View>
        )
    }
}
export default Dashboard;