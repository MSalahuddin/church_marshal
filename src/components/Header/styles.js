// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors, Fonts } from "../../theme";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Torch_Red,
    height: Metrics.screenHeight * 0.095,
    flexDirection: "row"
  },
  menuImage: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25)
  },
  TouchableMenu: {
    width: Metrics.ratio(50),
  },
  headerText: {
    textTransform: 'uppercase',
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    textAlign: "center",
    alignSelf: 'center',
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.AvenirNextLTProBold,
    color: Colors.White,
  }
});
