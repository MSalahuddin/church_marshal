// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {Header, SingleButton} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class SelectUser extends Component {
  handleNavigation = (screen_name, userType) => {
    const {navigation} = this.props;
    navigation.navigate(screen_name, {userType});
  };

  handleBackBtn = () => {
    console.log('Back');
  };

  renderLabel = (text) => <Text style={styles.labelText}>{text}</Text>;

  renderChooseBtn = (btnText, userType) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.handleNavigation('Login', userType);
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
            {this.renderChooseBtn('Check In My Child', "parents")}
            {this.renderLabel('Church Admin')}
            {this.renderChooseBtn('Check In Children', "churchAdmin")}
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
