import config from '../config'
import TokenServices from './token-services'

const ApiServices = {
  postNewUser(username, password) {

    return fetch(`${config.API_ENDPOINT}/auth/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  },
  postLogin(username, password) {
    console.log(config)
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
    .then(res => {
      TokenServices.saveAuthToken(res.authToken)
      return res
    })
  },
}

export default ApiServices