import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import Auth from './components/authentication';
import Home_user from './components/home_user';

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
        });
        console.log(this.state.loggedIn);
    }
    render() {
        return (
            this.state.loggedIn ?  <Home_user onUpdate={ (e) => this.changeState(e) } /> : <Auth onUpdate={ (e) => this.changeState(e) } />
        )
    }
}

export default main;
