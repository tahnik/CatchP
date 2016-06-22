import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';


class Authentication extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }
    render() {
        var _this = this;
        return (
            <View style={styles.auth}>
                <LoginButton
                  publishPermissions={["publish_actions"]}
                  onLoginFinished={
                    (error, result) => {
                      if (error) {
                        alert("login has error: " + result.error);
                      } else if (result.isCancelled) {
                        alert("login is cancelled.");
                      } else {
                        AccessToken.getCurrentAccessToken().then(
                          (data) => {
                            alert(data.accessToken.toString())
                          }
                        )
                      }
                    }
                  }
                  onLogoutFinished={() => alert("logout.")}/>
            </View>
        )
    }
    register(){

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
