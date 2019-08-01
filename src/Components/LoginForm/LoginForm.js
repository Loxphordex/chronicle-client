import React from 'react'

export default class LoginForm extends React.Component {
  render() {
    return(
      <form>

        <label htmlFor='login-username'>Username</label>
        <input 
          className='login-username'
          id='login-username'
          name='login-username'
          type='text' />
        
        <label htmlFor='login-password'>Password</label>
        <input
          className='login-password'
          id='login-password'
          name='login-password'
          type='password'
        />

        <button type='submit'>Sign In</button>
      </form>
    )
  }
}