// @flow
// import { connect } from "react-redux";
import React, {Component} from 'react';
import {View, ScrollView, Modal, Text, Image, TouchableOpacity} from 'react-native';

import {Header, CustomTextInput, DoubleButton} from '../../components';
import {Images, Metrics} from '../../theme';

import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      churchCode: null,
      username: null,
      password: null,
      showOverLay: false
    };
  }

  handleNavigation = (screen_name, userType) => {
    const {navigation} = this.props;
    navigation.navigate(screen_name, {userType});
  };

  handleBackBtn = () => {
    this.handleNavigation('SelectUser');
  };

  handleLoginBtn = (userType) => {
    if(userType === "parents")
    this.handleNavigation('MyChildrenList');
    else if(userType === "member")
    this.handleNavigation('EventType');
    else
    this.handleNavigation('SelectList');
  };

  onChangeChurchCode = (value) => this.setState({churchCode: value});
  onChangeUsername = (value) => this.setState({username: value});
  onChangePassword = (value) => this.setState({password: value});

  renderInfoModal = () => {
    const {showOverLay} = this.state;
    return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={showOverLay}
        >
        <View style = {{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#6d6a6fe0"}}
        >
          <TouchableOpacity onPress={() => this.setState({showOverLay: false})}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
          <View style = {styles.modalView}>
          <View style = {styles.headerView}>
                  <Text style = {[styles.headingText, {textAlign: "center"}]}>
                      Need help to finding your organization code?
                  </Text>
              <Text style = {styles.infoText}>Here are some ideas for how to find it.</Text>
          </View>
        <View style = {styles.bodyView}>
                <View>
                    <Text style = {styles.headingText}>Email</Text>
                    <View  style = {styles.rowView}>
                        <View>
                            <Text style = {styles.infoText}>
                                Check to see if you received an 
                            </Text>
                            <Text style = {styles.infoText}>
                                email with your organization client code 
                            </Text>
                        </View>
                        <Image style = {styles.imageStyle} source = {Images.mail_icon}/>
                    </View>
                </View>
                <View>
                    <Text style = {styles.headingText}>Comember</Text>
                    <View  style = {styles.rowView}>
                        <View>
                            <Text style = {styles.infoText}>
                                Find Admin, Group Leads or Comember 
                            </Text>
                            <Text style = {styles.infoText}>
                                in your organization and ask them
                            </Text>
                        </View>
                        <Image style = {styles.imageStyle} source = {Images.group_icon}/>
                    </View>
                </View>
                <View>
                    <Text style = {styles.headingText}>Bulletin Board</Text>
                    <View  style = {styles.rowView}>
                    <View>
                            <Text style = {styles.infoText}>
                                See if there is any information in your
                            </Text>
                            <Text style = {styles.infoText}>
                                organization app or website about this
                            </Text>
                    </View>
                    <Image style = {styles.imageStyle} source = {Images.monitor_icon}/>
                    </View>
                </View>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
  render() {
    const {churchCode, username, password} = this.state;
    const {userType, naviagationHeader} = this.props.route.params;
    return (
      <View style={styles.container}>
        <Header headerLogo={Images.official_logo} headerText={naviagationHeader} />
        <ScrollView>
          <View style={styles.contentView}>
            <CustomTextInput
              onChangeText={this.onChangeChurchCode}
              textInputValue={churchCode}
              placeholder={'CLIENT CODE'}
              isInfo = {true}
              onInfoPress = {() =>this.setState({showOverLay: true})}
            />
            <CustomTextInput
              onChangeText={this.onChangeUsername}
              textInputValue={username}
              placeholder={'USERNAME'}
            />
            <CustomTextInput
              onChangeText={this.onChangePassword}
              textInputValue={password}
              placeholder={'PASSWORD'}
              secureTextEntry={true}
            />
            <DoubleButton
              leftButtonText={'Back'}
              leftButtonPress={() => this.handleBackBtn()}
              rightButtonText={'Login'}
              rightButtonPress={() => this.handleLoginBtn(userType)}
            />
          </View>
        </ScrollView>
        {this.renderInfoModal()}
      </View>
    );
  }
}


export default Login;