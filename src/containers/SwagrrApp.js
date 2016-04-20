import React, { View, Component, PropTypes } from 'react-native'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

class SwagrrApp extends Component {
  render() {
    const { isAuthenticated, dispatch } = this.props
    return (
      <View>
        <Navbar
          isAuthenticated={isAuthenticated}
          dispatch={dispatch}
        />
      </View>
    )
  }
}

SwagrrApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated } = auth

  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(SwagrrApp)
