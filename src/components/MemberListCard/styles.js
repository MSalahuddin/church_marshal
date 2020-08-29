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
  cardImage: {
    width: Metrics.ratio(60),
    height: Metrics.ratio(60),
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
  cardFooterText: {
    textAlign: 'right',
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.AvenirNextLTProBold,
    color: Colors.Dove_Gray,
  },
  cardTypeText: {
    textAlign: 'left',
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.AvenirNextLTProBold,
    color: Colors.Dove_Gray,
    marginLeft: Metrics.ratio(8),
  },
  titleView: {
    marginLeft: Metrics.ratio(8),
    width: Metrics.screenWidth * 0.57,
  },
  titleText: {
    fontSize: Metrics.ratio(16),
    textTransform: 'uppercase',
    fontFamily: Fonts.type.AvenirNextLTProBold,
    color: Colors.Torch_Red,
    width: Metrics.screenWidth * 0.5
  },
  subText: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.AvenirNextLTProBold,
    color: Colors.Dove_Gray,
    marginTop: Metrics.ratio(6),
  },
  rightIcon: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
  },
  footerView: {
    flexDirection: "row",
    marginTop: Metrics.ratio(5),
    marginLeft: Metrics.screenWidth * 0.19,
    justifyContent: "space-between",
  },
  closeButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    margin: 10,
    alignSelf: 'flex-end',
  },
});
