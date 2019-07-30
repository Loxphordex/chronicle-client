import React from 'react';
import { Route } from 'react-router-dom'
import Registration from './Routes/Registration/Registration'

function App() {
  return (
    <div className="App">
      <Route path='/register' render={() => <Registration />} />
    </div>
  );
}

export default App;