import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import TabBarIcon from '../components/TabBarIcon';
import * as Icon from '@expo/vector-icons'
import ExploreScreen from '../screens/ExploreScreen';
import MyEventScreen from '../screens/MyEventScreen';
import Colors from '../constants/Colors';
import NotHeader from '../components/Header/NotHeader';
const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

// const ExploreStack = createStackNavigator(
//     {
//         Home: ExploreScreen,
//     },
//     config
// );

// ExploreStack.navigationOptions = {
//     tabBarLabel: 'Explore',
//     tabBarIcon: ({ focused }) => (

//         <TabBarIcon
//             focused={focused}
//             name={
//                 Platform.OS === 'ios'
//                     ? `ios-home${focused ? '' : '-outline'}`
//                     : 'md-home'
//             }
//         />
//     ),
// };

// ExploreStack.path = '';

// const MyEventStack = createStackNavigator(
//     {
//         MyEvent: MyEventScreen,
//     },
//     config
// );

// MyEventStack.navigationOptions = {
//     tabBarLabel: 'My Event',
//     tabBarIcon: ({ focused }) => (
//         <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
//     ),


// };

// MyEventStack.path = '';

const TabNavigator = createMaterialTopTabNavigator({

    Explore: {
        screen: ExploreScreen,
        navigationOptions: {
            tabBarLabel: 'Explore',
        },
    },
    MyEvent: {
        screen: MyEventScreen,
        navigationOptions: {
            tabBarLabel: 'My Event',

        },
    },
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: '#149DE1',
        inactiveTintColor: '#000',
        style: {
            height: 50,
            backgroundColor: Colors.traceHeader,
            elevation: 5,
            borderBottomWidth: 0,
            shadowOpacity: 0,

        },
        labelStyle: {
            color: Colors.primary_white,
            fontFamily: 'font-semi',
            fontSize: 11,
        },

    },


});
export default TabNavigator;
