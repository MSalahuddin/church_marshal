// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

import {Header, EventCard, DoubleButton, CustomTextInput} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      checkUser: [],
      eventList: [
        {
          name: 'Service 1',
          time: '03:00 PM',
          date: "Sept 15,2020"
        },
        {
          name: 'Service 2',
          time: '06:00 PM',
          date: "Sept 17,2020"
        },
        {
          name: 'Service 3',
          time: '4:30 PM',
          date: "Sept 19,2020"
        },
      ],
    };
  }


  handleDeleteUser = (userId) => {
    console.log(userId, 'Delete User');
  };

  handleNavigation = (screen_name) => {
    const {navigation} = this.props;
    navigation.navigate(screen_name);
  };

  handleCheck = (userId) => {
    let {checkUser} = this.state;

    let arr = [...checkUser];
    let isChecked = arr.includes(userId);
    if(!isChecked){
      arr.push(userId);
    }
    else{
      let index = arr.indexOf(userId);
      arr.splice(index, 1);
    }
    this.setState({checkUser: arr})
  };

  handleBackBtn = () => {
    const {navigation} = this.props;
    navigation.goBack();
  }

  handleCheckInBtn = () => {

  }

  onChangeInputValue = (value) => this.setState({inputVal: value});


  render() {
    const {eventList, checkUser, inputVal} = this.state;
    return (
      <View style={styles.container}>
        <Header
          headerLogo={Images.client_logo}
          headerText={'Service List'}
          rightIcon = {Images.logout_icon}
          rightBtnPress = {() => this.handleNavigation("Login")}
          leftIcon = {Images.home_icon}
          leftBtnPress = {() => this.handleNavigation("SelectUser")}
        />
        <View style={styles.contentView}>
          <View style={styles.listView}>
          <CustomTextInput
              onChangeText={this.onChangeInputValue}
              textInputValue={inputVal}
              placeholder={'Search'}
            />
            <ScrollView>
              {eventList.length > 0 &&
                eventList.map((val, ind) => (
                  <EventCard
                    key={ind}
                    isCardDisabled={true}
                    titleText={val?.name}
                    time={val?.time}
                    date = {val?.date}
                    rightIcon={checkUser.includes(ind) ? Images.checked_icon :Images.unchecked_icon}
                    rightIconPress={() => this.handleCheck(ind)}
                  />
                ))}
                 <DoubleButton
                  leftButtonText={'Back'}
                  leftButtonPress={() => this.handleBackBtn()}
                  rightButtonText={'Check In'}
                  rightButtonPress={() => this.handleCheckInBtn()}
                />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default ServiceList; 
