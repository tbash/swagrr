import React, { StyleSheet,View, Component, PropTypes, Text } from 'react-native'
import { connect } from 'react-redux'
import SwagrrApp from '../components/SwagrrApp'

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

const SwagrrAppContainer =  connect(
  mapStateToProps
)(SwagrrApp)

export default SwagrrAppContainer