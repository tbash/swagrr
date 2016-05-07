import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import MainApp from '../containers/MainAppContainer'

export default class SwagrrApp extends Component {
  render() {

    const { isAuthenticated } = this.props

    if(isAuthenticated) {
      return <MainApp />
    } else {
      return <MainApp />
    }
  }
}

