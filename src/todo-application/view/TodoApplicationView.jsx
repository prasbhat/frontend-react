import React from 'react';

const TodoApplicationView = (component) => {
    return (
        <div className="container">  
            <button className="btn btn-success" onClick={() => component.create (-1)}>Create</button>
            <table className='table-striped' border='1'>
                <thead>
                    <tr>
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
                    { component.state.todoList.map(todoItem =>
                        <tr key={todoItem.id}>
                            <td>{todoItem.title}</td>
                            <td>{todoItem.description}</td>
                            <td>{todoItem.dueDate}</td>
                            <td>{todoItem.status}</td>
                            <td><button className="btn btn-success" onClick={() => component.view(todoItem)}>View</button></td>
                            <td><button className="btn btn-success" onClick={() => component.edit(todoItem)}>Edit</button></td>
                            <td><button className="btn btn-warning" onClick={() => component.delete(todoItem.id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>             
    );
}

export default TodoApplicationView