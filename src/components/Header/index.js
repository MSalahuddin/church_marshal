import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import {Metrics, Colors} from '../../theme';

class Header extends Component {
  static propTypes = {
    leftIcon: PropTypes.string,
    leftBtnPress: PropTypes.func,
    leftIconStyle: PropTypes.object,
    leftIconSize: PropTypes.number,
    headerLogo: PropTypes.string,
    headerLogoStyle: PropTypes.object,
    headerText: PropTypes.string,
    headerTextStyle: PropTypes.object,
    rightIcon: PropTypes.string,
    rightBtnPress: PropTypes.func,
    rightIconStyle: PropTypes.object,
    rightIconSize: PropTypes.number,
  };
  static defaultProps = {
    leftIcon: undefined,
    leftBtnPress: undefined,
    leftIconStyle: undefined,
    leftIconSize: undefined,
    headerLogo: '',
    headerLogoStyle: undefined,
    headerText: '',
    headerTextStyle: undefined,
    rightIcon: undefined,
    rightBtnPress: undefined,
    rightIconStyle: undefined,
    rightIconSize: undefined,
  };

  render() {
    const {
      leftIcon,
      leftBtnPress,
      leftIconStyle,
      leftIconSize,
      headerLogo,
      headerLogoStyle,
      headerText,
      headerTextStyle,
      rightIcon,
      rightIconStyle,
      rightBtnPress,
      rightIconSize,
    } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.TouchableMenu, leftIconStyle]}
          onPress={leftBtnPress}>
          <Icon
            size={leftIconSize ? leftIconSize : Metrics.ratio(20)}
            color={Colors.White}
            name={leftIcon}
          />
        </TouchableOpacity>
        <View style={styles.centerView}>
          {headerLogo && (
            <Image
              source={headerLogo}
              style={[styles.headerLogo, headerLogoStyle]}
            />
          )}
          <Text style={[styles.headerText, headerTextStyle]}>{headerText}</Text>
        </View>
        <TouchableOpacity
          onPress={rightBtnPress}
          style={[styles.TouchableMenu, rightIconStyle]}>
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
