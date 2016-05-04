import React, { StyleSheet,View, Component, PropTypes, Text } from 'react-native'
import { connect } from 'react-redux'
import MainApp from './MainAppContainer'


class SwagrrApp extends Component {
  render() {
    const { isAuthenticated, dispatch } = this.props

    if(isAuthenticated) {
      return <MainApp {...this.props} />
    } else {
      return <MainApp {...this.props} />
    }
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


SwagrrApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  // const { auth } = state
  // const { isAuthenticated } = auth

  return {
    isAuthenticated: true,
    selectedTab: state.tabs.selectedTab
   // isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(SwagrrApp)
