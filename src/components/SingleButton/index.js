import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    btnText: PropTypes.string,
    btnPress: PropTypes.func,
    btnStyle: PropTypes.object,
    btnTextStyle: PropTypes.object,
  };
  static defaultProps = {
    btnText: '',
    btnPress: undefined,
    btnStyle: undefined,
    btnTextStyle: undefined,
  };

  render() {
    const {btnText, btnPress, btnStyle, btnTextStyle} = this.props;
    return (
      <TouchableOpacity style={[styles.button, btnStyle]} onPress={btnPress}>
        <Text style={[styles.buttonText, btnTextStyle]}>{btnText}</Text>
      </TouchableOpacity>
    );
  }
}

export default Header;
