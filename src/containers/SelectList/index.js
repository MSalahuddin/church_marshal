// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {Header, ListCard} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class CheckedOutList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          image: Images.right_icon,
          name: 'Child Check In',
          screenName: 'ChildCheckInList',
        },
        {
          image: Images.calendar_icon,
          name: 'Visitor Check In',
          screenName: 'VisitorCheckIn',
        },
        {
          image: Images.map_pin_icon,
          name: 'Checked In List',
          screenName: 'VisitorCheckedInList',
        },
        {
          image: Images.clock_icon,
          name: 'Checked Out List',
          screenName: 'CheckedOutList',
        },
        {
          image: Images.clock_icon,
          name: 'Worker/Member Check in List',
          screenName: 'MemberCheckInList',
        },
      ],
    };
  }

  handleNavigation = (screen_name) => {
    const {navigation} = this.props;
    navigation.navigate(screen_name);
  };

  render() {
    const {list} = this.state;
    return (
      <View style={styles.container}>
        <Header 
           leftIcon = {Images.home_icon}
           leftBtnPress = {() => this.handleNavigation("SelectUser")}
           rightIcon = {Images.logout_icon}
           rightBtnPress = {() => this.handleNavigation("Login")}
           headerLogo={Images.client_logo}
           headerText={'Select List'} />
        <View style={styles.contentView}>
          <View style={styles.listView}>
            <ScrollView>
              {list.length > 0 &&
                list.map((val, ind) => (
                  <ListCard
                    key={ind}
                    isCardDisabled={false}
                    cardImage={val?.image}
                    titleText={val?.name}
                    cardPress={() => this.handleNavigation(val?.screenName)}
                  />
                ))}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}


export default CheckedOutList; 
