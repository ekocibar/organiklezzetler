import React, { Component } from 'react';
import Router from './Router'
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Router />
      </div>
    );
  }
}

export default App;