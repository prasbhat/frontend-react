import axios from 'axios'

const TODO_API_URL = 'http://localhost:8080/todo-app/tasks'
class TodoService {
    retrieveAllTodoList() {
        return axios.get(`${TODO_API_URL}`);
    }

    deleteById(id) {
        return axios.delete(`${TODO_API_URL}/${id}`)
    }

    update(todoItem) {
        return axios.put(`${TODO_API_URL}`, todoItem)
    }
    
    create(todoItem) {        
        axios({
            method: 'post',
            url: `${TODO_API_URL}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: todoItem
        });
        // return axios.post(`${TODO_API_URL}`, todoItem)
    }

    retrieveTodoStatus() {
        return axios.get(`${TODO_API_URL}/status`);
    }

}
export default new TodoService()