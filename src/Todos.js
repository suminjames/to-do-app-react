import React, { Component } from 'react'
import ListItem from './ListItem'

export default class Todos extends Component {
  render() {
    {console.log(this.props.todos)}
    return this.props.todos.map((todoItem) => (
      <ListItem todoItem={todoItem} markComplete={this.props.markComplete} deleteItem={this.props.deleteItem} />
    ))
  }
}
