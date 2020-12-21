import React from 'react';

const TodoApplicationSingleItemView = (component) => {
    const action = component.action;
    const todoItem = component.state.todoItem;
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
                            action === 'view' ? todoItem.title : <input type='text' name='title' value= {todoItem.title} onChange={handleChange} size="47"></input>
                        } </td>                                
                        </tr><tr>
                        <th>Description</th>
                        <td> {
                            action === 'view' ? todoItem.description : <textarea name='description' value= {todoItem.description} onChange={handleChange} rows="3" cols="50"></textarea>
                        } </td>
                    </tr><tr>
                        <th>Due Date</th>
                        <td> {
                            action === 'view' ? todoItem.dueDate : <input type='date' name='dueDate' value= {todoItem.dueDate} onChange={handleChange}></input>
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
                    <tr>
                        {action === 'view' ? null:
                            <td colSpan='2' align='center'><button className="btn btn-success" onClick={() => handleSubmit(todoItem)}>Submit</button></td>
                        }
                    </tr>
                </tbody>  
            </table> 
        </form>
    );    
}

export default TodoApplicationSingleItemView