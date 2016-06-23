import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator, StyleSheet } from 'react-native';
import { AccessToken } from 'react-native-fbsdk';

import Authentication from './components/authentication';
import Home from './components/home';

var ROUTE_STACK = {
    auth: Authentication,
    home: Home
}

class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialRoute: null
        }
        AccessToken.getCurrentAccessToken().then(
            (data) => {
                if(data){
                    //console.log("Test");
                    this.setState({
                        initialRoute: 'home'
                    })
                }else{
                    this.setState({
                        initialRoute: 'auth'
                    })
                }
            }
        )
    }
    renderScene(route, navigator){
        var CurrentComponent = ROUTE_STACK[route.name];
        return <CurrentComponent title={route.name} navigator={navigator} />
    }
    render() {
        if(!this.state.initialRoute){
            return (
                <View style={styles.loading}>
                    <Text>Loading...</Text>
                </View>
            )
        }
        return (
            <Navigator
                style={styles.container}
                initialRoute={{ name: this.state.initialRoute }}
                renderScene={ (route, navigator) => this.renderScene(route, navigator) }
                configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight } }
            />
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFFFFF'
	}
})

export default main;
