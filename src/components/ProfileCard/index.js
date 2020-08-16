import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class ProfileCard extends Component {
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
      checkedIcon,
      printLabelIcon,
      headerCheckedIconStyle,
      headerCheckedPress,
      headerPrintLabelPress
    } = this.props;
    
    return (
      <TouchableOpacity
        disabled={isCardDisabled}
        style={[styles.card, cardStyle]}
        onPress={cardPress}>
        <View style={styles.cardBody}>
          <View style={styles.cardBodyRow}>
            <Image
              source={cardImage}
              style={[styles.cardImage, cardImageStyle]}
            />
            <View style={styles.titleView}>
              <View style = {headerViewStyle}>
                <Text style={[styles.titleText, titleTextStyle]}>
                  {titleText}
                </Text>
                <TouchableOpacity onPress={headerPrintLabelPress}>
                  <Image
                    source={printLabelIcon}
                    style={[styles.rightIcon, cardImageStyle]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style = {headerCheckedIconStyle}  onPress={headerCheckedPress}>
                  <Image
                    source={checkedIcon}
                    style={[styles.rightIcon, cardImageStyle]}
                    />
                </TouchableOpacity>
              </View>
              {subText ? (
                <Text style={[styles.subText, subTextStyle]}>{subText}</Text>
              ) : null}
              
            </View>
          </View>
          <TouchableOpacity onPress={rightIconPress}>
            <Image
              source={rightIcon}
              style={[styles.rightIcon, rightIconStyle]}
            />
          </TouchableOpacity>
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
      </TouchableOpacity>
    );
  }
}

export default ProfileCard;
