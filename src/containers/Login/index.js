// @flow
// import { connect } from "react-redux";
import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { Header, CustomTextInput } from "../../components";

import styles from "./styles";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      churchCode: null,
      username: null,
      password: null,
    }
  }

  onChangeChurchCode = (value) => this.setState({ churchCode: value })
  onChangeUsername = (value) => this.setState({ username: value })
  onChangePassword = (value) => this.setState({ password: value })

  render() {
    const { churchCode, username, password } = this.state;
    return (
      <View style={styles.container}>
        <Header headerText={"Login"} />
        <View style={styles.contentView}>
          <CustomTextInput
            onChangeText={this.onChangeChurchCode}
            textInputValue={churchCode}
            placeholder={"CHURCH CODE"}
          />
          <CustomTextInput
            onChangeText={this.onChangeUsername}
            textInputValue={username}
            placeholder={"USERNAME"}
          />
          <CustomTextInput
            onChangeText={this.onChangePassword}
            textInputValue={password}
            placeholder={"PASSWORD"}
            secureTextEntry={true}
          />
          <View style={styles.row}>
            <TouchableOpacity style={[styles.button, styles.buttonLeft]}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonRight]}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

// const mapStateToProps = () => ({});

// const actions = {};

export default LoginScreen // connect(mapStateToProps, actions)(Empty);
