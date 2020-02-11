import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainTabNavigator from '../navigation/MainTabNavigator';
import MyEventScreen from '../screens/MyEventScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen'
import CheckoutScreen from '../screens/CheckoutScreen';
import CreateEventScreen from '../screens/CreateEventScreen';
import MyTicketScreen from '../screens/MyTicketScreen';
import Search2Screen from '../screens/Search2Screen';
import SettingsScreen from '../screens/SettingsScreen';
import TicketsDetailsScreen from '../screens/TicketsDetailsScreen';
import TicketsScreen from '../screens/TicketsScreen';
import BookTicketScreen from '../screens/BookTicketScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import Search3Screen from '../screens/Search3Screen';
import SearchScreen from '../screens/SearchScreen';
import StartingCreate from '../screens/StartingCreate';
import SplashScreen from '../screens/SplashScreen';
import StartingPublish from '../screens/StartingPublish';
import StartingSell from '../screens/StartingSell';
import StartingPick from '../screens/StartingPick';
import StartingBuy from '../screens/StartingBuy';
import NotificationScreen from '../screens/NotificationScreen';
import HomeScreen from '../screens/LandScreen';

const createAccount = createStackNavigator({

  Splash: SplashScreen,
  Signup: SignUpScreen,
  Login: LoginScreen,
  Home: HomeScreen,
  EventDetail: EventDetailsScreen,
  MyEvent: MyEventScreen,
  Search3Screen: Search3Screen,
  Notification: NotificationScreen,
  StartingPublish: StartingPublish,
  StartingCreate: StartingCreate,
  StartingSell: StartingSell,
  StartingBuy: StartingBuy,
  StartingPick: StartingPick,
  Search3Screen: Search3Screen,
  Notification: NotificationScreen

})
const MainScreen = createSwitchNavigator({
  Main: MainTabNavigator,

})

const SwitchNavigator = createSwitchNavigator(
  {
    IntroScreen: {
      screen: createAccount
    },
    TabScreen: {
      screen: MainScreen,
    }
  }
);
const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;