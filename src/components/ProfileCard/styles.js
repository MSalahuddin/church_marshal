// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  button: {
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
  buttonText: {
    textAlign: 'center',
    fontSize: Metrics.ratio(14),
    color: Colors.White,
    textTransform: 'uppercase',
    fontFamily: Fonts.type.AvenirNextLTProBold,
  },
});
