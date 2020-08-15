// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  card: {
    backgroundColor: Colors.White,
    marginHorizontal: Metrics.screenWidth * 0.05,
    marginBottom: Metrics.ratio(24),
    padding: Metrics.ratio(8),
    borderRadius: Metrics.ratio(5),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardBodyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: Metrics.ratio(65),
    height: Metrics.ratio(65),
    marginLeft: Metrics.screenWidth * 0.05,
    marginRight: Metrics.screenWidth * 0.025,
  },
  titleText: {
    flex: 1,
    fontSize: Metrics.ratio(18),
    textTransform: 'uppercase',
    fontFamily: Fonts.type.AvenirNextLTProBold,
    color: Colors.Torch_Red,
    marginLeft: Metrics.screenWidth * 0.025,
    marginRight: Metrics.screenWidth * 0.05,
  },
});
