
import './App.css';

import React, {Component, } from 'react';
import {CardList} from './Components/Card-List/card-list.component';

class App extends Component {
  constructor(){
    super();

    this.state={
        arr:
          []
      
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({arr:users}) )
    
  }
  
  render(){
  return (
    <div className="App">
    <CardList name="vinayak" value='uncle' >
       {this.state.arr.map(arr=>
        <h1 key={arr.id}> {arr.name} </h1>
        )}</CardList>
       </div>
  );}
}

export default App;
