import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity, Navigator } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';

var HOME_ROUTE_STACK = {

}

class Home_user extends Component {
    render() {
        return (
            <View style={styles.home}>
				<TouchableOpacity  onPress={ () => this.logOut() } style={styles.signin}>
                    <Text style={{ color: 'white' }}>
                        Welcome Sir
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
	logOut(){
		LoginManager.logOut();
		this.props.navigator.immediatelyResetRouteStack([{ name: 'auth' }]);
	}
}

var styles = StyleSheet.create({
	home: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFFFFF'
	},
    auth: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFEEC6'
	},
	signin: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#1B80FF',
		marginBottom: 10,
		shadowColor: "#000000",
		shadowOpacity: 0.8,
		shadowRadius: 1,
		shadowOffset: {
			height: 1,
			width: 0
		}
	},
	inputStyle: {
		flex: 1,
		flexDirection: 'row',
		height: 40,
		width: 250,
		borderWidth: 1,
		borderColor: 'grey',
		marginBottom: 20,
		paddingLeft: 5
	},
	fbbutton: {
		marginBottom: 10
	}
})

export default Home_user;
