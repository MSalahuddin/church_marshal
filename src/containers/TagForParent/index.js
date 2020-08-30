// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {Header, BarCodeCard} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class TagForParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          name: 'Alice, Johnson',
          date: 'Sep 30, 2020',
          time: '12:30 PM',
          barCodeImage: Images.barcode_icon,
          id: '993',
        },
      ],
    };
  }

  handleSelectedCard = () => {
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
          headerText={'Tag For Parent'}
          rightIcon = {Images.logout_icon}
          rightBtnPress = {() => this.handleNavigation("Login")}
          leftIcon = {Images.home_icon}
          leftBtnPress = {() => this.handleNavigation("SelectUser")}
        />
        <View style={styles.contentView}>
          <View style={styles.listView}>
            <ScrollView>
              {userList.length > 0 &&
                userList.map((val, ind) => (
                  <BarCodeCard
                    key={ind}
                    cardPress={() => this.handleSelectedCard()}
                    titleText={val?.name}
                    subText={val?.date}
                    rightText={val?.time}
                    cardFooterImage={val?.barCodeImage}
                    cardFooterText={val?.id}
                  />
                ))}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default TagForParent; 
