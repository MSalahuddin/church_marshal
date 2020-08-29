import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';
import Orientation from 'react-native-orientation';
import {Metrics} from "../../theme";

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

  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentWillMount(){
    Orientation.getOrientation((err, orientation) => {
      if(orientation == "PORTRAIT")
        this.setState({datePickerWidth: Metrics.screenWidth * 0.9});
      else
      this.setState({datePickerWidth: Metrics.screenHeight * 0.95});
    });
  }



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
    const {datePickerWidth} = this.state;
    return (
      <DatePicker
        style={[styles.datePicker, datePickerStyle, {width: datePickerWidth}]}
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
