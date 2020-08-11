import React, { Component } from "react";
import { Text, View, TouchableOpacity, Platform } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

import { Metrics, Colors } from "../../theme";

class Header extends Component {
  static propTypes = {
    headerText: PropTypes.string,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    leftBtnPress: PropTypes.func,
    rightBtnPress: PropTypes.func,
    leftIconStyle: PropTypes.object,
    headerTextStyle: PropTypes.object,
    rightIconStyle: PropTypes.object,
    rightIconSize: PropTypes.number,
    productQuantity: PropTypes.number,
    itemQuantity: PropTypes.number
  };
  static defaultProps = {
    headerText: "",
    leftIcon: undefined,
    rightIcon: undefined,
    leftBtnPress: undefined,
    leftIconStyle: undefined,
    headerTextStyle: undefined,
    rightIconStyle: undefined,
    rightIconSize: undefined,
    rightBtnPress: undefined,
    productQuantity: undefined,
    itemQuantity: undefined
  };

  render() {
    const {
      headerText,
      leftIcon,
      rightIcon,
      leftBtnPress,
      headerTextStyle,
      rightIconStyle,
      rightIconSize,
      rightBtnPress,
      itemQuantity
    } = this.props;

    return (
      <View style={[styles.container, Platform.OS === 'ios' && { paddingTop: Metrics.screenHeight * 0.035 }]}>
        <TouchableOpacity
          style={[styles.TouchableMenu, { justifyContent: 'center', alignItems: 'center', }]}
          onPress={leftBtnPress}
        >
          <Icon
            size={Metrics.ratio(20)}
            color={Colors.White}
            name={leftIcon}
          />
        </TouchableOpacity>

        <Text style={[styles.headerText, headerTextStyle,]}>{headerText}</Text>

        <TouchableOpacity
          onPress={rightBtnPress}
          style={[styles.TouchableMenu, rightIconStyle, { justifyContent: 'center', alignItems: 'center', }]}
        >
          {itemQuantity && (
            <View
              style={{
                width: Metrics.ratio(20),
                height: Metrics.ratio(20),
                borderRadius: Metrics.ratio(5),
                borderWidth: Metrics.ratio(2),
                borderColor: Colors.White,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                zIndex: 1,
                marginLeft: Metrics.ratio(-13),
                marginTop: Metrics.ratio(-10)
              }}
            >
              <Text
                style={{
                  color: Colors.White
                }}
              >
                {itemQuantity}
              </Text>
            </View>
          )}

          <Icon
            size={rightIconSize ? rightIconSize : Metrics.ratio(20)}
            color={Colors.White}
            name={rightIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;