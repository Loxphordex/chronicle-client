import React from 'react';
import { Route } from 'react-router-dom'
import ChronicleContext from './Context/chronicle-context'
import Header from './Components/Header/Header'
import Landing from './Routes/Landing/Landing'
import Registration from './Routes/Registration/Registration'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
    }
  }
  render() {
    return (
      <div className="App">
        <ChronicleContext.Provider
          value={{

          }}>

          <Route path='/' render={() => <Header />} />
          <Route exact path='/' render={() => <Landing />} />
          <Route path='/register' render={() => <Registration />} />

        </ChronicleContext.Provider>
      </div>
    );
  }
}