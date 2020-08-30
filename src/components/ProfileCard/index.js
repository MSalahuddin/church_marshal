import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {Metrics} from "../../theme";

class MemberListCard extends Component {
  
  static propTypes = {
    isCardDisabled: PropTypes.bool,
    cardStyle: PropTypes.object,
    cardPress: PropTypes.func,
    cardImage: PropTypes.string,
    cardImageStyle: PropTypes.object,
    titleText: PropTypes.string,
    date: PropTypes.string,
    titleTextStyle: PropTypes.object,
    subText: PropTypes.string,
    subTextStyle: PropTypes.object,
    rightIcon: PropTypes.string,
    rightIconStyle: PropTypes.object,
    rightIconPress: PropTypes.func,
    cardFooterText: PropTypes.string,
    cardFooterTextStyle: PropTypes.object,
    footerViewStyle: PropTypes.object,
    headerViewStyle: PropTypes.object,
    checkedIcon: PropTypes.string,
    printLabelIcon: PropTypes.string,
    headerCheckedIconStyle: PropTypes.object,
    headerCheckedPress: PropTypes.func,
    headerPrintLabelPress: PropTypes.func,
  };
  static defaultProps = {
    isCardDisabled: true,
    cardStyle: undefined,
    cardPress: undefined,
    date: undefined,
    cardImage: '',
    cardImageStyle: undefined,
    titleText: '',
    titleTextStyle: undefined,
    subText: '',
    subTextStyle: undefined,
    rightIcon: '',
    rightIconStyle: undefined,
    rightIconPress: undefined,
    cardFooterText: '',
    cardFooterTextStyle: undefined,
    footerViewStyle: undefined,
    headerViewStyle: undefined,
    checkedIcon: undefined,
    printLabelIcon: undefined,
    headerCheckedIconStyle: undefined,
    headerCheckedPress: undefined,
    headerPrintLabelPress: undefined
  };

  constructor(props){
    super(props);
    this.state = {
      showOverLay: false
    }
  }

  showOverLay = () => {
    const {cardImage} = this.props
    const {showOverLay} = this.state;
    return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={showOverLay}
        >
      <View style = {{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#6d6a6fe0"}}
      >
        <View style = {{backgroundColor: "white", paddingVertical: Metrics.ratio(10)}}>
          <TouchableOpacity onPress={() => this.setState({showOverLay: false})}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
          <View style = {{ 
            justifyContent: "center", 
            alignItems: "center"}}
          >
            <Image
              source={cardImage}
              resizeMode="contain"
              style={{width: Metrics.screenWidth, height: Metrics.screenHeight * 0.3}}
          />
          </View>
        </View>
      </View>
    </Modal>
    )
  }

  render() {
    const {
      isCardDisabled,
      cardStyle,
      cardPress,
      cardImage,
      cardImageStyle,
      titleText,
      titleTextStyle,
      subText,
      subTextStyle,
      rightIcon,
      rightIconStyle,
      rightIconPress,
      cardFooterText,
      cardFooterTextStyle,
      date,
      footerViewStyle,
      headerViewStyle,
      printLabelIcon,
      headerPrintLabelPress
    } = this.props;

    return (
      <TouchableOpacity
        disabled={isCardDisabled}
        style={[styles.card, cardStyle]}
        onPress={cardPress}>
        <View style={styles.cardBody}>
          <View style={styles.cardBodyRow}>
       
            <TouchableOpacity 
              onPress = {() => this.setState({showOverLay: true})}
              >
             <Image
              source={cardImage}
              resizeMode="contain"
              style={[
                styles.cardImage, cardImageStyle
                ]}
            />
             </TouchableOpacity>
            
            <View style={styles.titleView}>
              <View style = {[headerViewStyle, ]}>
                <Text style={[styles.titleText, titleTextStyle]}>
                  {titleText}
                </Text>
                
              </View>
              {subText ? (
                <Text style={[styles.subText, subTextStyle]}>{subText}</Text>
              ) : null}
              
            </View>
          </View>
          <View style = {{flexDirection: "row"}}>
          {printLabelIcon && <TouchableOpacity onPress={headerPrintLabelPress}>
                  <Image
                    source={printLabelIcon}
                    style={[styles.rightIcon, cardImageStyle]}
                    />
                </TouchableOpacity>}
          <TouchableOpacity onPress={rightIconPress}>
            <Image
              source={rightIcon}
              style={[styles.rightIcon, rightIconStyle]}
            />
          </TouchableOpacity>
          </View>
        </View>
        {cardFooterText ? (
          <View style = {footerViewStyle}>
            {subText ? (
                <Text style={[styles.cardFooterText, cardFooterTextStyle]}>{date}</Text>
              ) : null}
            <Text style={[styles.cardFooterText, cardFooterTextStyle]}>
              {cardFooterText}
            </Text>
          </View>
        ) : null}
        {this.showOverLay()}
      </TouchableOpacity>
    );
  }
}

export default MemberListCard;
