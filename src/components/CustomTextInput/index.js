import React, {Component} from 'react';
import {TextInput, View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import {Colors, Images} from '../../theme';

class CustomTextInput extends Component {
  static propTypes = {
    textInputStyle: PropTypes.object,
    onChangeText: PropTypes.func,
    textInputValue: PropTypes.string,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    onInfoPress: PropTypes.func,
    isInfo: PropTypes.bool,
  };
  static defaultProps = {
    textInputStyle: undefined,
    onChangeText: undefined,
    textInputValue: '',
    placeholder: '',
    secureTextEntry: false,
    onInfoPress: undefined,
    isInfo: false
  };

  render() {
    const {
      textInputStyle,
      onChangeText,
      textInputValue,
      placeholder,
      secureTextEntry,
      onInfoPress,
      isInfo
    } = this.props;

    return (
      <View style = {{flexDirection: "row"}}>
          <TextInput
        style={[styles.textInput, textInputStyle]}
        onChangeText={onChangeText}
        value={textInputValue}
        placeholder={placeholder}
        placeholderTextColor={Colors.Dove_Gray}
        secureTextEntry={secureTextEntry}
      />
       {
         isInfo &&
         <TouchableOpacity onPress = {onInfoPress}>
           <Image style = {styles.infoStyle} source = {Images.info_icon}/>
         </TouchableOpacity>
       }
      </View>
    );
  }
}

export default CustomTextInput;
