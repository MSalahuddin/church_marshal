// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {Header, SingleButton, ProfileCard, CustomTextInput} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class MyChildrenList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkUser: [],
      inputVal: "",
      userList: [
        {profileImage: Images.profile_img, name: 'Alice, Johnson'},
        {profileImage: Images.profile_img, name: 'Liiberth, Johnson'},
        {profileImage: Images.profile_img, name: 'John, Elias'},
      ],
    };
  }

  handleCheckIn = () => {
    
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
            <CustomTextInput
              onChangeText={this.onChangeInputValue}
              textInputValue={inputVal}
              placeholder={'Search'}
            />
              {userList.length > 0 &&
                userList.map((val, ind) => (
                  <ProfileCard
                    key={ind}
                    cardImage={val?.profileImage}
                    titleText={val?.name}
                    rightIcon={checkUser.includes(ind)  ? Images.checked_icon :Images.unchecked_icon}
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


export default MyChildrenList; 
