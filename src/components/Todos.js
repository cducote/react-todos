import React, { Component } from 'react'
import data from '../data.json'
import AddTodo from './AddTodo.js'

export default class Todos extends Component {
  state = {
    todos: data.todos,
    newTodo: ''
  }

  handleChange = ({ target: { value }}) => {
    this.setState({ newTodo: value })
  }

  addTodo = (e) => {
    e.preventDefault()
    const newTodos = [ ...this.state.todos, {
      id: this.state.todos.length +1,
      task: this.state.newTodo,
      completed: false
    }]

    this.setState({
      todos: newTodos,
      newTodo: ''
    })
  }

  deleteTodo = (index) => {
    const newTodos = [ ...this.state.todos ]
    newTodos.splice(index, 1)
    this.setState({ todos: newTodos })
  }
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <AddTodo newTodo={this.state.newTodo} handleChange={this.handleChange} addTodo={this.addTodo}/>
        <li>
          {this.state.todos.map((todo, index) => {
            return (
              <ul key={index}>{todo.task}</ul>
            )
          })}
          
        </li>
      </div>
    )
  }
}
