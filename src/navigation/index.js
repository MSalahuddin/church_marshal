import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react';
import LoginScreen from '../containers/Login';
import SelectUserScreen from '../containers/SelectUser';
import MyChildrenList from '../containers/MyChildrenList';
import CheckedOutList from '../containers/CheckedOutList';
const Stack = createStackNavigator();

function Navigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator  
            screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="CheckedOutList" component={CheckedOutList} />
          <Stack.Screen name="SelectUserScreen" component={SelectUserScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="MyChildrenList" component={MyChildrenList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigator