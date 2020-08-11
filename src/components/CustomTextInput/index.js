import React, { Component } from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

import { Colors } from "../../theme";

class CustomTextInput extends Component {
  static propTypes = {
    textInputStyle: PropTypes.object,
    onChangeText: PropTypes.func,
    textInputValue: PropTypes.string,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
  };
  static defaultProps = {
    textInputStyle: undefined,
    onChangeText: undefined,
    textInputValue: '',
    placeholder: '',
    secureTextEntry: false,
  };

  render() {
    const {
      textInputStyle,
      onChangeText,
      textInputValue,
      placeholder,
      secureTextEntry,
    } = this.props;

    return (
      <TextInput
        style={[styles.textInput, textInputStyle]}
        onChangeText={onChangeText}
        value={textInputValue}
        placeholder={placeholder}
        placeholderTextColor={Colors.Dove_Gray}
        secureTextEntry={secureTextEntry}
      />
    );
  }
}

export default CustomTextInput;