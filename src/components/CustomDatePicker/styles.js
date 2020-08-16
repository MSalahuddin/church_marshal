// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  datePicker: {
    width: Metrics.screenWidth * 0.9,
    marginHorizontal: Metrics.screenWidth * 0.05,
    borderWidth: 0,
    borderBottomColor: Colors.Torch_Red,
    borderBottomWidth: Metrics.ratio(1),
    marginBottom: Metrics.ratio(16),
  },
  dateInput: {
    borderWidth: 0,
    alignItems: 'flex-start',
  },
  dateText: {
    fontSize: Metrics.ratio(14),
    color: Colors.Dove_Gray,
    fontFamily: Fonts.type.AvenirNextLTProBold,
  },
  placeholderText: {
    fontSize: Metrics.ratio(14),
    color: Colors.Dove_Gray,
    fontFamily: Fonts.type.AvenirNextLTProBold,
    textTransform: 'uppercase',
  },
});
