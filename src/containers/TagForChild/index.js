// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {Header, BarCodeCard} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

class TagForChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          grade: '3rd Grade',
          profileImage: Images.profile_img,
          name: 'Alice, Johnson',
          barCodeNo: '281-121-1212',
          date: 'Sep 30, 2020',
          time: '12:30 PM',
          barCodeImage: Images.barcode_icon,
          id: '994',
        },
      ],
    };
  }

  handleSelectedCard = () => {
    console.log('Selected Card');
  };

  render() {
    const {userList} = this.state;
    return (
      <View style={styles.container}>
        <Header
          headerLogo={Images.official_logo}
          headerText={'Tag For Child'}
        />
        <View style={styles.contentView}>
          <View style={styles.listView}>
            <ScrollView>
              {userList.length > 0 &&
                userList.map((val, ind) => (
                  <BarCodeCard
                    key={ind}
                    cardImage={val?.profileImage}
                    cardPress={() => this.handleSelectedCard()}
                    cardHeaderText={val?.grade}
                    cardBodyImage={val?.profileImage}
                    titleText={val?.name}
                    subText={val?.barCodeNo}
                    rightText={val?.date}
                    rightSubText={val?.time}
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

// const mapStateToProps = () => ({});

// const actions = {};

export default TagForChild; // connect(mapStateToProps, actions)(Empty);
