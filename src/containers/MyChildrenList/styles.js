// @flow
import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Seashell,
  },
  contentView: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.Seashell,
    paddingBottom: Metrics.screenHeight * 0.03,
  },
  listView: {
    flex: 1,
    marginBottom: Metrics.screenHeight * 0.03,
    paddingTop: Metrics.screenHeight * 0.03,
  },
});
