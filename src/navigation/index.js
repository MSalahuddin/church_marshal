import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../containers/Login';
import SelectUser from '../containers/SelectUser';
import MyChildrenList from '../containers/MyChildrenList';
import SelectList from '../containers/SelectList';
import TagForParent from '../containers/TagForParent';
import CheckedOutList from '../containers/CheckedOutList';
import ChildCheckInList from '../containers/ChildCheckIn';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SelectUser" component={SelectUser} />
        <Stack.Screen name="TagForParent" component={TagForParent} />
        <Stack.Screen name="SelectList" component={SelectList} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyChildrenList" component={MyChildrenList} />
        <Stack.Screen name="CheckedOutList" component={CheckedOutList} />
        <Stack.Screen name="ChildCheckInList" component={ChildCheckInList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
