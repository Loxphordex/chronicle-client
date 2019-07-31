import React from 'react'
import RegForm from '../../Components/RegForm/RegForm'

export default class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      username: '',
      password: '',
    }
  }

  updateUsername = (username) => {
    console.log(username)
    this.setState({ username })
  }

  updatePassword = (password) => {
    console.log(password)
    this.setState({ password })
  }

  render() {
    return(
      <section className='reg-area'>
        <RegForm
          updateUsername={this.updateUsername}
          updatePassword={this.updatePassword}
        />
      </section>
    )
  }
}