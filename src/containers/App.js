import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Navbar from '../components/Navbar'

class App extends Component {
  render() {
    const { children, isAuthenticated, dispatch } = this.props
    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          dispatch={dispatch}
        />
        {children}
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.node
}

function mapStateToProps(state) {
  const { signIn } = state
  const { isAuthenticated } = signIn

  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(App)
