// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {Header, ListCard} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class EventType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          image: Images.right_icon,
          name: 'Events',
          screenName: 'EventList',
        },
        {
          image: Images.calendar_icon,
          name: 'Church Service',
          screenName: 'ServiceList',
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
           headerText={'Event Type'} />
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

export default EventType; 
