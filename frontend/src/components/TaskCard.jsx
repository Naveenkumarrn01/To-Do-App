import React from 'react';

const TaskCard = ({ task, onEdit, onDelete, onComplete }) => {
  const isCompleted = task.isCompleted;

  return (
    <div className="relative bg-gradient-to-br from-orange-100 via-white to-orange-200 shadow-2xl p-5 mb-6 rounded-2xl border-l-[6px] border-orange-500 transition-transform hover:scale-105 duration-300">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-orange-700">{task.title}</h3>
        <p className="text-base text-gray-700">{task.description}</p>
        <p className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">Category:</span> {task.category}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">Deadline:</span>{' '}
          {new Date(task.deadline).toLocaleDateString()}
        </p>
        <p className="text-xs text-gray-400">
          Created: {new Date(task.createdAt).toLocaleDateString()}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={() => onEdit(task)}
          className="bg-orange-400 hover:bg-orange-600 transition-colors text-white px-4 py-1.5 rounded-xl shadow-md"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onComplete(task)}
          className={`${
            isCompleted ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
          } transition-colors text-white px-4 py-1.5 rounded-xl shadow-md`}
        >
          {isCompleted ? '↩️ Undo' : '✅ Done'}
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 hover:bg-red-700 transition-colors text-white px-4 py-1.5 rounded-xl shadow-md"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;




