import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { Container, Text, Root } from 'native-base'
// import store from './src/store'

import LandingPage from './src/components/landingPage'

const AppNavigator = StackNavigator({
  LandingPage: {
    screen: LandingPage
  }
})

export default class App extends Component {
  render() {
    return (
      <Container>
        <LandingPage />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
