// @flow
import {StyleSheet, Platform} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    marginHorizontal: Metrics.ratio(15),
    marginVertical: Metrics.ratio(15),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  backgroundImage: {
    height: 100,
    width: 100,
    borderRadius: Metrics.ratio(200),
    alignSelf: 'center',
    borderColor: Colors.Torch_Red,
    borderWidth: Metrics.ratio(1)
  },
  frontPickerImage: {
    height: 35,
    width: 35,
  },
  uploadBtn: {
    backgroundColor: 'black',
    height: 40,
    width: 40,
    borderRadius: Metrics.ratio(100),
    marginTop: 80,
    justifyContent: 'center',
    marginLeft: Metrics.ratio(20),
    alignItems: 'center',
  },
});
