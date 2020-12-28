import './App.css';
import Ninjas from './Ninjas';
import React, { Component } from 'react';
import AddNinja from "./AddNinja";
// import AddMobile from './AddMobile'
class App extends Component {
  state = {
    ninjas: [
             {name: 'kross', age: 34, belt: 'black', id: 1},
             {name: 'modric', age: 35, belt: 'white', id: 2},
             {name: 'benzema', age: 13, belt: 'orange', id: 3},
            ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }
  render(){
    return (
    <div className="App">
      <h2>Welcome to My App</h2>
      <Ninjas ninjas={this.state.ninjas}/>
      <AddNinja addNinja={this.addNinja}/>
    </div>
  );
  }
} 

export default App;

   