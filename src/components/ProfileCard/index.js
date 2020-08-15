import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Colors, Metrics, Images, Fonts} from '../../theme'
import styles from './styles';

class ProfileCard extends Component {
  static propTypes = {
    isCardDisabled: PropTypes.bool,
    cardStyle: PropTypes.object,
    cardPress: PropTypes.func,
    cardImage: PropTypes.string,
    cardImageStyle: PropTypes.object,
    titleText: PropTypes.string,
    titleTextStyle: PropTypes.object,
    subText: PropTypes.string,
    subTextStyle: PropTypes.object,
    rightIcon: PropTypes.string,
    rightIconStyle: PropTypes.object,
    rightIconPress: PropTypes.func,
    cardFooterText: PropTypes.string,
    cardFooterTextStyle: PropTypes.object,
  };
  static defaultProps = {
    isCardDisabled: true,
    cardStyle: undefined,
    cardPress: undefined,
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
              <Text style={[styles.titleText, titleTextStyle]}>
                {titleText}
              </Text>
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
          <View>
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
