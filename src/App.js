import React, { Component } from 'react';
// import Score from './components/score';
import Threes from './components/threes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Score /> */}
       <Threes />
      </div>
    );
  }
}

export default App;
