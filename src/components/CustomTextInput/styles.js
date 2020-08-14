// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  textInput: {
    marginHorizontal: Metrics.screenWidth * 0.05,
    fontSize: Metrics.ratio(14),
    color: Colors.Dove_Gray,
    borderBottomColor: Colors.Torch_Red,
    borderBottomWidth: Metrics.ratio(1),
    fontFamily: Fonts.type.AvenirNextLTProRegular,
    paddingBottom: Metrics.ratio(1),
    paddingHorizontal: 0,
    marginBottom: Metrics.ratio(16),
  },
});
