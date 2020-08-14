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
    backgroundColor: Colors.Seashell,
    paddingVertical: Metrics.screenHeight * 0.08,
  },
  labelText: {
    fontSize: Metrics.ratio(14),
    textTransform: 'uppercase',
    fontFamily: Fonts.type.AvenirNextLTProBold,
    marginHorizontal: Metrics.screenWidth * 0.08,
    marginBottom: Metrics.ratio(8),
  },
  chooseBtn: {
    backgroundColor: Colors.White,
    marginHorizontal: Metrics.screenWidth * 0.05,
    marginBottom: Metrics.ratio(24),
    paddingVertical: Metrics.ratio(18),
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
  chooseBtnText: {
    fontSize: Metrics.ratio(16),
    textTransform: 'uppercase',
    fontFamily: Fonts.type.AvenirNextLTProBold,
    textAlign: 'center',
    color: Colors.Torch_Red,
  },
  backBtn: {
    backgroundColor: Colors.Torch_Red,
    alignSelf: 'flex-end',
    borderRadius: Metrics.ratio(5),
    width: Metrics.screenWidth * 0.3,
    paddingVertical: Metrics.ratio(12),
    marginHorizontal: Metrics.screenWidth * 0.05,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  backBtnText: {
    textAlign: 'center',
    fontSize: Metrics.ratio(14),
    color: Colors.White,
    textTransform: 'uppercase',
    fontFamily: Fonts.type.AvenirNextLTProBold,
  },
});
