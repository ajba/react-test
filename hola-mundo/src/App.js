import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {todos } from "./todos.json";
console.log(todos);

class App extends Component {

  constructor(){
    super();
    this.state = {
      todos
    }
  }


  render() {

    const todos = this.state.todos.map((todo,i) =>{
      return(
        <div className="card">
          <div className="card-header">
            <h3>{todo.title}</h3>
          </div>
          <div className="card-body">
            <p>{todo.description}</p>
          </div>
        </div>
      )
    })


    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">Tasks</a>
        </nav>
        {todos}
      </div>
    );
  }
}

export default App;
