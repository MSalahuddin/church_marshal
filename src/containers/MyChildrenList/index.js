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
    this.state = {
      userId: 0,
      userList: [
        {profileImage: Images.profile_img, name: 'Alice, Johnson'},
        {profileImage: Images.profile_img, name: 'Liiberth, Johnson'},
        {profileImage: Images.profile_img, name: 'John, Elias'},
      ],
    };
  }

  handleCheckIn = () => {
    console.log('Check In');
  };

  handleCheck = (userId) => {
    this.setState({userId})
  };

   handleNavigation = (screen_name) => {
    const {navigation} = this.props;
    navigation.navigate(screen_name);
  };

  render() {
    const {userList, userId} = this.state;
    return (
      <View style={styles.container}>
        <Header
          leftIcon = {Images.home_icon}
          leftBtnPress = {() => this.handleNavigation("SelectUser")}
          rightIcon = {Images.logout_icon}
          rightBtnPress = {() => this.handleNavigation("Login")}
          headerLogo={Images.client_logo}
          headerText={'List of My Children'}
        />
        <View style={styles.contentView}>
          <View style={styles.listView}>
            <ScrollView>
              {userList.length > 0 &&
                userList.map((val, ind) => (
                  <ProfileCard
                    key={ind}
                    cardImage={val?.profileImage}
                    titleText={val?.name}
                    rightIcon={ind == userId ? Images.checked_icon :Images.unchecked_icon}
                    rightIconPress={() => this.handleCheck(ind)}
                  />
                ))}
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
