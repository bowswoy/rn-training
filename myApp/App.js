import React, { Component } from 'react'
import HomeScreen from './src/HomeScreen'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CustomScreen from './src/CustomScreen';
import DetailScreen from './src/DetailScreen';
import ViewScreen from './src/ViewScreen';
import RandomScreen from './src/RandomScreen';
import MOJScreen from './src/MOJScreen';
import WebviewScreen from './src/WebviewScreen';
import ContactScreen from './src/ContactScreen';

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
      title: navigation.state.params.title,
      headerStyle: {
        backgroundColor: navigation.state.params.color,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
  View: {
    screen: ViewScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.item.title,
      headerStyle: {
        backgroundColor: '#0964c1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
  Random: {
    screen: RandomScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Random Screen',
      headerStyle: {
        backgroundColor: '#0964c1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
  MOJ: {
    screen: MOJScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'MOJ Feed',
      headerStyle: {
        backgroundColor: '#0964c1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
  Webview: {
    screen: WebviewScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.item.title,
      headerStyle: {
        backgroundColor: '#0964c1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
  Contact: {
    screen: ContactScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Contact Screen',
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
