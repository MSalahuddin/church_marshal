/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigator from '../src/navigation';
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }
  render() {
    return (
        <Navigator/>
    );
  }
}
