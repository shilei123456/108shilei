import React, { Component } from 'react';
import './App.css';
import Nav from './Component/Nav/Nav.js';
import Content from './Component/Content/Content.js';
import Bottom from './Component/Bottom/Bottom.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app">
				  <Nav/>
          <Content/>
          <Bottom/>
			  </div>
      </div>
    );
  }
}

export default App;
