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
    backgroundColor: Colors.Seashell,
    paddingVertical: Metrics.screenHeight * 0.08,
  },
});
