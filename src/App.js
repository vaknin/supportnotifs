import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

function randomColor(){
  let color1 = Math.random() * 255;
  let color2 = Math.random() * 255;
  let color3 = Math.random() * 255;
  return `rgb(${color1},${color2},${color3})`;
}

class App extends Component {

  state = {
    todos: []
  };

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

  newItem = () => {
    let newTodos = this.state.todos.slice(0);
    newTodos.push({
      id: this.state.todos.length
    });
    this.setState({todos:newTodos});
  }

  render() {
    return (
      <div className="container">
        <NewTodo action={this.newItem}/>
        <div className="d-flex mt-4">
          {this.state.todos.map(todo => <Todo color={randomColor()}key={todo.id} index={todo.id}removeItem={this.removeItem}/>)}
        </div>
      </div>
    )
  }
}
export default App;