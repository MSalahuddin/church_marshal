// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View} from 'react-native';

import {Header, CustomTextInput, DoubleButton} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      churchCode: null,
      username: null,
      password: null,
    };
  }

  handleNavigation = (screen_name, userType) => {
    const {navigation} = this.props;
    navigation.navigate(screen_name, {userType});
  };

  handleBackBtn = () => {
    this.handleNavigation('SelectUser');
  };

  handleLoginBtn = (userType) => {
    if(userType === "parents")
    this.handleNavigation('MyChildrenList');
    else
    this.handleNavigation('SelectList');
  };

  onChangeChurchCode = (value) => this.setState({churchCode: value});
  onChangeUsername = (value) => this.setState({username: value});
  onChangePassword = (value) => this.setState({password: value});

  render() {
    const {churchCode, username, password} = this.state;
    const {userType} = this.props.route.params;
    return (
      <View style={styles.container}>
        <Header headerLogo={Images.official_logo} headerText={'Login'} />
        <View style={styles.contentView}>
          <CustomTextInput
            onChangeText={this.onChangeChurchCode}
            textInputValue={churchCode}
            placeholder={'CHURCH CODE'}
          />
          <CustomTextInput
            onChangeText={this.onChangeUsername}
            textInputValue={username}
            placeholder={'USERNAME'}
          />
          <CustomTextInput
            onChangeText={this.onChangePassword}
            textInputValue={password}
            placeholder={'PASSWORD'}
            secureTextEntry={true}
          />
          <DoubleButton
            leftButtonText={'Back'}
            leftButtonPress={() => this.handleBackBtn()}
            rightButtonText={'Login'}
            rightButtonPress={() => this.handleLoginBtn(userType)}
          />
        </View>
      </View>
    );
  }
}

// const mapStateToProps = () => ({});

// const actions = {};

export default Login; // connect(mapStateToProps, actions)(Empty);
