import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/LandScreen';
import Colors from '../constants/Colors';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen'
import MyTicketScreen from '../screens/MyTicketScreen';
import SettingsNotifScreen from '../screens/SettingsNotifScreen';
import Profile1Screen from '../screens/Profile1Screen';
import ManageEventsScreen from '../screens/ManageEventsScreen';
import CreateEventScreen from '../screens/CreateEventScreen';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: {
    activeTintColor: Colors.traceButtonColor,

  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : ''}`
          : 'md-home'
      }
    />

  ),

};

HomeStack.path = '';

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarOptions: {
    activeTintColor: Colors.traceButtonColor,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'search' : 'search'} />
  ),
};

SearchStack.path = '';

const TicketsStack = createStackNavigator(
  {
    Tickets: MyTicketScreen
  },
  config
);

TicketsStack.navigationOptions = {
  tabBarLabel: "Tickets",
  tabBarOptions: {
    activeTintColor: Colors.traceButtonColor,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ticket" : "ticket"}
    />
  )
};

TicketsStack.path = "";



//Trial

const Organizer = createStackNavigator({
  Settings: Profile1Screen,
  Profile1: Profile1Screen,
  ManageEvents: ManageEventsScreen,
  CreateEvent: CreateEventScreen
})

const SettingsStack = createStackNavigator(
  {
    Settings: Organizer,
  },
  config
);

Organizer.navigationOptions = {
  headerShown: false,
}

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarOptions: {
    activeTintColor: Colors.traceButtonColor,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'cogs' : 'cogs'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  TicketsStack,
  SettingsStack,

});
tabNavigator.path = '';

tabNavigator.navigationOptions = {
  header: null,
}

export default tabNavigator;
