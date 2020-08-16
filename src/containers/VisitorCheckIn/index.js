// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {
  Header,
  CustomTextInput,
  DoubleButton,
  CustomPicker,
  CustomDatePicker,
} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'Choose Gender',
      genderList: ['Choose Gender', 'Male', 'Female'],
      firstName: null,
      lastName: null,
      dateOfBirth: null,
      guardianName: null,
      guardianPhone: null,
      guardianEmail: null,
      comment: null,
    };
  }

  handleNavigation = (screen_name) => {
    const {navigation} = this.props;
    navigation.navigate(screen_name);
  };

  handleCancelBtn = () => {
    console.log('Cancel');
  };

  handleCheckInBtn = () => {
    console.log('Check In');
  };

  onChangeGender = (value) => this.setState({gender: value});
  onChangeFirstName = (value) => this.setState({firstName: value});
  onChangeLastName = (value) => this.setState({lastName: value});
  onChangeDateOfBirth = (value) => this.setState({dateOfBirth: value});
  onChangeGuardianName = (value) => this.setState({guardianName: value});
  onChangeGuardianPhone = (value) => this.setState({guardianPhone: value});
  onChangeGuardianEmail = (value) => this.setState({guardianEmail: value});
  onChangeComment = (value) => this.setState({comment: value});

  render() {
    const {
      gender,
      genderList,
      firstName,
      lastName,
      dateOfBirth,
      guardianName,
      guardianPhone,
      guardianEmail,
      comment,
    } = this.state;
    return (
      <View style={styles.container}>
        <Header
          headerLogo={Images.official_logo}
          headerText={'Visitor Check In'}
        />
        <ScrollView>
          <View style={styles.contentView}>
            <CustomPicker
              selectedValue={gender}
              onChangeValue={this.onChangeGender}
              itemList={genderList}
            />
            <CustomTextInput
              onChangeText={this.onChangeFirstName}
              textInputValue={firstName}
              placeholder={'FIRST NAME'}
            />
            <CustomTextInput
              onChangeText={this.onChangeLastName}
              textInputValue={lastName}
              placeholder={'LAST NAME'}
            />
            <CustomDatePicker
              date={dateOfBirth}
              placeholder={'DATE OF BIRTH'}
              minDate={new Date(1970)}
              maxDate={new Date()}
              onChangeDate={this.onChangeDateOfBirth}
            />
            <CustomTextInput
              onChangeText={this.onChangeGuardianName}
              textInputValue={guardianName}
              placeholder={'GUARDIAN NAME'}
            />
            <CustomTextInput
              onChangeText={this.onChangeGuardianPhone}
              textInputValue={guardianPhone}
              placeholder={'GUARDIAN PHONE'}
            />
            <CustomTextInput
              onChangeText={this.onChangeGuardianEmail}
              textInputValue={guardianEmail}
              placeholder={'GUARDIAN EMAIL'}
            />
            <CustomTextInput
              onChangeText={this.onChangeComment}
              textInputValue={comment}
              placeholder={'COMMENT'}
            />
            <DoubleButton
              leftButtonText={'Cancel'}
              leftButtonPress={() => this.handleCancelBtn()}
              rightButtonText={'Check In'}
              rightButtonPress={() => this.handleCheckInBtn()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

// const mapStateToProps = () => ({});

// const actions = {};

export default Login; // connect(mapStateToProps, actions)(Empty);
