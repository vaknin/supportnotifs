import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

class App extends Component {

  //State
  state = {
    todos: [],
    colors: ['white', 'rgb(73, 212, 57)', '#fca500', 'rgb(161, 190, 237)', '#7aa7f0', 'gray']
  };

  //Remove the Todo Item
  removeItem = e => {

    let id = e.target.id;
    let newTodos = this.state.todos.slice(0);

    for (let todo of newTodos){
      
      if (todo.id.toString() === id.toString()){
        newTodos.splice(newTodos.indexOf(todo), 1);
        break;
      }
    }
    this.setState({todos:newTodos});
  }

  //Create a new Todo Item
  newItem = color => {
    let newTodos = this.state.todos.slice(0);
    newTodos.push({
      id: this.state.todos.length,
      important: false,
      color
    });
    this.setState({todos:newTodos});
  }

  //Set an Item as important
  importantItem = e => {

    let id = e.target.id;
    let newTodos = this.state.todos.slice(0);

    for (let todo of newTodos){
      
      if (todo.id.toString() === id.toString()){
        todo.important = !todo.important;
        break;
      }
    }
    this.setState({todos:newTodos});
  }

  //Main function - Render everything
  render() {
    return (
      <div className="container-fluid">

          {/* Add New Todos */}
        <div className="d-flex justify-content-center">
          {this.state.colors.map(color => {return <NewTodo action={() => {this.newItem(color)}} color={color}/>})}
        </div>

          {/* Todos */}
        <div className="d-flex row mt-5 justify-content-center">
          {this.state.todos.map(todo => <Todo color={todo.color} important={todo.important} key={todo.id} index={todo.id} removeItem={this.removeItem} importantItem={this.importantItem}/>)}
        </div>
      </div>
    )
  }
}
export default App;