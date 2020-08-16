// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Metrics.screenWidth * 0.05,
    borderBottomColor: Colors.Torch_Red,
    borderBottomWidth: Metrics.ratio(1),
    paddingVertical: Metrics.ratio(6),
  },
  pickerText: {
    color: Colors.Dove_Gray,
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.AvenirNextLTProBold,
    textTransform: 'uppercase',
  },
  pickerItemView: {
    marginHorizontal: Metrics.screenWidth * 0.05,
    paddingVertical: Metrics.ratio(12),
  },
  pickerItemText: {
    paddingBottom: Metrics.ratio(4),
    color: Colors.Dove_Gray,
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.AvenirNextLTProBold,
    borderBottomColor: Colors.Torch_Red,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
