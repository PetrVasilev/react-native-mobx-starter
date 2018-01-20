import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'mobx-react'
import store from './store'
import Router from './router'

export default class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <Router />
      </Provider>
    )
  }
}