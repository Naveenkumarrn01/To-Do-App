// import { useState } from "react";
// import { updateTask } from "../api/taskApi";

// export default function EditModal({ task, onClose, onSave }) {
//   const [form, setForm] = useState({ ...task });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await updateTask(task._id, form);
//     onSave();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
//         <h2 className="text-xl font-bold text-orange-600 mb-4">Edit Task</h2>
//         <input name="title" value={form.title} onChange={handleChange} className="mb-3 w-full p-2 border rounded" />
//         <input name="description" value={form.description} onChange={handleChange} className="mb-3 w-full p-2 border rounded" />
//         <input name="category" value={form.category} onChange={handleChange} className="mb-3 w-full p-2 border rounded" />
//         <input name="deadline" type="date" value={form.deadline?.slice(0, 10)} onChange={handleChange} className="mb-3 w-full p-2 border rounded" />
//         <div className="flex justify-end gap-3">
//           <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
//           <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded">Update</button>
//         </div>
//       </form>
//     </div>
//   );
// }
