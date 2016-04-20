import React, { StyleSheet,View, Component, PropTypes, Text } from 'react-native'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

class SwagrrApp extends Component {
  render() {
    const { isAuthenticated, dispatch } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.content}>

        </View>
        <Navbar
          style={styles.navbar}
          isAuthenticated={isAuthenticated}
          dispatch={dispatch}
        />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center'
  },

  content: {
    backgroundColor: 'black'
  },

  navbar: {
    height: 50
  }
})


// SwagrrApp.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool.isRequired
// }

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated } = auth

  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(SwagrrApp)
