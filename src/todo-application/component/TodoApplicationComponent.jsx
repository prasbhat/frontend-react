import  { Component } from 'react';

import TodoService from '../service/TodoService';
import TodoApplicationView from '../view/TodoApplicationView';
import TodoApplicationSingleItemView from '../view/TodoApplicationSingleItemView';

class TodoApplicationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            todoItem: {
                id: '',
                title: '',
                description:'',
                creationDate:'',
                dueDate:'',
                status:'',
                todoCommentsSet:[]
            },
            todoTaskComments: {
                taskComments: ''
            },
            statusList:[],
            action: '',
            showCommentTable: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggleComments(){
        this.setState({
            showCommentTable: !this.state.showCommentTable
        })
    }

    componentDidMount() {
        this.retrieveAllTodoList();
        this.getStatus();
    }

    getStatus() {
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
    
    retrieveAllTodoList() {
        TodoService.retrieveAllTodoList()
        .then(
            response => {
                this.setState({ todoList: response.data })
            }
        )
    }
    
    view(todoItem) {
        console.log('view= ' + JSON.stringify(todoItem))
        this.action='view';
        this.setState( { todoItem : todoItem });
    }

    edit(todoItem) {
        console.log('edit= ' + JSON.stringify(todoItem))
        this.action='edit';
        this.setState( { todoItem : todoItem, todoTaskComments: {taskComments:''} });
    }

    create(id) {
        console.log('create')
        this.action='edit';
         this.setState( { todoItem: 
            { id: id, title: '', description:'', dueDate:'', status:'' } ,
            todoTaskComments: {taskComments:''}
        });
    }    

    delete(id) {
        console.log('delete= ' + id)
        TodoService.deleteById(id)
        .then(
            response => {
                console.log(response.data)
                this.retrieveAllTodoList();
            }
        )
    }
    
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState( prevState => ({ todoItem : 
            {...prevState.todoItem, [name]: value }
        })) 
        this.setState( prevState => ({ todoTaskComments : 
            {...prevState.todoTaskComments, [name]: value }
        })) 
      }

    handleSubmit(todoItem, todoTaskComments) {
        console.log('submit= ' + JSON.stringify(todoItem) +' && '+JSON.stringify(todoTaskComments));
        
        var todoTaskCommentsArray= [];
        todoTaskCommentsArray.push(todoTaskComments);
        todoItem.todoTaskCommentsSet=todoTaskCommentsArray;
        TodoService.create(todoItem);   
        this.retrieveAllTodoList();   
    }

    render() {
        if(this.state.todoItem.id === '') {
            return (
                TodoApplicationView (this)
            )
        } else {
            return (
                TodoApplicationSingleItemView (this)
            )
        }
    }
}
export default TodoApplicationComponent