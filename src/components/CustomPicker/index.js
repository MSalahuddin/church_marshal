import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import {Colors, Metrics} from '../../theme';

class CustomPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
    };
  }

  static propTypes = {
    selectedValue: PropTypes.string,
    onChangeValue: PropTypes.func,
    itemList: PropTypes.array,
    pickerStyle: PropTypes.object,
    pickerTextStyle: PropTypes.object,
    pickerItemViewStyle: PropTypes.object,
    pickerItemTextStyle: PropTypes.object,
  };
  static defaultProps = {
    selectedValue: '',
    onChangeValue: undefined,
    itemList: [],
    pickerStyle: undefined,
    pickerTextStyle: undefined,
    pickerItemViewStyle: undefined,
    pickerItemTextStyle: undefined,
  };

  handleDropDown = () => {
    const {showDropDown} = this.state;
    this.setState({showDropDown: showDropDown ? false : true});
  };

  handleSelectItem = (value) => {
    const {onChangeValue} = this.props;
    this.setState({showDropDown: false}, () => onChangeValue(value));
  };

  render() {
    const {
      selectedValue,
      itemList,
      pickerStyle,
      pickerTextStyle,
      pickerItemViewStyle,
      pickerItemTextStyle,
    } = this.props;
    const {showDropDown} = this.state;

    return (
      <View>
        <TouchableOpacity
          style={[
            styles.picker,
            pickerStyle,
            {marginBottom: showDropDown ? Metrics.ratio(0) : Metrics.ratio(16)},
          ]}
          onPress={() => this.handleDropDown()}>
          <Text style={[styles.pickerText, pickerTextStyle]}>
            {selectedValue}
          </Text>
          <Icon
            size={Metrics.ratio(14)}
            color={Colors.Dove_Gray}
            name={'chevron-down'}
          />
        </TouchableOpacity>
        {showDropDown && (
          <View style={[styles.pickerItemView, pickerItemViewStyle]}>
            <ScrollView>
              {itemList &&
                itemList.map((val, ind) => {
                  return (
                    <TouchableOpacity
                      onPress={() => this.handleSelectItem(val)}>
                      <Text
                        style={[
                          styles.pickerItemText,
                          pickerItemTextStyle,
                          {
                            marginBottom:
                              ind === itemList.length
                                ? Metrics.ratio(0)
                                : Metrics.ratio(12),
                          },
                        ]}>
                        {val}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}

export default CustomPicker;
