import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { createStackNavigator } from 'react-navigation-stack';

// AUTH SCREENS
import LoginScreen from '../src/screens/AuthScreen/LoginScreen';
import LoadingUserByTokenScreen from '../src/screens/AuthScreen/LoadingUserByTokenScreen';
import FirstLoginScreen from '../src/screens/AuthScreen/FirstLoginScreen';
import ForgotPasswordScreen from '../src/screens/AuthScreen/ForgotPasswordScreen';

// MAIN SCREEN
import HomeScreen from '../src/screens/TabScreens/HomeScreen';

// TOUR SCREENS
import DetailScreen from '../src/screens/DetailTabScreen/DetailScreen';
import MapScreen from '../src/screens/DetailTabScreen/MapScreen';
import ReviewScreen from '../src/screens/DetailTabScreen/ReviewScreen';

// ACCOUNT SCREENS
import EditScreen from '../src/screens/AccountTabScreen/EditScreen/';
import PasswordScreen from '../src/screens/AccountTabScreen/PasswordScreen';
import MyBookingsScreen from '../src/screens/AccountTabScreen/MyBookingsScreen';
import MyReviewsScreen from '../src/screens/AccountTabScreen/MyReviewsScreen';
import MyBillingScreen from '../src/screens/AccountTabScreen/MyBillingScreen';

// CREATE ACCOUNT
import PersonalScreen from '../src/screens/AuthScreen/CreateAccoutTab/PersonalScreen';
import AdressScreen from '../src/screens/AuthScreen/CreateAccoutTab/AdressScreen';
import PhotoNSubmitScreen from '../src/screens/AuthScreen/CreateAccoutTab/PhotoNSubmitScreen';

import Header from '../src/components/Header';
import HeaderDetail from '../src/components/TopHeaderDetail';
import { Feather } from '@expo/vector-icons';

import {
  firstColor,
  width,
  height,
  textColor_2,
  firstColor_minor,
  firstColor_major
} from '../src/constant/constant';

const DetailNavigator = createMaterialTopTabNavigator(
  {
    Detail: DetailScreen,
    Map: MapScreen,
    Review: ReviewScreen
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: firstColor_major,
      inactiveTintColor: firstColor_minor,
      tabStyle: { backgroundColor: firstColor }
    },
    navigationOptions: {
      headerTitle: () => <HeaderDetail />
    }
  }
);

const AccountNavigator = createMaterialTopTabNavigator(
  {
    EditScreen: EditScreen,
    Password: PasswordScreen,
    MyBookings: MyBookingsScreen,
    MyReviews: MyReviewsScreen,
    MyBilling: MyBillingScreen
  },
  {
    tabBarOptions: {
      showIcon: true,
      labelStyle: {
        fontSize: 8,
        color: textColor_2,
        bottom: -height / 60,
        width: width / 4,
        height: height / 60
      },
      iconStyle: {
        bottom: -height / 30,
        right: width / 80,
        alignItems: 'center',
        alignSelf: 'center'
      },
      style: {
        backgroundColor: firstColor
      }
    }
  }
);

const TourNavigator = createStackNavigator(
  {
    ToursScreen: HomeScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: firstColor
      },
      headerTitle: () => <Header />
    }
  }
);

const MainNavigator = createMaterialBottomTabNavigator(
  {
    tour: {
      screen: TourNavigator,
      navigationOptions: {
        tabBarIcon: () => (
          <Feather name="map" color={firstColor_minor} size={20} />
        )
      }
    },
    account: {
      screen: AccountNavigator,
      navigationOptions: {
        tabBarIcon: () => (
          <Feather name="user" color={firstColor_minor} size={20} />
        )
      }
    }
  },
  {
    initialRouteName: 'tour',
    activeColor: firstColor_major,
    inactiveColor: firstColor_minor,
    barStyle: { backgroundColor: firstColor },
    navigationOptions: {
      headerTitle: () => <HeaderDetail />
    }
  }
);

MainNavigator.navigationOptions = {
  headerShown: false
};

const CreateAccountTab = createMaterialTopTabNavigator(
  {
    Personal: PersonalScreen,
    Adress: AdressScreen,
    PhotoNSubmit: PhotoNSubmitScreen
  },
  {
    initialRouteName: 'Personal',
    headerShown: false,
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
        color: textColor_2,
        bottom: -height / 50,
        width: width / 4
      },
      style: {
        backgroundColor: firstColor
      }
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    CreateAccount: CreateAccountTab,
    FirstLogin: FirstLoginScreen,
    ForgotPassword: ForgotPasswordScreen
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    },
    initialRouteName: 'Login'
  }
);

const AppStack = createStackNavigator(
  {
    Main: MainNavigator,
    Detail: DetailNavigator
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: firstColor
      }
    }
  }
);

const MainStack = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    PreLoading: LoadingUserByTokenScreen
  },
  {
    initialRouteName: 'PreLoading'
  }
);

export default createAppContainer(MainStack);
