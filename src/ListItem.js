import React, { Component } from 'react'
import { id } from 'postcss-selector-parser'
import { directive } from '@babel/types';


export default class ListItem extends Component {
  state = {
    title: ''
  }

  getStyle = () => {
    return {
      border: '1px solid teal',
      textAlign: 'center',
      padding: '15px',
      textDecoration: this.props.todoItem.completed ? 'line-through' : 'none'
    }
  }

  handleEditClick = (id) => {
    document.getElementById(id).style.display = 'none';
    document.getElementById(id).parentNode.getElementsByClassName('editField')[0].classList.remove('d-none');
    document.getElementById(id).parentNode.getElementsByClassName('editBtn')[0].classList.add('d-none');
    document.getElementById(id).parentNode.getElementsByClassName('updateBtn')[0].classList.remove('d-none');
    document.getElementById(id).parentNode.getElementsByClassName('editField')[0].value = this.props.todoItem.title;
    document.getElementById(id).parentNode.getElementsByClassName('editField')[0].focus();
  }

  handleEdit = (e) => {
    this.setState({ title: e.target.value })
  }

  updateData = (id) => {
    this.props.updateItem(this.state.title, id)
    document.getElementById(id).style.display = 'block';
    document.getElementById(id).parentNode.getElementsByClassName('editField')[0].classList.add('d-none');
    document.getElementById(id).parentNode.getElementsByClassName('editBtn')[0].classList.remove('d-none');
    document.getElementById(id).parentNode.getElementsByClassName('updateBtn')[0].classList.add('d-none');
  }

  render() {
    const { id, title } = this.props.todoItem;
    return (
      // <div style={{ textAlign: 'center', color: 'teal' }} className="mb-5">
      // <div style={itemStyle} className="mb-5">
      <div style={this.getStyle()} className="mb-5 row">
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} className="col-sm-2 float-left" />
        <div id={this.props.todoItem.id} className="col-sm-7">{title}</div>
        <input type="text" onChange={this.handleEdit} value={this.state.title} className="col-sm-7 mr-3 text-center d-none editField" />
        <button className="btn btn-secondary col-sm-1 mr-2 editBtn" onClick={this.handleEditClick.bind(this, id)}>Edit</button>
        <button className="btn btn-success col-sm-1 mr-2 updateBtn d-none" onClick={this.updateData.bind(this, id)}>Update</button>
        <button className="btn btn-danger col-sm-1" onClick={this.props.deleteItem.bind(this, id)}>Delete</button>
      </div>
    )
  }
}

var itemStyle = {
  background: 'red',
  textAlign: 'center'
}
