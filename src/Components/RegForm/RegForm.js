import React from 'react'

export default class RegForm extends React.Component {
  render() {
    return(
      <form className='reg-form'>
        <label for='reg-username' >Username</label>
        <input 
          className='reg-username reg-input' 
          id='reg-username' 
          name='reg-username'
          type='text' />
        <label for='reg-password'>Password</label>
        <input 
          className='reg-password reg-input'
          id='reg-passwrd'
          name='reg-username'
          type='text' />
        <button className='reg-submit auth-button' type='submit'>Enter</button>
      </form>
    )
  }
}