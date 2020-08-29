// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {Header, SingleButton, MemberListCard, CustomTextInput } from '../../components';
import {Images, Metrics} from '../../theme';

import styles from './styles';

class MemberCheckInList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      userId: 0,
      userList: [
        {
          profileImage: Images.profile_img,
          name: 'Alice, Johnson',
          type: "Service Name",
          time: '12:30 PM',
          date: "Sunday, 30 Sept, 2020"},
        {
          profileImage: Images.profile_img,
          name: 'Liiberth, Johnson',
          type: "Service Name",
          time: '12:30 PM',
          date: "Sunday, 30 Sept, 2020"
        },
        {
          profileImage: Images.profile_img,
          name: 'John, Elias',
          type: "Event Name",
          time: '12:30 PM',
          date: "Sunday, 30 Sept, 2020"},
      ],
    };
  }

  handleCheckIn = () => {
  };

  handleCheck = (userId) => {
    this.setState({userId})
  };

  handleNavigation = (screen_name) => {
    const {navigation} = this.props;
    navigation.navigate(screen_name);
  };

  onChangeInputValue = (value) => this.setState({inputVal: value});

  render() {
    const {userList,inputVal, userId} = this.state;
    return (
      <View style={styles.container}>
        <Header
          headerTextStyle = {{width: Metrics.screenWidth * 0.5}}
          leftIcon = {Images.home_icon}
          leftBtnPress = {() => this.handleNavigation("SelectUser")}
          rightIcon = {Images.logout_icon}
          rightBtnPress = {() => this.handleNavigation("Login")}
          headerLogo={Images.client_logo}
          headerText={'Wroker/Member Check In List'}
        />
        <View style={styles.contentView}>

          <View style={styles.listView}>
          <CustomTextInput
            onChangeText={this.onChangeInputValue}
            textInputValue={inputVal}
            placeholder={'Search'}
          />
            <ScrollView>
              {userList.length > 0 &&
                userList.map((val, ind) => (
                  <MemberListCard
                    key={ind}
                    cardImage={val?.profileImage}
                    titleText={val?.name}
                    type = {val?.type}
                    date = {val?.date}
                    time = {val?.time}
                  />
                ))}
            </ScrollView>
          </View>
          <SingleButton
            btnText={'Cancel'}
            btnPress={() => this.handleCheckIn()}
          />
        </View>
      </View>
    );
  }
}

export default MemberCheckInList; 
