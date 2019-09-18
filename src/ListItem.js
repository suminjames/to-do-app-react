import React, { Component } from 'react'
import { id } from 'postcss-selector-parser'


export default class ListItem extends Component {

  getStyle = () => {
    return {
      background: 'teal',
      textAlign: 'center',
      padding: '15px',
      textDecoration: this.props.todoItem.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todoItem;
    return (
      // <div style={{ textAlign: 'center', color: 'teal' }} className="mb-5">
      // <div style={itemStyle} className="mb-5">
      <div style={this.getStyle()} className="mb-5">
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} className="ml-5 float-left" />
        {title}
        <button className="btn btn-danger float-right mr-5" onClick={this.props.deleteItem.bind(this, id)}>Delete</button>
      </div>
    )
  }
}

var itemStyle = {
  background: 'red',
  textAlign: 'center'
}
