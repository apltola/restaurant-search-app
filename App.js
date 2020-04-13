import React from 'react';
import { StatusBar } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';

StatusBar.setBarStyle('dark-content');

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Restaurant: RestaurantScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      //title: 'hello',
    }
  }
);

export default createAppContainer(navigator);