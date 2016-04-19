import React, { Component, PropTypes } from 'react'

export default class SignIn extends Component {

  render() {
    return (
      <div>
        <input type='text' ref='email' className="form-control" style={{ marginRight: '5px' }} placeholder='email'/>
        <input type='password' ref='password' className="form-control" style={{ marginRight: '5px' }} placeholder='password'/>
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
          Sign In
        </button>
      </div>
    )
  }

  handleClick(e) {
    const email = this.refs.email
    const password = this.refs.password
    const creds = { email: email.value.trim(), password: password.value.trim() }
    this.props.onSignInClick(creds)
  }
}

SignIn.propTypes = {
  onSignInClick: PropTypes.func.isRequired
}
