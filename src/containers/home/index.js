import React from 'react'
import {
  View, Text, Button
} from 'react-native'
import { observer, inject } from 'mobx-react'
import styles from './style'

@inject('user')
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.user = this.props.user
    this.navigate = this.props.navigation.navigate
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>React Native Mobx Starter</Text>
        <Text>Name: {this.user.name}</Text>
        <Text>Surname: {this.user.surname}</Text>
        <Button onPress={() => this.navigate('Edit')} title="Set User Info"/>
      </View>
    )
  }
}