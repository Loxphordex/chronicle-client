import React from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import ApiServices from '../../Services/api-services'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      username: '',
      password: '',
    }
  }

  componentDidMount = () => {
    this.setState({ error: null })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  handleError = (error) => {
    this.setState({ error })
  }

  clearCreds = () => {
    this.setState({ 
      username: '',
      password: '',
    })
  }

  updateUsername = (username) => {
    this.setState({ username })
  }

  updatePassword = (password) => {
    this.setState({ password })
  }

  handleSubmitLogin = (event) => {
    event.preventDefault()

    const { username, password } = this.state
    const { history } = this.props
    
    ApiServices.postLogin(username, password)
      .then(() => this.clearError())
      .then(() => this.clearCreds())
      .then(() => history.push('/dashboard'))
      .catch(e => this.handleError(e))
  }

  render() {
    return(
      <section className='login-area'>
        <LoginForm 
          updateUsername={this.updateUsername}
          updatePassword={this.updatePassword}
          handleSubmitLogin={this.handleSubmitLogin}
        />
      </section>
    )
  }
}