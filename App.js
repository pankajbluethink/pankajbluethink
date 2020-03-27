import React,{ Component } from "react";
import { View, Text } from "react-native";

export default class App extends Component{
  constructor(props){
   super(props);
   this.state={
     name:'nitish'
   }

  }

  render(){
    return(
      <View style={{backgroundColor:'red'}}>
        <Text>Hello {this.state.name}</Text>
      </View>
    )
  }
}