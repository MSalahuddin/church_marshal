// @flow
import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../theme";

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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.ratio(32),
  },
  button: {
    backgroundColor: Colors.Torch_Red,
    borderRadius: Metrics.ratio(5),
    width: Metrics.screenWidth * 0.42,
    paddingVertical: Metrics.ratio(8),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonLeft: {
    marginLeft: Metrics.screenWidth * 0.05,
    marginRight: Metrics.screenWidth * 0.03,
  },
  buttonRight: {
    marginRight: Metrics.screenWidth * 0.05,
    marginLeft: Metrics.screenWidth * 0.03,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: Metrics.ratio(14),
    color: Colors.White,
    textTransform: 'uppercase',
    fontFamily: Fonts.type.AvenirNextLTProBold,
  }
});
