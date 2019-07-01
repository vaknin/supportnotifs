import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

class App extends Component {

  state = {
    todos: []
  };

  removeItem = e => {
    console.log(e.target.parentElement.parentElement.remove());
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
        {this.state.todos.map(todo => <Todo key={todo.id} removeItem={this.removeItem}/>)}

      </div>
    )
  }
}
export default App;