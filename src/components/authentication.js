import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity } from 'react-native';


class Auth extends Component {
    render() {
        return (
            <View style={styles.auth}>
                <TouchableOpacity onPress={() => this.props.onUpdate(true) } style={styles.signin}>
                    <Text style={{ color: 'white' }}>
                        Sign in
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    onPressButton() {
        console.log('yo');
        this.props.onUpdate(true);
    }
    handleButtonPress() {
        console.log('I was pressed')
    }
}

var styles = StyleSheet.create({
    auth: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signin: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#222222',
        borderRadius: 10
    }
})

export default Auth;
