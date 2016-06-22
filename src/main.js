import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator, StyleSheet } from 'react-native';

import Authentication from './components/authentication';
import Home_user from './components/home_user';

import Registration from './components/registration';

var AUTH_ROUTE_STACK = [
    {name: 'signin', component: Authentication, index: 0},
    {name: 'registration', component: Registration, index: 1}
];

class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }
    changeState(val){
        this.setState({
            loggedIn: val
        })
    }
    renderAuthRegScene(route, navigator){
        var CurrentComponent = AUTH_ROUTE_STACK[route.index].component;
        var index = AUTH_ROUTE_STACK[route.index].index;
        return <CurrentComponent title={route.name} navigator={navigator} index={index} />
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
                initialRoute={ AUTH_ROUTE_STACK[0] }
                initialRouteStack = { AUTH_ROUTE_STACK }
                renderScene={ (route, navigator) => this.renderAuthRegScene(route, navigator) }
                configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight } }
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
