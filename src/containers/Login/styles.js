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
    backgroundColor: Colors.Seashell,
    paddingVertical: Metrics.screenHeight * 0.08,
  },
  headerView: {
    alignItems: "center",
},
  bodyView: {

  },
  rowView: {
      flexDirection: "row",
      justifyContent: "space-between"
  },
  headingText: {
    fontSize: Metrics.ratio(18),
  },
  infoText: {
    fontSize: Metrics.ratio(11),
    color: "#464c4f4d",
    fontFamily: Fonts.type.AvenirNextLTProBold
  },
  imageStyle: {
      width: Metrics.ratio(30),
      height: Metrics.ratio(30)
  },
  modalView :{
    marginHorizontal: Metrics.ratio(10),
    backgroundColor: "white",
    paddingHorizontal: Metrics.ratio(10),
    paddingBottom: Metrics.screenHeight * 0.08,
    paddingTop: Metrics.screenHeight * 0.05,
    borderRadius: Metrics.ratio(8),
    marginVertical: Metrics.ratio(20)
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
