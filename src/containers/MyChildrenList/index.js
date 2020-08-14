// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {Header, SingleButton, ProfileCard} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class MyChildrenList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCheckIn = () => {
    console.log('Check In');
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          headerLogo={Images.client_logo}
          headerText={'List of My Children'}
        />
        <View style={styles.contentView}>
          <View style={styles.listView}>
            <ScrollView>
              <ProfileCard />
            </ScrollView>
          </View>
          <SingleButton
            btnText={'Check In'}
            btnPress={() => this.handleCheckIn()}
          />
        </View>
      </View>
    );
  }
}

// const mapStateToProps = () => ({});

// const actions = {};

export default MyChildrenList; // connect(mapStateToProps, actions)(Empty);
