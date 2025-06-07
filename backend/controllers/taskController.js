const Task = require("../models/Task");

exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

exports.getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};

exports.createTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedTask);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
