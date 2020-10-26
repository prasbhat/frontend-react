import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import TodoService from '../service/TodoService';

class TodoTrackerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoItem: {
                id: this.props.match.params.id,
                title: '',
                description:'',
                dueDate:'',
                status:''
            },
            statusList:[],            
            action: this.props.match.params.action
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        console.log("action="+this.state.action);
        
        if (this.state.todoItem.id !== -1) {
            TodoService.retrieveById(this.state.todoItem.id)
            .then(response => {
                this.setState({ todoItem: response.data })
            })
        }

        TodoService.retrieveTodoStatus()
        .then(response => {
            let statusFromApi = response.data.map(status => {
                return {value: status, display: status}
              });
              this.setState({ 
                statusList: [{value: '', display: '--Select Status--'}].concat(statusFromApi)
               })
        })

        
    }
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState( prevState => ({ todoItem : 
            {...prevState.todoItem, [name]: value }
        })) 
      }

    handleSubmit(todoItem) {
        console.log('submit= ' + JSON.stringify(todoItem))
        console.log(this.props.history.push(`/todo/`))

        console.log("id="+todoItem.id);

        if(todoItem.id === undefined) TodoService.create(todoItem)
        else TodoService.update(todoItem)
        .then(() => this.props.history.push(`/todo/`)
        )        
    }
    

    render() {
        return (
            <div className="container">
                <h1>Todo Tracker Component</h1>
              
                <form className="container">
                     <table className='table-striped' border='1'> 
                    <tbody>                 
                            <tr>
                                <th>Id</th>
                                <td>
                                    <input name='id' value= {this.state.todoItem.id} readOnly></input>
                                </td>
                            </tr><tr>
                                <th>Title</th>
                                <td> {
                                    this.state.action === 'view' ? this.state.todoItem.title : <input type='text' name='title' value= {this.state.todoItem.title} onChange={this.handleChange} size="47"></input>
                                } </td>                                
                             </tr><tr>
                                <th>Description</th>
                                <td> {
                                   this.state.action === 'view' ? this.state.todoItem.description : <textarea name='description' value= {this.state.todoItem.description} onChange={this.handleChange} rows="3" cols="50"></textarea>
                                } </td>
                            </tr><tr>
                                <th>Due Date</th>
                                <td> {
                                    this.state.action === 'view' ? this.state.todoItem.dueDate : <input type='date' name='dueDate' value= {this.state.todoItem.dueDate} onChange={this.handleChange}></input>
                                } </td>
                            </tr><tr>
                                <th>Status</th>
                                <td> {
                                    this.state.action === 'view' ? this.state.todoItem.status : 
                                    <select name='status' value={this.state.todoItem.status} onChange={this.handleChange}>
                                        {this.state.statusList.map((status) => <option key={status.value} value={status.value}>{status.display}</option>)}
                                    </select>
                                } </td>
                            </tr>
                            <tr>
                                {this.state.action === 'view' ? '':
                                    <td colSpan='2' align='center'><button className="btn btn-success" onClick={() => this.handleSubmit(this.state.todoItem)}>Submit</button></td>
                                }
                            </tr>
                        </tbody>  
                    </table> 
                 </form>
           
            </div>
        )
    }
}
export default withRouter(TodoTrackerComponent);