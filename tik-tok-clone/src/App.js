import React, { Component } from 'react';
import Video from "./Video";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        Hello Clever Programmers
        <div className="app__videos"></div>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
        </div>
    );
  }
}

export default App;
