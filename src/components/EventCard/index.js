import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class EventCard extends Component {
  static propTypes = {
    isCardDisabled: PropTypes.bool,
    cardPress: PropTypes.func,
    titleText: PropTypes.string,
    date: PropTypes.string,
    titleTextStyle: PropTypes.object,
    rightIcon: PropTypes.string,
    rightIconStyle: PropTypes.object,
    rightIconPress: PropTypes.func,
    time: PropTypes.string,
    cardFooterTextStyle: PropTypes.object,
    footerViewStyle: PropTypes.object,
    headerViewStyle: PropTypes.object,
  };
  static defaultProps = {
    isCardDisabled: true,
    cardStyle: undefined,
    cardPress: undefined,
    date: undefined,
    titleText: '',
    titleTextStyle: undefined,
    rightIcon: '',
    rightIconStyle: undefined,
    rightIconPress: undefined,
    time: '',
    cardFooterTextStyle: undefined,
    footerViewStyle: undefined,
    headerViewStyle: undefined,
  };

  render() {
    const {
      isCardDisabled,
      cardStyle,
      cardPress,
 
      titleText,
      titleTextStyle,
      rightIcon,
      rightIconStyle,
      rightIconPress,
      time,
      cardFooterTextStyle,
      date,
      footerViewStyle,
      headerViewStyle,
     
    } = this.props;
    
    return (
      <TouchableOpacity
        disabled={isCardDisabled}
        style={[styles.card, cardStyle]}
        onPress={cardPress}>
        <View style={styles.cardBody}>
          <View style={styles.cardBodyRow}>
            <View style={styles.titleView}>
              <View style = {headerViewStyle}>
                <Text style={[styles.titleText, titleTextStyle]}>
                  {titleText}
                </Text>
              </View>
              
            </View>
          </View>
          <TouchableOpacity onPress={rightIconPress}>
            <Image
              source={rightIcon}
              style={[styles.rightIcon, rightIconStyle]}
            />
          </TouchableOpacity>
        </View>
        {time ? (
          <View style = {[styles.footerView,footerViewStyle]}>
            <Text style={[styles.cardFooterText, cardFooterTextStyle]}>
              {time}
            </Text>
            <Text style={[styles.cardFooterText, cardFooterTextStyle]}>
              {date}
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>
    );
  }
}

export default EventCard;
