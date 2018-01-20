import { observable } from 'mobx'

export default class UserStore {
  @observable name = null
  @observable surname = null
}