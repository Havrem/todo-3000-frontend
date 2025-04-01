import { apiClient } from "./apiClient";

export const todoService = {
    getTodos: () => apiClient('/todos', { method: 'GET'}),
    createTodo: (data) => apiClient('/todos', {method: 'POST', body: JSON.stringify(data)}),
    updateTodo: (id, data) => apiClient(`/todos/${id}`, {method: 'PUT', body: JSON.stringify(data)}),
    deleteTodo: (id) => apiClient(`/todos/${id}`, {method: 'DELETE'})
}