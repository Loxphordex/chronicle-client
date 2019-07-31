import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return(
      <header role='heading'>
        <nav role='navigation'>
          <h1><Link to='/'>Chronicle</Link></h1>
        </nav>
      </header>
    )
  }
}