import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Screen extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View>
                <Text>Screen {this.props.name}</Text>
            </View>
        );
    }


}