import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import styles from './styles';
import Orientation from 'react-native-orientation';

import {Images, Metrics} from '../../theme';

import ImagePicker from 'react-native-image-picker';

class EditProfileImage extends Component {
  state = {
    profileImage: '',
    avatarSource: '',
    isloading: false,
    token: '',
  };
  
  componentWillMount(){
    Orientation.getOrientation((err, orientation) => {
      if(orientation == "PORTRAIT")
        this.setState({positionRight: 130});
      else
      this.setState({positionRight: 300});
    });
  }


  uploadPicture = () => {
    let options = {};

    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {

        // You can also display the image using data:
        const source = {uri: 'data:image/jpeg;base64,' + response.data};
        console.log(source,'sssssssssssssllllll')
        let url = (Platform.OS==='android') ? response.uri : response.uri.replace('file://', '')
        let path = response.uri;
        if (Platform.OS === "ios") {
          path = "~" + path.substring(path.indexOf("/Documents"));
        }
        if (!response.fileName) response.fileName = path.split("/").pop();

        if(Platform.OS === "android"){
          this.setState(
            {
              uploadImage: {
                uri: url,
                type: response.type,
                name: response.fileName,
              },
              avatarSource :source
            },
          );
        }else{
          this.setState(
            {
              uploadImage: {
                uri: url,
                type: response.type,
              },
              avatarSource: source,
            },
          );
        }
      }
    });
  };

  render() {
    const {item} = this.props;
    const {
      avatarSource,
      profileThumbnail,
      positionRight
    } = this.state;
    

    return (
      <View style={{paddingVertical: 15}}>
        <View>
          <Image
            source={ avatarSource }
            style={[styles.backgroundImage, this.props.customBackgroundImage]}
          />
          <View
            style={{
              borderRadius: Metrics.ratio(200),
              position: 'absolute',
              bottom: 0,
              right: positionRight,
            }}>
            <TouchableOpacity onPress={this.uploadPicture}>
              <Image
                source={Images.profile_camera_icon}
                style={styles.frontPickerImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default EditProfileImage;
