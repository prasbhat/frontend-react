import React from 'react';
import Moment from 'moment';

const TodoApplicationSingleItemView = (component) => {
    const action = component.action;
    const todoItem = component.state.todoItem;
    const todoTaskComments = component.state.todoTaskComments;
    const statusList = component.state.statusList;
    const handleChange = component.handleChange;
    const handleSubmit = component.handleSubmit;
    
    return (            
        <form className="container">
            <table className='table-striped' border='1'> 
                <tbody>                 
                    <tr>
                        <th>Title</th>
                        <td> {
                            action === 'view' ? todoItem.title : <input type='text' name='title' value= {todoItem.title} onChange={handleChange} size="35"></input>
                        } </td>                                
                        </tr><tr>
                        <th>Description</th>
                        <td> {
                            action === 'view' ? todoItem.description : <textarea name='description' value= {todoItem.description} onChange={handleChange} rows="3" cols="37"></textarea>
                        } </td>
                    </tr>
                    {todoItem.id > 0 &&
                    <tr>
                        <th>Creation Date</th>
                        <td> { Moment(todoItem.creationDate).format('DD-MMM-YYYY') } </td>
                    </tr>
                    }
                    <tr>
                        <th>Due Date</th>
                        <td> {
                            action === 'view' ? Moment(todoItem.dueDate).format('DD-MMM-YYYY') : <input type='date' name='dueDate' value= {todoItem.dueDate} onChange={handleChange}></input>
                        } </td>
                    </tr><tr>
                        <th>Status</th>
                        <td> {
                            action === 'view' ? todoItem.status : 
                            <select name='status' value={todoItem.status} onChange={handleChange}>
                                {statusList.map((status) => <option key={status.value} value={status.value}>{status.display}</option>)}
                            </select>
                        } </td>
                    </tr>
                    {todoItem.id > 0 &&
                    <tr>                    
                        <th>Comments</th>
                        <td>
                        
                            <table className='table-striped' border='1'>
                                <thead>
                                { todoItem.todoTaskCommentsSet.length > 0 &&
                                    <tr>
                                        <th>Date</th>
                                        <th>Comments</th>
                                    </tr>
                                }
                                </thead>
                                <tbody>
                                { todoItem.todoTaskCommentsSet.map(todoComments => 
                                    <tr key={todoComments.todoTaskCommentsId}>
                                        <td>{ Moment(todoComments.creationDate).format('DD-MMM-YYYY') }</td>
                                        <td>{todoComments.taskComments}</td>
                                    </tr>
                                )}
                                { action === 'edit' &&
                                <>
                                    <tr>
                                        <td colSpan="2">
                                            <button type="button" className="btn btn-success" onClick={() => component.toggleComments()}>Add New Comments</button>
                                        </td>
                                    </tr>
                                    {component.state.showCommentTable &&
                                    <tr>
                                    <td colSpan="2">
                                        <table>
                                            <tbody>
                                            <tr>
                                                <th>Description</th>
                                                <td>
                                                    <textarea rows="2" cols="24" name='taskComments' value= {todoTaskComments.taskComments}
                                                    onChange={handleChange}></textarea>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    </tr>                                    
                                    }
                                </>
                                }
                                </tbody>
                            </table>
                        
                        </td>
                    </tr>
                     }
                    <tr>
                        {action === 'view' ? null:
                            <td colSpan='2' align='center'><button className="btn btn-success" onClick={() => handleSubmit(todoItem,todoTaskComments)}>Submit</button></td>
                        }
                    </tr>
                </tbody>  
            </table> 
        </form>
    );    
}

export default TodoApplicationSingleItemView