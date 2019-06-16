import React, { Component } from 'react'
import Router from './Router'
import Navigation from './Navigation'
import Bottom from './Bottom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Router />
        <Bottom/>
      </div>
    );
  }
}

export default App;