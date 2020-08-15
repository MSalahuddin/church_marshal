/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import { Actions } from "react-native-router-flux";
import SplashScreen from 'react-native-splash-screen';

// import SelectUser from './containers/SelectUser';
import Login from './containers/Login';
// import MyChildrenList from './containers/MyChildrenList';
// import CheckedOutList from './containers/CheckedOutList';

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
      // <SelectUser />
      <Login />
      // <MyChildrenList />
      // <CheckedOutList />
    );
  }
}
