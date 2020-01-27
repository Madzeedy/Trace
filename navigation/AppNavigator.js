import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from '../navigation/TopNavigator';
import MainTabNavigator from '../navigation/MainTabNavigator';
import MyEventScreen from '../screens/MyEventScreen';
import ExploreScreen from '../screens/ExploreScreen';
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

const createAccount = createStackNavigator({
  Signup: SignUpScreen,
  Login: LoginScreen,
  Home: ExploreScreen,
  MyEvent: MyEventScreen
})
const MainScreen = createSwitchNavigator({
  Main: MainTabNavigator,

})
const HomeScreen = createSwitchNavigator({
  Explore: TabNavigator,
})
const OtherScreen = createStackNavigator({
  Profile: ProfileScreen,
  BookTicket: BookTicketScreen,
  Checkout: CheckoutScreen,
  CreateEvent: CreateEventScreen,
  EventDetails: EventDetailsScreen,
  MyTicket: MyTicketScreen,
  Search2: Search2Screen,
  Search3: Search3Screen,
  Search: SearchScreen,
  Settings: SettingsScreen,
  TicketDetails: TicketsDetailsScreen,
  Tickets: TicketsScreen,
})
const SwitchNavigator = createSwitchNavigator(
  {
    IntroScreen: {
      screen: createAccount
    },
    TabScreen: {
      screen: MainScreen,
    },
    MyEvent: {
      screen: MyEventScreen,
    },
    Home: {
      screen: ExploreScreen
    },

    TabExploreScreen: {
      screen: HomeScreen,
    },
    Other: {
      screen: OtherScreen
    }
  }
);
const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;