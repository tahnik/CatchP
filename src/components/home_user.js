import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class Home_user extends Component {
    render() {
        return (
            <View style={styles.home_user}>
                <TouchableOpacity onPress={() => this.props.onUpdate(false) } style={styles.signin}>
                    <Text style={{ color: 'white' }}>
                        Logged In
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    home_user: {
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

export default Home_user;
