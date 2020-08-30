// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  textInput: {
    flex: 1,
    marginHorizontal: Metrics.screenWidth * 0.05,
    fontSize: Metrics.ratio(14),
    color: Colors.Dove_Gray,
    borderBottomColor: Colors.Torch_Red,
    borderBottomWidth: Metrics.ratio(1),
    fontFamily: Fonts.type.AvenirNextLTProBold,
    paddingBottom: Metrics.ratio(1),
    paddingHorizontal: 0,
    marginBottom: Metrics.ratio(16),
  },
  infoStyle: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
    marginRight: Metrics.ratio(10),
    flex: 0
  }
});
