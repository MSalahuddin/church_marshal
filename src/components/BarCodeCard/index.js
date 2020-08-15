import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class BarCodeCard extends Component {
  static propTypes = {
    isCardDisabled: PropTypes.bool,
    cardStyle: PropTypes.object,
    cardPress: PropTypes.func,
    cardHeaderText: PropTypes.string,
    cardHeaderTextStyle: PropTypes.object,
    cardBodyImage: PropTypes.string,
    cardBodyImageStyle: PropTypes.object,
    titleText: PropTypes.string,
    titleTextStyle: PropTypes.object,
    subText: PropTypes.string,
    subTextStyle: PropTypes.object,
    rightText: PropTypes.string,
    rightTextStyle: PropTypes.object,
    rightSubText: PropTypes.string,
    rightSubTextStyle: PropTypes.object,
    cardFooterImage: PropTypes.string,
    cardFooterImageStyle: PropTypes.object,
    cardFooterText: PropTypes.string,
    cardFooterTextStyle: PropTypes.object,
  };

  static defaultProps = {
    isCardDisabled: false,
    cardStyle: undefined,
    cardPress: undefined,
    cardHeaderText: '',
    cardHeaderTextStyle: undefined,
    cardBodyImage: '',
    cardBodyImageStyle: undefined,
    titleText: '',
    titleTextStyle: undefined,
    subText: '',
    subTextStyle: undefined,
    rightText: '',
    rightTextStyle: undefined,
    rightSubText: '',
    rightSubTextStyle: undefined,
    cardFooterImage: '',
    cardFooterImageStyle: undefined,
    cardFooterText: '',
    cardFooterTextStyle: undefined,
  };

  render() {
    const {
      isCardDisabled,
      cardStyle,
      cardPress,
      cardHeaderText,
      cardHeaderTextStyle,
      cardBodyImage,
      cardBodyImageStyle,
      titleText,
      titleTextStyle,
      subText,
      subTextStyle,
      rightText,
      rightTextStyle,
      rightSubText,
      rightSubTextStyle,
      cardFooterImage,
      cardFooterImageStyle,
      cardFooterText,
      cardFooterTextStyle,
    } = this.props;

    return (
      <TouchableOpacity
        disabled={isCardDisabled}
        style={[styles.card, cardStyle]}
        onPress={cardPress}>
        {cardHeaderText ? (
          <Text style={[styles.cardHeaderText, cardHeaderTextStyle]}>
            {cardHeaderText}
          </Text>
        ) : null}
        <View style={styles.cardBody}>
          <View style={styles.cardBodyRow}>
            {cardBodyImage ? (
              <Image
                source={cardBodyImage}
                style={[styles.cardImage, cardBodyImageStyle]}
              />
            ) : null}
            <View
              style={
                cardBodyImage ? styles.titleView : styles.titleViewWithoutImg
              }>
              <Text style={[styles.titleText, titleTextStyle]}>
                {titleText}
              </Text>
              <Text style={[styles.subText, subTextStyle]}>{subText}</Text>
            </View>
          </View>
          <View style={styles.rightTextView}>
            <Text style={[styles.rightText, rightTextStyle]}>{rightText}</Text>
            <Text style={[styles.rightSubText, rightSubTextStyle]}>
              {rightSubText}
            </Text>
          </View>
        </View>
        {cardFooterImage || cardFooterText ? (
          <View style={[styles.cardFooter]}>
            <Image source={cardFooterImage} style={[cardFooterImageStyle]} />
            <Text style={[styles.cardFooterText, cardFooterTextStyle]}>
              {cardFooterText}
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>
    );
  }
}

export default BarCodeCard;
