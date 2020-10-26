import React, { Component } from 'react';

import TodoService from '../service/TodoService';

class TodoTrackerListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList: []
        }

        this.retrieveAllTodoList = this.retrieveAllTodoList.bind(this)
        this.retrieveTodoItemClicked = this.retrieveTodoItemClicked.bind(this)
        this.deleteTodoItemClicked = this.deleteTodoItemClicked.bind(this)
        this.editTodoItemClicked = this.editTodoItemClicked.bind(this)
        this.createTodoItemClicked = this.createTodoItemClicked.bind (this)
    }

    componentDidMount() {
        this.retrieveAllTodoList();
    }
    
    retrieveAllTodoList() {
        TodoService.retrieveAllTodoList()
        .then(
            response => {
                this.setState({ todoList: response.data })
            }
        )
    }
    retrieveTodoItemClicked(id) {
        console.log('view= ' + id)
        this.props.history.push(`/todo/view/${id}`)
    }
    deleteTodoItemClicked(id) {
        console.log('delete= ' + id)
        TodoService.deleteById(id)
        .then(
            response => {
                console.log(response.data)
                this.retrieveAllTodoList();
            }
        )
    }
    editTodoItemClicked(id) {
        console.log('edit= ' + id)
        this.props.history.push(`/todo/edit/${id}`)
    }

    createTodoItemClicked(id) {
        console.log('create= ' + id)
        this.props.history.push(`/todo/edit/${id}`)
    }
    
    
    render() {
        return (
            <div className="container">
                <h1>Todo Tracker Application</h1>
                <div className="container">
                <button className="btn btn-success" onClick={() => this.createTodoItemClicked (-1)}>Create</button>
                    <table className='table-striped' border='1'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th>View</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todoList.map(
                                    todoItem =>
                                        <tr key={todoItem.id}>
                                            <td>{todoItem.id}</td>
                                            <td>{todoItem.title}</td>
                                            <td>{todoItem.description}</td>
                                            <td>{todoItem.dueDate}</td>
                                            <td>{todoItem.status}</td>
                                            <td><button className="btn btn-success" onClick={() => this.retrieveTodoItemClicked (todoItem.id)}>View</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.editTodoItemClicked(todoItem.id)}>Edit</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoItemClicked(todoItem.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default TodoTrackerListComponent