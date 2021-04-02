import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';

export default class App extends React.Component {
    render(){
      return (
        <AppContainer/>
      );
    }
  }

  const TabNavigator = createBottomTabNavigator({
    WriteStory:{screen:WriteStory},
    ReadStory:{screen:ReadStory}
  });
  
  const AppContainer = createAppContainer(TabNavigator);