import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, toogleTodo } from 'actions/TodoActions'
import AddTodo from 'components/Todo/AddTodo'
import TodoList from 'components/Todo/TodoList'

class App extends Component {
  render() {
    const { dispatch, todos } = this.props
    return (
      <div>
        
      </div>
    )
  }
}

export default connect(state => state)(App);
