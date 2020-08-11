// @flow
// import { connect } from "react-redux";
import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { Header } from "../../components";

import styles from "./styles";

class SelectUserScreen extends Component {


  renderLabel = (text) => {
    return (
      <Text style={styles.labelText}>{text}</Text>
    )
  }

  renderChooseBtn = (btnText) => {
    return (
      <TouchableOpacity style={styles.chooseBtn}>
        <Text style={styles.chooseBtnText}>{btnText}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Select User"} />
        <View style={styles.contentView}>
          <View style={{}}>
            {this.renderLabel('Parents')}
            {this.renderChooseBtn('Check In My Child')}
            {this.renderLabel('Church Admin')}
            {this.renderChooseBtn('Check In Children')}
          </View>
          <TouchableOpacity style={styles.backBtn}>
            <Text style={styles.backBtnText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// const mapStateToProps = () => ({});

// const actions = {};

export default SelectUserScreen // connect(mapStateToProps, actions)(Empty);
