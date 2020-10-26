import axios from 'axios'

const TODO_API_URL = 'http://localhost:8080/Todo'
class TodoService {
    retrieveAllTodoList() {
        return axios.get(`${TODO_API_URL}/findAll`);
    }

    retrieveById(id) {
        return axios.get(`${TODO_API_URL}/find/${id}`)
    }

    deleteById(id) {
        return axios.delete(`${TODO_API_URL}/deleteById/${id}`)
    }
    update(todoItem) {
        return axios.put(`${TODO_API_URL}/update`, todoItem)
    }
    create(todoItem) {
        return axios.post(`${TODO_API_URL}/create`, todoItem)
    }

    retrieveTodoStatus() {
        return axios.get(`${TODO_API_URL}/getStatus`);
    }

}
export default new TodoService()