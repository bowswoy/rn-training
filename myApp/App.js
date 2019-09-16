import React, { Component } from 'react'
import HomeScreen from './src/HomeScreen'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CustomScreen from './src/CustomScreen';
import DetailScreen from './src/DetailScreen';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Custom: {
    screen: CustomScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'My Application',
      headerStyle: {
        backgroundColor: '#0964c1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'My Application',
      headerStyle: {
        backgroundColor: '#0964c1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  }
});

const App = createAppContainer(MainNavigator);

export default App
