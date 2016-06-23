import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity, TextInput, requireNativeComponent } from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import Firebase from 'firebase';
import Home from './home';

var app = new Firebase("https://blazing-inferno-8250.firebaseio.com");


class Authentication extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<View style={styles.auth}>
				<TouchableOpacity  onPress={ () => this.login() } style={styles.signin}>
                    <Text style={{ color: 'white' }}>
                        Log in with Facebook
                    </Text>
                </TouchableOpacity>
			</View>
		)
	}
	login(){
		LoginManager.logInWithReadPermissions(['public_profile']).then(
			(result) => {
				if (result.isCancelled) {
					alert('Login was cancelled');
				} else {
					AccessToken.getCurrentAccessToken().then(
						(data) => {
							this.setState({ loggedIn: 'lol' });
							var api = `https://graph.facebook.com/v2.3/${data.userID}?fields=name,email&access_token=${data.accessToken}`;

							fetch(api)
							.then((response) => response.json())
							.then((responseData) => {
								console.log(responseData);
								app.createUser({
									email    : responseData.email,
									password : "android123"
								}, function(error, userData) {
									if (error) {
										console.log("Error creating user:", error);
									} else {
										console.log("Successfully created user account with uid:", userData.uid);
									}
								});
							})
							.done();
							this.props.navigator.immediatelyResetRouteStack([{ name: 'home' }]);
						}
					)
				}
			},
			function(error) {
				alert('Login failed with error: ' + error);
			}
		);
	}
}

var styles = StyleSheet.create({
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

export default Authentication;
