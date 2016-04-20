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

export default class SignIn extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handleClick} style={styles.button}>
        </TouchableOpacity>
      </View>
    )
  }

  handleClick(e) {
    const email = this.refs.email
    const password = this.refs.password
    const creds = { email: email.value.trim(), password: password.value.trim() }
    this.props.onSignInClick(creds)
  }
}
