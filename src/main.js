import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator, StyleSheet } from 'react-native';

import Authentication from './components/authentication';
import Home_user from './components/home_user';

var AUTH_ROUTE_STACK = {
    signin: Authentication
}

class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }
    renderAuthRegScene(route, navigator){
        var CurrentComponent = AUTH_ROUTE_STACK[route.name];
        return <CurrentComponent title={route.name} navigator={navigator} />
    }
    changeAuth(bol, route, navigator){
        if(bol){
            Navigator.SceneConfigs.FloatFromLeft;
            navigator.push({
                name: 'Registration',
                index: route.index
            })
        }
    }
    render() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{ name: 'signin' }}
                renderScene={ (route, navigator) => this.renderAuthRegScene(route, navigator) }
                configureScene={ () => { return Navigator.SceneConfigs.HorizontalSwipeJump } }
            />
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default main;
