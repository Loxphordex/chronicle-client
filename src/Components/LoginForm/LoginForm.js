import React from 'react'

export default class LoginForm extends React.Component {
  render() {

    const {
      updateUsername,
      updatePassword,
      handleSubmitLogin,
    } = this.props

    return(
      <form onSubmit={(event) => handleSubmitLogin(event)}>

        <label htmlFor='login-username'>Username</label>
        <input 
          className='login-username'
          id='login-username'
          name='login-username'
          type='text'
          onChange={(event) => updateUsername(event.target.value)}
        />
        
        <label htmlFor='login-password'>Password</label>
        <input
          className='login-password'
          id='login-password'
          name='login-password'
          type='password'
          onChange={(event) => updatePassword(event.target.value)}
        />

        <button type='submit'>Sign In</button>
      </form>
    )
  }
}