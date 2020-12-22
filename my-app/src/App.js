import './App.css';
import Ninjas from './Ninjas';
import React, { Component } from 'react';

class App extends Component {
  state = {
    ninjas: [
             {name: 'kross', age: 34, belt: 'black', id: 1},
             {name: 'modric', age: 35, belt: 'white', id: 2},
             {name: 'benzema', age: 33, belt: 'orange', id: 3},
            ]
  }
  render(){
    return (
    <div className="App">
      <h2>Welcome to My App</h2>
      <Ninjas ninjas={this.state.ninjas}/>
    </div>
  );
  }
}

export default App;
