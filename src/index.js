
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import SelectUserScreen from "./containers/SelectUser";
import SplashScreen from 'react-native-splash-screen';
// import { Actions } from "react-native-router-flux";
export default class App extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){

    setTimeout(() => {
        SplashScreen.hide()
    },1000)
  }
  render() {
    return (
        <SelectUserScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
