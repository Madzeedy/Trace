import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainTabNavigator from "../navigation/MainTabNavigator";
import MyEventScreen from "../screens/MyEventScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import CreateEventScreen from "../screens/CreateEventScreen";
import MyTicketScreen from "../screens/MyTicketScreen";
import Search2Screen from "../screens/Search2Screen";
import SettingsScreen from "../screens/SettingsScreen";
import TicketsDetailsScreen from "../screens/TicketsDetailsScreen";
import TicketsScreen from "../screens/TicketsScreen";
import BookTicketScreen from "../screens/BookTicketScreen";
import EventDetailsScreen from "../screens/EventDetailsScreen";
import Search3Screen from "../screens/Search3Screen";
import SearchScreen from "../screens/SearchScreen";
import StartingCreate from "../screens/StartingCreate";
import SplashScreen from "../screens/SplashScreen";
import StartingPublish from "../screens/StartingPublish";
import StartingSell from "../screens/StartingSell";
import StartingPick from "../screens/StartingPick";
import StartingBuy from "../screens/StartingBuy";
import NotificationScreen from "../screens/NotificationScreen";
import HomeScreen from "../screens/LandScreen";
import PaymentScreen from "../screens/PaymentScreen";
import PreferredScreen from "../screens/PreferredScreen";
import SettingsNotifScreen from "../screens/SettingsNotifScreen";
import ManageEventsScreen from "../screens/ManageEventsScreen";
import Profile1Screen from "../screens/Profile1Screen";
import Welcome from "../screens/WaitApproval";

const createAccount = createStackNavigator({
  Splash: SplashScreen,
  StartingPublish: StartingPublish,
  StartingCreate: StartingCreate,
  StartingSell: StartingSell,
  StartingBuy: StartingBuy,
  StartingPick: StartingPick,
  Signup: SignUpScreen,
  Login: LoginScreen,
  Home: HomeScreen,
});

const Attendees = createStackNavigator({
  Home: MainTabNavigator,
  EventDetail: EventDetailsScreen,
  BookTicket: BookTicketScreen,
  Checkout: CheckoutScreen,
  Payment: PaymentScreen,
  Search: SearchScreen,
  Search2: Search2Screen,
  Search3Screen: Search3Screen,
  Preferred: PreferredScreen,
  Notification: NotificationScreen,
  Profile: ProfileScreen,
  Profile1: Profile1Screen,
  SettingNotif: SettingsNotifScreen
});

const Organizer = createStackNavigator({
  Settings: Profile1Screen,
  Profile1: Profile1Screen,
  ManageEvents: ManageEventsScreen,
  CreateEvent: CreateEventScreen,
  Tickets: TicketsDetailsScreen,
  Welcome: Welcome
})

const MainScreen = createSwitchNavigator({
  Main: MainTabNavigator
});

const SwitchNavigator = createSwitchNavigator({
  IntroScreen: {
    screen: createAccount
  },
  TabScreen: {
    screen: MainScreen
  },
  Attendees: {
    screen: Attendees
  },
  Organizer: {
    screen: Organizer
  }
});

SwitchNavigator.navigationOptions = {
  header: null
}

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
