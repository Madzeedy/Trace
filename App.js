import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GeneralStatusBarColor from './components/StatusBar/GeneralStatusBarColor';
import Colors from './constants/Colors';

import AppNavigator from './navigation/AppNavigator';
import NotHeader from './components/Header/NotHeader';
import BackHeader from './components/Header/BackHeader';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/LandScreen';
import Search2Screen from './screens/Search2Screen';
import StartingCreate from './screens/StartingCreate';
import StartingPublish from './screens/StartingPublish';
import StartingSell from './screens/StartingSell';
import StartingPick from './screens/StartingPick';

import ManageEventsScreen from './screens/ManageEventsScreen';
import Profile1Screen from './screens/Profile1Screen';
import SearchScreen from './screens/SearchScreen';
import SettingsNotifScreen from './screens/SettingsNotifScreen';
import NotificationScreen from './screens/NotificationScreen';
import PaymentScreen from './screens/PaymentScreen';
import RadioButtonComponent from './components/Buttons/RadioButton';
import Search3Screen from './screens/Search3Screen';
import TabTrial from './screens/TabTrial';
import DateTimePickerTest from './screens/DateTimePickerTest';
import TicketsDetailsScreen from './screens/TicketsDetailsScreen';
import ExploreScreen from './screens/ExploreScreen';
import MyEventScreen from './screens/MyEventScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';
import BookTickets from './screens/BookTicketScreen';
import CreateEventScreen from './screens/CreateEventScreen';
import PreferredScreen from './screens/PreferredScreen';
import Welcome from './screens/WaitApproval';
import IntExOne from './screens/IntegrationOne';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <GeneralStatusBarColor backgroundColor={Colors.primary_black} barStyle="light-content" />
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'font-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'font-semi': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      'font-italic': require('./assets/fonts/OpenSans-Italic.ttf'),
      'font-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
