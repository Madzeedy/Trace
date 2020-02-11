import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

import StartingCreate from '../screens/StartingCreate';
import SplashScreen from '../screens/SplashScreen';
import StartingPublish from '../screens/StartingPublish';
import StartingSell from '../screens/StartingSell';
import StartingPick from '../screens/StartingPick';
import StartingBuy from '../screens/StartingBuy';

const createAccount = createStackNavigator({
  Login: LoginScreen,
  Signup: SignUpScreen,
  Splash: SplashScreen,
  StartingPublish: StartingPublish,
  StartingCreate: StartingCreate,
  StartingSell: StartingSell,
  StartingBuy: StartingBuy,
  StartingPick: StartingPick,
})

const MainScreen = createSwitchNavigator({
  Main: MainTabNavigator
})

const switchNavigator = createSwitchNavigator(
  {
    IntroScreen: {
      screen: createAccount
    },
    TabScreen: {
      screen: MainScreen
    }
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
