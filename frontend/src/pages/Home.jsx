

// import { useEffect, useState } from "react";
// import axios from "axios";
// import TaskForm from "../components/TaskForm";
// import TaskCard from "../components/TaskCard";

// const Home = () => {
//   const [tasks, setTasks] = useState([]);
//   const [editingTask, setEditingTask] = useState(null);

//   const fetchTasks = async () => {
//     const res = await axios.get("http://localhost:5000/api/tasks");
//     setTasks(res.data);
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:5000/api/tasks/${id}`);
//     fetchTasks();
//   };

//   const toggleDone = async (id) => {
//     const task = tasks.find((t) => t._id === id);
//     await axios.put(`http://localhost:5000/api/tasks/${id}`, {
//       ...task,
//       isCompleted: !task.isCompleted,
//     });
//     fetchTasks();
//   };

//   const pendingTasks = tasks.filter((t) => !t.isCompleted);
//   const completedTasks = tasks.filter((t) => t.isCompleted);

//   return (
//     <main className="min-h-screen bg-gradient-to-tr from-orange-50 via-white to-orange-100 p-4">
//       <TaskForm
//         fetchTasks={fetchTasks}
//         editingTask={editingTask}
//         setEditingTask={setEditingTask}
//       />

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
//         {pendingTasks.map((t) => (
//           <TaskCard
//             key={t._id}
//             task={t}
//             onEdit={setEditingTask}
//             onDelete={handleDelete}
//             onComplete={toggleDone}
//           />
//         ))}

//         {completedTasks.map((t) => (
//           <TaskCard
//             key={t._id}
//             task={t}
//             onEdit={setEditingTask}
//             onDelete={handleDelete}
//             onComplete={toggleDone}
//           />
//         ))}
//       </div>
//     </main>
//   );
// };
// export default Home;


import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  const toggleDone = async (id) => {
    const task = tasks.find((t) => t._id === id);
    await axios.put(`http://localhost:5000/api/tasks/${id}`, {
      ...task,
      isCompleted: !task.isCompleted,
    });
    fetchTasks();
  };

  const pendingTasks = tasks.filter((t) => !t.isCompleted);
  const completedTasks = tasks.filter((t) => t.isCompleted);

  return (
    <main className="min-h-screen bg-gradient-to-tr from-orange-50 via-white to-orange-100 p-4">
      {/* Show global form only when not editing */}
      {!editingTask && (
        <TaskForm fetchTasks={fetchTasks} setEditingTask={setEditingTask} />
      )}

      <h2 className="text-2xl font-bold text-orange-700 mt-8 mb-2">Pending Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {pendingTasks.map((t) =>
          editingTask?._id === t._id ? (
            <TaskForm
              key={t._id}
              editingTask={editingTask}
              setEditingTask={setEditingTask}
              fetchTasks={fetchTasks}
            />
          ) : (
            <TaskCard
              key={t._id}
              task={t}
              onEdit={() => setEditingTask(t)}
              onDelete={handleDelete}
              onComplete={toggleDone}
            />
          )
        )}
      </div>

      <h2 className="text-2xl font-bold text-green-700 mt-12 mb-2">Completed Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {completedTasks.map((t) =>
          editingTask?._id === t._id ? (
            <TaskForm
              key={t._id}
              editingTask={editingTask}
              setEditingTask={setEditingTask}
              fetchTasks={fetchTasks}
            />
          ) : (
            <TaskCard
              key={t._id}
              task={t}
              onEdit={() => setEditingTask(t)}
              onDelete={handleDelete}
              onComplete={toggleDone}
            />
          )
        )}
      </div>
    </main>
  );
};

export default Home;



