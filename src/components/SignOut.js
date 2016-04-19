import React, { Component, PropTypes } from 'react'

export default class SignOut extends Component {

  render() {
    const { onSignOutClick } = this.props

    return (
      <button onClick={() => onSignOutClick()} className="btn btn-primary">
        SignOut
      </button>
    )
  }
}

SignOut.propTypes = {
  onSignOutClick: PropTypes.func.isRequired
}
