import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});
import SignIn from './SignIn';
import { signInUser } from '../actions/auth';

export default class Navbar extends Component {
  render() {
    const { dispatch, isAuthenticated } = this.props
    return (
         <SignIn
           onSignInClick={ creds => dispatch(signInUser(creds)) }
         />
    )
  }
}
