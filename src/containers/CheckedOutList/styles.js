// @flow
import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Seashell,
  },
  contentView: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: Metrics.screenHeight * 0.03,
  },
  listView: {
    flex: 1,
    paddingTop: Metrics.screenHeight * 0.03,
  },
  dateText: {
    color: Colors.Black,
    fontSize: Metrics.ratio(16),
    textTransform: 'uppercase',
    paddingTop: Metrics.screenHeight * 0.03,
    fontFamily: Fonts.type.AvenirNextLTProBold,
    marginHorizontal: Metrics.screenWidth * 0.05,
  },
});
