// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {Header, SingleButton} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class SelectUser extends Component {
  handleNavigation = (screen_name, userType, naviagationHeader) => {
    const {navigation} = this.props;
    navigation.navigate(screen_name, {userType, naviagationHeader});
  };

  handleBackBtn = () => {
    console.log('Back');
  };

  renderLabel = (text) => <Text style={styles.labelText}>{text}</Text>;

  renderChooseBtn = (btnText, userType, naviagationHeader) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.handleNavigation('Login', userType, naviagationHeader);
        }}
        style={styles.chooseBtn}>
        <Text style={styles.chooseBtnText}>{btnText}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerLogo={Images.official_logo} headerText={'Select User'} />
        <View style={styles.contentView}>
          <View>
            {this.renderLabel('Parents')}
            {this.renderChooseBtn('Check In My Child', "parents", "Parent Login")}
            {this.renderLabel('Church Admin')}
            {this.renderChooseBtn('Check In Children', "churchAdmin", "Admin Login")}
            {this.renderLabel('Workers/Members')}
            {this.renderChooseBtn('Check In Myself', "member", "Workers/Event Login")}
          </View>
          <SingleButton
            btnText={'Back'}
            btnPress={() => this.handleBackBtn()}
          />
        </View>
      </View>
    );
  }
}

// const mapStateToProps = () => ({});

// const actions = {};

export default SelectUser; // connect(mapStateToProps, actions)(Empty);
