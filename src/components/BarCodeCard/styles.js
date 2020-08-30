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
  cardHeaderText: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.AvenirNextLTProBold,
    color: Colors.Dove_Gray,
    marginBottom: Metrics.ratio(12),
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardBodyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: Metrics.ratio(60),
    height: Metrics.ratio(60),
  },
  titleView: {
    marginLeft: Metrics.ratio(6),
    width: Metrics.screenWidth * 0.39,
  },
  titleViewWithoutImg: {
    width: Metrics.screenWidth * 0.55,
  },
  titleText: {
    fontSize: Metrics.ratio(16),
    textTransform: 'uppercase',
    fontFamily: Fonts.type.AvenirNextLTProBold,
    color: Colors.Torch_Red,
  },
  subText: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.AvenirNextLTProBold,
    color: Colors.Dove_Gray,
    marginTop: Metrics.ratio(6),
  },
  rightTextView: {
    width: Metrics.screenWidth * 0.27,
  },
  rightText: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.AvenirNextLTProBold,
    color: Colors.Dove_Gray,
    textAlign: 'right',
  },
  rightSubText: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.AvenirNextLTProBold,
    color: Colors.Dove_Gray,
    marginTop: Metrics.ratio(6),
    textAlign: 'right',
  },
  cardFooter: {
    marginTop: Metrics.ratio(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  cardFooterText: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.AvenirNextLTProBold,
    color: Colors.Dove_Gray,
  },
  closeButton: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    margin: 10,
    alignSelf: 'flex-end',
  },
});
