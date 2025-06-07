import axios from "axios";

const BASE_URL = "http://localhost:5000/api/tasks";

export const getTasks = () => axios.get(BASE_URL);
export const createTask = (task) => axios.post(BASE_URL, task);
export const updateTask = (id, updatedTask) => axios.put(`${BASE_URL}/${id}`, updatedTask);
export const deleteTask = (id) => axios.delete(`${BASE_URL}/${id}`);
