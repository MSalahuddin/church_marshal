import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';

import styles from './styles';

class CustomDatePicker extends Component {
  static propTypes = {
    date: PropTypes.string,
    placeholder: PropTypes.string,
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    onChangeDate: PropTypes.func,
    datePickerStyle: PropTypes.object,
    dateInputStyle: PropTypes.object,
    dateTextStyle: PropTypes.object,
    placeholderTextStyle: PropTypes.object,
  };
  static defaultProps = {
    date: '',
    placeholder: '',
    minDate: '',
    maxDate: '',
    onChangeDate: undefined,
    datePickerStyle: undefined,
    dateInputStyle: undefined,
    dateTextStyle: undefined,
    placeholderTextStyle: undefined,
  };

  render() {
    const {
      date,
      placeholder,
      minDate,
      maxDate,
      onChangeDate,
      datePickerStyle,
      dateInputStyle,
      dateTextStyle,
      placeholderTextStyle,
    } = this.props;

    return (
      <DatePicker
        style={[styles.datePicker, datePickerStyle]}
        date={date}
        mode="date"
        placeholder={placeholder}
        format="MMMM Do YYYY"
        minDate={minDate}
        maxDate={maxDate}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateInput: {...styles.dateInput, ...dateInputStyle},
          dateText: {...styles.dateText, ...dateTextStyle},
          placeholderText: {...styles.placeholderText, ...placeholderTextStyle},
        }}
        onDateChange={onChangeDate}
      />
    );
  }
}

export default CustomDatePicker;
