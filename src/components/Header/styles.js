// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Torch_Red,
    height: Metrics.screenHeight * 0.095,
    flexDirection: 'row',
  },
  TouchableMenu: {
    width: Metrics.ratio(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    // width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogo: {
    width: Metrics.ratio(45),
    height: Metrics.ratio(45),
    marginRight: Metrics.ratio(8),
  },
  rightIcon: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
    marginRight: Metrics.ratio(8),
  },
  headerText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.AvenirNextLTProBold,
    color: Colors.White,
  },
});
