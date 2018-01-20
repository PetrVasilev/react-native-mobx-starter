import { StackNavigator } from 'react-navigation'

import Home from '../containers/home'
import Edit from '../containers/edit'

const stackNavigatorConfig = {
  initialRouteName: 'Home'
}

export default StackNavigator({
  Home: { screen: Home },
  Edit: { screen: Edit },
}, stackNavigatorConfig)