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
          image: Images.profile_img,
          name: 'Child Check In',
          screenName: 'Login',
        },
        {
          image: Images.profile_img,
          name: 'Visitor Check In',
          screenName: 'Login',
        },
        {
          image: Images.profile_img,
          name: 'Checked In List',
          screenName: 'Login',
        },
        {
          image: Images.profile_img,
          name: 'Checked Out List',
          screenName: 'Login',
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
        <Header headerLogo={Images.official_logo} headerText={'Select List'} />
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

// const mapStateToProps = () => ({});

// const actions = {};

export default CheckedOutList; // connect(mapStateToProps, actions)(Empty);