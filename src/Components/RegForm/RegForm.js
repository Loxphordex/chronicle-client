import React from 'react'

export default class RegForm extends React.Component {
  render() {

    const {
      updateUsername,
      updatePassword,
    } = this.props

    return(
      <form className='reg-form'>
        <label htmlFor='reg-username' >Username</label>
        <input 
          className='reg-username reg-input' 
          id='reg-username' 
          name='reg-username'
          type='text'
          onChange={(event) => updateUsername(event.target.value)} />
        <label htmlFor='reg-password'>Password</label>
        <input 
          className='reg-password reg-input'
          id='reg-passwrd'
          name='reg-username'
          type='text'
          onChange={(event) => updatePassword(event.target.value)} />
        <button className='reg-submit auth-button' type='submit'>Enter</button>
      </form>
    )
  }
}