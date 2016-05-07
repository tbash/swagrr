import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import TabApp from '../containers/TabApp'

export default class SwagrrApp extends Component {
  render() {

    const { isAuthenticated } = this.props

    if(isAuthenticated) {
      return <TabApp />
    } else {
      return <TabApp />
    }
  }
}

