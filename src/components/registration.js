import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <View style={styles.auth}>
                <Text>
                    Username
                </Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                />
                <Text>
                    Password
                </Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 5}}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <TouchableOpacity onPress={ () => console.log('stuff') } style={styles.signin}>
                    <Text style={{ color: 'white' }}>
                        Sign in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => console.log('stuff') } style={styles.signin}>
                    <Text style={{ color: 'white' }}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        )
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
        borderRadius: 10,
        marginBottom: 10
    }
})

export default Registration;
