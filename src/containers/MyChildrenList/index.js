// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {Header, SingleButton, ProfileCard} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class MyChildrenList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {profileImage: Images.profile_img, name: 'Alice, Johnson'},
        {profileImage: Images.profile_img, name: 'Liiberth, Johnson'},
        {profileImage: Images.profile_img, name: 'John, Elias'},
      ],
    };
  }

  handleCheckIn = () => {
    console.log('Check In');
  };

  handleDeleteUser = (userId) => {
    console.log(userId, 'Delete User');
  };

  render() {
    const {userList} = this.state;
    return (
      <View style={styles.container}>
        <Header
          headerLogo={Images.client_logo}
          headerText={'List of My Children'}
        />
        <View style={styles.contentView}>
          <View style={styles.listView}>
            <ScrollView>
              {userList.length > 0 &&
                userList.map((val, ind) => (
                  <ProfileCard
                    key={ind}
                    cardImage={val?.profileImage}
                    titleText={val?.name}
                    rightIcon={Images.delete_icon}
                    rightIconPress={() => this.handleDeleteUser(ind)}
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

// const mapStateToProps = () => ({});

// const actions = {};

export default MyChildrenList; // connect(mapStateToProps, actions)(Empty);
