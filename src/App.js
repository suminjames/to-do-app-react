import './App.css';
import React from 'react'
import Form from './Form'
import Todos from './Todos'

export default class App extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Eat Lunch',
                completed: false
            },
            {
                id: 2,
                title: 'Eat Breakfast',
                completed: false
            },
            {
                id: 3,
                title: 'Drink Water',
                completed: false
            },

        ]

    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id == id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    deleteItem = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id != id)
        })
    }

    addItem = (item) => {
        const newTodo = {
            id: this.state.todos.length + 1,
            title: item,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] })
    }

    render() {
        return (
            <div className="app">
                <Form addItem={this.addItem} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
            </div>
        )
    }
}