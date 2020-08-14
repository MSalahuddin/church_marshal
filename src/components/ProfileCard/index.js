import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class ProfileCard extends Component {
  static propTypes = {
    btnText: PropTypes.string,
    btnPress: PropTypes.func,
    btnStyle: PropTypes.object,
    btnTextStyle: PropTypes.object,
  };
  static defaultProps = {
    btnText: '',
    btnPress: undefined,
    btnStyle: undefined,
    btnTextStyle: undefined,
  };

  render() {
    const { btnText, btnPress, btnStyle, btnTextStyle } = this.props;
    return (
      <TouchableOpacity
        disabled={true}
        style={{
          backgroundColor: Colors.White,
          marginHorizontal: Metrics.screenWidth * 0.05,
          marginBottom: Metrics.ratio(24),
          padding: Metrics.ratio(8),
          borderRadius: Metrics.ratio(5),
          shadowColor: Colors.Black,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={Images.profile_img}
              style={{
                width: Metrics.ratio(60),
                height: Metrics.ratio(60),
              }}
            />
            <View
              style={{
                marginLeft: Metrics.ratio(8),
                width: Metrics.screenWidth * 0.57,
              }}>
              <Text
                style={{
                  fontSize: Metrics.ratio(16),
                  textTransform: 'uppercase',
                  fontFamily: Fonts.type.AvenirNextLTProBold,
                  color: Colors.Torch_Red,
                  marginBottom: Metrics.ratio(6),
                }}>
                Alice, Johnson
                      </Text>
              <Text
                style={{
                  fontSize: Metrics.ratio(14),
                  fontFamily: Fonts.type.AvenirNextLTProBold,
                  color: Colors.Dove_Gray,
                }}>
                3rd Grade
                      </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              source={Images.delete_icon}
              style={{
                width: Metrics.ratio(25),
                height: Metrics.ratio(25),
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'right',
              fontSize: Metrics.ratio(14),
              fontFamily: Fonts.type.AvenirNextLTProBold,
              color: Colors.Dove_Gray,
            }}>
            12:30 PM
                  </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ProfileCard;
