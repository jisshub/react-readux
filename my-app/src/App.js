import './App.css';
import Ninjas from './Ninjas';
import React, { Component } from 'react';
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
             {name: 'kross', age: 34, belt: 'black', id: 1},
             {name: 'modric', age: 35, belt: 'white', id: 2},
             {name: 'benzema', age: 13, belt: 'orange', id: 3},
            ]
  }
  render(){
    return (
    <div className="App">
      <h2>Welcome to My App</h2>
      <Ninjas ninjas={this.state.ninjas}/>
      <AddNinja />
    </div>
  );
  }
} 

export default App;

   