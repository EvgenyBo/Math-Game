/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation-stack';
import { configureStore } from 'store/store';
import HomeScreen from 'screens/HomeScreen';
import GameScreen from 'screens/GameScreen';
import LeaderBoardScreen from 'screens/LeaderBoardScreen';
import COLORS from 'styles/colors';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </Provider>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen,
    LeaderBoard: LeaderBoardScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        height: 70,
        backgroundColor: COLORS.blue,
      },
      headerTintColor: COLORS.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default App;
