import React, { Component } from 'react'

export default class Form extends Component {

  state = {
    title: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({title:''})
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return (
      <div className="col-12 my-5">
        <form onSubmit={this.handleSubmit} className="col-4 d-flex mx-auto">
          <input type="text" value={this.state.title} onChange={this.handleChange} className="form-control mr-3" />
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    )
  }
}
