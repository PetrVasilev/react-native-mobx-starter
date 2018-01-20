import React from 'react'
import {
  View, TextInput, Button
} from 'react-native'
import { observer, inject } from 'mobx-react'
import styles from './style'

@inject('user')
@observer
export default class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.user = this.props.user
  }
  onClickSetUser() {
    this.user.name = this.state.name
    this.user.surname = this.state.surname
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput value={this.user.name} placeholder="Type a name" onChangeText={name => this.user.name = name}/>
        <TextInput value={this.user.surname} placeholder="Type a surname" onChangeText={surname => this.user.surname = surname}/>
      </View>
    )
  }
}