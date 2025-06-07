import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreate = async (taskData) => {
    await axios.post('http://localhost:5000/api/tasks', taskData);
    fetchTasks();
  };

  const handleUpdate = async (id, updatedData) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedData);
    setEditTask(null);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  const handleCompleteToggle = async (task) => {
    await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
      ...task,
      isCompleted: !task.isCompleted
    });
    fetchTasks();
  };

  const pendingTasks = tasks.filter(t => !t.isCompleted);
  const completedTasks = tasks.filter(t => t.isCompleted);

  return (
    <div className="p-6">
      <Header />
      <TaskForm onSubmit={editTask ? handleUpdate : handleCreate} editTask={editTask} />
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-orange-700">Pending Tasks</h2>
          {pendingTasks.map(task => (
            <TaskCard
              key={task._id}
              task={task}
              onEdit={() => setEditTask(task)}
              onDelete={handleDelete}
              onComplete={handleCompleteToggle}
            />
          ))}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 text-green-700">Completed Tasks</h2>
          {completedTasks.map(task => (
            <TaskCard
              key={task._id}
              task={task}
              onEdit={() => setEditTask(task)}
              onDelete={handleDelete}
              onComplete={handleCompleteToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
