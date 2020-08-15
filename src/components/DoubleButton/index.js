import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class DoubleButton extends Component {
  static propTypes = {
    rowViewStyle: PropTypes.object,
    leftButtonText: PropTypes.string,
    leftButtonPress: PropTypes.func,
    leftButtonStyle: PropTypes.object,
    leftButtonTextStyle: PropTypes.object,
    rightButtonText: PropTypes.string,
    rightButtonPress: PropTypes.func,
    rightButtonStyle: PropTypes.object,
    rightButtonTextStyle: PropTypes.object,
  };
  static defaultProps = {
    rowViewStyle: undefined,
    leftButtonText: '',
    leftButtonPress: undefined,
    leftButtonStyle: undefined,
    leftButtonTextStyle: undefined,
    rightButtonText: '',
    rightButtonPress: undefined,
    rightButtonStyle: undefined,
    rightButtonTextStyle: undefined,
  };

  render() {
    const {
      rowViewStyle,
      leftButtonText,
      leftButtonPress,
      leftButtonStyle,
      leftButtonTextStyle,
      rightButtonText,
      rightButtonPress,
      rightButtonStyle,
      rightButtonTextStyle,
    } = this.props;
    return (
      <View style={[styles.row, rowViewStyle]}>
        <TouchableOpacity
          style={[styles.button, styles.buttonLeft, leftButtonStyle]}
          onPress={leftButtonPress}>
          <Text style={[styles.buttonText, leftButtonTextStyle]}>
            {leftButtonText}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonRight, rightButtonStyle]}
          onPress={rightButtonPress}>
          <Text style={[styles.buttonText, rightButtonTextStyle]}>
            {rightButtonText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DoubleButton;
