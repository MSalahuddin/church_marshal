// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

import {Header, ProfileCard} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class VisitorCheckedInList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
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
    console.log('Check In');
  };

  handleDeleteUser = (userId) => {
    console.log(userId, 'Delete User');
  };

  handleCheck = (userId) => {
    this.setState({userId})
  };

  handlePrint = (user) => {
    const {navigation} = this.props;
    if(user.name == "John, Elias")
    navigation.navigate("TagForParent");
    else
    navigation.navigate("TagForChild");
    console.log(user,'user')
  }
  render() {
    const {userList, userId} = this.state;
    return (
      <View style={styles.container}>
        <Header
          headerLogo={Images.client_logo}
          headerText={'Checked In List'}
        />
        <View style={styles.contentView}>
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
                    date = {val?.date}
                    headerViewStyle = {styles.profileCardHeader}
                    footerViewStyle = {styles.footerViewStyle}
                    checkedIcon = {userId == ind ? Images.checked_icon : Images.unchecked_icon}
                    printLabelIcon = {Images.print_label_icon}
                    headerCheckedIconStyle = {styles.profileCardheaderChecked}
                    headerCheckedPress = {() => this.handleCheck(ind)}
                    headerPrintLabelPress = {() => this.handlePrint(val)}
                    
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

export default VisitorCheckedInList; // connect(mapStateToProps, actions)(Empty);
