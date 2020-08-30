// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

import {Header, ProfileCard, DoubleButton, CustomTextInput} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class VisitorCheckedInList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      checkUser: [],
      userList: [
        {
          profileImage: Images.profile_img,
          name: 'Alice, Johnson',
          subText: '3rd Grade',
          time: '12:30 PM',
          date: "Sunday, 30 Sept, 2020"
        },
        {
          profileImage: Images.profile_img,
          name: 'Liiberth, Johnson',
          subText: '3rd Grade',
          time: '12:30 PM',
          date: "Sunday, 30 Sept, 2020"
        },
        {
          profileImage: Images.profile_img,
          name: 'John, Elias',
          subText: '3rd Grade',
          time: '12:30 PM',
          date: "Sunday, 30 Sept, 2020"
        },
      ],
    };
  }

  handleCheckIn = () => {

  };

  handleDeleteUser = (userId) => {
   
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

  handlePrint = (user) => {
    const {navigation} = this.props;
    if(user.name == "John, Elias")
    navigation.navigate("TagForParent");
    else
    navigation.navigate("TagForChild");
  }

  handleCancelBtn = () => {
  };

  handleCheckInBtn = () => {
  };

  handleNavigation = (screen_name) => {
    const {navigation} = this.props;
    navigation.navigate(screen_name);
  };

  onChangeInputValue = (value) => this.setState({inputVal: value});

  render() {
    const {userList, checkUser, inputVal} = this.state;
    return (
      <View style={styles.container}>
        <Header
          headerLogo={Images.client_logo}
          headerText={'Checked In List'}
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
              {userList.length > 0 &&
                userList.map((val, ind) => (
                  <ProfileCard
                    key={ind}
                    isCardDisabled={true}
                    cardImage={val?.profileImage}
                    titleText={val?.name}
                    subText={val?.subText}
                    cardFooterText={val?.time}
                    date = {val?.date}
                    headerViewStyle = {styles.profileCardHeader}
                    footerViewStyle = {styles.footerViewStyle}
                    rightIcon={checkUser.includes(ind)  ? Images.checked_icon :Images.unchecked_icon}
                    rightIconPress={() => this.handleCheck(ind)}
                    rightIconStyle = {styles.profileCardheaderChecked}
                    printLabelIcon = {Images.print_label_icon}
                    headerPrintLabelPress = {() => this.handlePrint(val)}
                    
                  />
                ))}
                 <DoubleButton
              leftButtonText={'Cancel'}
              leftButtonPress={() => this.handleCancelBtn()}
              rightButtonText={'Check Child out'}
              rightButtonPress={() => this.handleCheckInBtn()}
            />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}


export default VisitorCheckedInList; 
