import React from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends React.Component {
  render() {
    return(
      <div className='landing-wrapper'>
        <Link to='/register'>Sign Up</Link>
      </div>
    )
  }
}