// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

import {Header, ProfileCard} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class CheckedOutList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          profileImage: Images.profile_img,
          name: 'Alice, Johnson',
          subText: '3rd Grade',
          time: '12:30 PM',
        },
        {
          profileImage: Images.profile_img,
          name: 'Liiberth, Johnson',
          subText: 'Toddler Class',
          time: '12:30 PM',
        },
        {
          profileImage: Images.profile_img,
          name: 'John, Elias',
          subText: '8-12 Yr Old',
          time: '12:30 PM',
        },
      ],
    };
  }

  handleCheckIn = () => {
    console.log('Check In');
  };

  handleDeleteUser = (userId) => {
    console.log(userId, 'Delete User');
  };

  handleNavigation = (screen_name) => {
    const {navigation} = this.props;
    navigation.navigate(screen_name);
  };

  render() {
    const {userList} = this.state;
    return (
      <View style={styles.container}>
        <Header
          headerLogo={Images.client_logo}
          headerText={'Checked Out List'}
          rightIcon = {Images.logout_icon}
          rightBtnPress = {() => this.handleNavigation("Login")}
          leftIcon = {Images.home_icon}
          leftBtnPress = {() => this.handleNavigation("SelectUser")}
        />
        <View style={styles.contentView}>
          <Text style={styles.dateText}>Sunday, 30 Sep, 2020</Text>
          <View style={styles.listView}>
            <ScrollView>
              {userList.length > 0 &&
                userList.map((val, ind) => (
                  <ProfileCard
                    key={ind}
                    isCardDisabled={false}
                    cardImage={val?.profileImage}
                    titleText={val?.name}
                    subText={val?.subText}
                    cardFooterText={val?.time}
                  />
                ))}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

// const mapStateToProps = () => ({});

// const actions = {};

export default CheckedOutList; // connect(mapStateToProps, actions)(Empty);
