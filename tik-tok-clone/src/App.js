import React, { Component } from 'react';
import Video from "./Video";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        Clever Programmer
        <div className="app__videos">
          <Video/>
          <Video/>
          <Video/>
          <Video/>
        </div>
        </div>
    );
  }
}

export default App;
