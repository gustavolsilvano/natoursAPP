import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../src/screens/StackScreens/LoginScreen';
import HomeScreen from '../src/screens/TabScreens/HomeScreen';
import ProfileScreen from '../src/screens/TabScreens/ProfileScreen';
import DetailScreen from '../src/screens/DetailTabScreen/DetailScreen';
import MapScreen from '../src/screens/DetailTabScreen/MapScreen';
import ReviewScreen from '../src/screens/DetailTabScreen/ReviewScreen';

import Header from '../src/components/Header';
import HeaderDetail from '../src/components/TopHeaderDetail';

import { firstColor } from '../src/constant/constant';

const MainNavigator = createBottomTabNavigator({
  Tours: HomeScreen,
  Profile: ProfileScreen
});

const DetailNavigator = createBottomTabNavigator(
  {
    Detail: DetailScreen,
    Map: MapScreen,
    Review: ReviewScreen
  },
  {
    navigationOptions: {
      headerTitle: () => <HeaderDetail />
    }
  }
);

const MainStack = createStackNavigator(
  {
    Login: LoginScreen,
    Main: MainNavigator,
    Detail: DetailNavigator
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: firstColor
      },
      headerTitle: () => <Header />
    }
  }
);

export default createAppContainer(MainStack);
