import React, { Component, PropTypes } from 'react'
import SignIn from './SignIn'
import SignOut from './SignOut'
import { signInUser, signOutUser } from '../actions/signIn'

export default class Navbar extends Component {
  render() {
    const { dispatch, isAuthenticated } = this.props
    return (
      <div>
       {!isAuthenticated &&
         <SignIn
           onSignInClick={ creds => dispatch(signInUser(creds)) }
         />
       }

       {isAuthenticated &&
         <SignOut onSignOutClick={() => dispatch(signOutUser())} />
       }
      <hr />
     </div>
    )
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}
