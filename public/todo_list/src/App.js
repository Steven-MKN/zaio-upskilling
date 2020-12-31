import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 0, complete: true, content: 'learn react'},
      {id: 1, complete: false, content: 'play csgo'}
    ]
  }

  addTodo = (todo) => {
    if (this.state.todos && this.state.todos.length > 0)
      todo.id = Number.parseInt(this.state.todos[this.state.todos.length - 1].id) + 1
    else todo.id = 1

    let newTodos = this.state.todos
    newTodos.push(todo)

    this.setState({
      todos: newTodos
    })

    return
  }

  deleteTodo = (id) => {
    let newTodos = this.state.todos.filter(t => {
      return t.id !== id
    })

    this.setState({
      todos: newTodos
    })
  }

  completeTodo = (id) => {
    let newTodos = [ ...this.state.todos ]

    newTodos.forEach(todo => {
      if (todo.id === id){
        todo.complete = true
        return
      }
    });

    this.setState({
      todos: newTodos
    })
  }

  undoTodo = (id) => {
    let newTodos = [ ...this.state.todos ]

    newTodos.forEach(todo => {
      if (todo.id === id){
        todo.complete = false
        return
      }
    });

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's'</h1>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } completeTodo={ this.completeTodo } undoTodo={ this.undoTodo }/>
        <AddTodo addTodo={ this.addTodo } />
      </div>
    )
  }
}

export default App;