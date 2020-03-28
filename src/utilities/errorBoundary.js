import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';

class ErrorBaoundaryHandle extends Component {
    constructor(props) {
        super(props);

    }
  

    render() {
        console.log("ERRROR", this.props)
        const { error, resetError } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>{'Oops!'}</Text>
                    <Text style={styles.subtitle}>{'There\'s an error'}</Text>
                    <Text style={styles.error}>{error.toString()}</Text>
                    <TouchableOpacity style={styles.button} onPress={resetError}>
                        <Text style={styles.buttonText}>{'Go TO Home'}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

}
export default ErrorBaoundaryHandle;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        flex: 1,
        justifyContent: 'center'
    },
    content: {
        marginHorizontal: 16
    },
    title: {
        fontSize: 48,
        fontWeight: '300',
        paddingBottom: 16
    },
    subtitle: {
        fontSize: 32,
        fontWeight: '800'
    },
    error: {
        paddingVertical: 16
    },
    button: {
        backgroundColor: '#2196f3',
        borderRadius: 50,
        padding: 16
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center'
    }
});