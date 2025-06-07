import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, editTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    deadline: ''
  });

  useEffect(() => {
    if (editTask) {
      setFormData({
        title: editTask.title,
        description: editTask.description,
        category: editTask.category,
        deadline: editTask.deadline?.substring(0, 10)
      });
    }
  }, [editTask]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editTask) {
      onSubmit(editTask._id, formData);
    } else {
      onSubmit(formData);
    }
    setFormData({ title: '', description: '', category: '', deadline: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mt-6 bg-white p-6 rounded-2xl shadow-xl">
      <fieldset className="grid gap-4">
        <legend className="text-lg font-bold mb-2 text-orange-600">Task {editTask ? 'Update' : 'Creation'}</legend>

        <input
          name="title"
          type="text"
          placeholder="Enter task title"
          required
          value={formData.title}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 focus:outline-orange-500"
        />
        <input
          name="description"
          type="text"
          placeholder="Enter task description"
          value={formData.description}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 focus:outline-orange-500"
        />
        <input
          name="category"
          type="text"
          placeholder="Enter task category"
          value={formData.category}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 focus:outline-orange-500"
        />
        <input
          name="deadline"
          type="date"
          required
          value={formData.deadline}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 focus:outline-orange-500"
        />
        <button className="bg-orange-500 hover:bg-black text-white font-bold py-2 px-4 rounded transition-all duration-300">
          {editTask ? 'Update Task' : 'Add Task'}
        </button>
      </fieldset>
    </form>
  );
};

export default TaskForm;
