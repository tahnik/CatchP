import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity, Navigator } from 'react-native';

class Home_user extends Component {
    render() {
        return (
            <View style={styles.home_user}>
                {/*<Navigator
                    style={styles.container}
                    initialRoute={}
                    renderScene={}
                    configureScene={() => { return Navigator.SceneConfigs.FloatFromRight }}
                />*/}
            />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
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
        borderRadius: 10,
        marginBottom: 3
    }
})

export default Home_user;
