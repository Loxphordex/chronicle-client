import React from 'react'
import RegForm from '../../Components/RegForm/RegForm'
import ApiServices from '../../Services/api-services'

export default class Registration extends React.Component {
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

  handleError = (error) => {
    this.setState({ error })
  }

  cearError = () => {
    this.setState({ error: null })
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

  handleSubmitUser = (event) => {
    console.log('handleSubmitUser triggered')
    event.preventDefault()

    const { username, password } = this.state
    const { history } = this.props

    ApiServices.postNewUser(username, password)
      .then(() => this.cearError())
      .then(() => this.clearCreds())
      .then(() => history.push('/dashboard'))
      .catch(e => this.handleError(e))
  }

  render() {

    const {
      error,
      username,
      password,
    } = this.state

    return(
      <section className='reg-area'>
        <RegForm
          error={error}
          username={username}
          password={password}
          updateUsername={this.updateUsername}
          updatePassword={this.updatePassword}
          handleSubmitUser={this.handleSubmitUser}
        />
      </section>
    )
  }
}