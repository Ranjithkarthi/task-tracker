import React, { useState } from "react";
import EditTaskModal from "../EditTaskModal/EditTaskModal";
import "./TaskList.css";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => setEditingTask(task);
  const closeEditModal = () => setEditingTask(null);

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks added yet!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td>{task.status}</td>
                <td>
                  <button onClick={() => handleEdit(task)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          updateTask={updateTask}
          closeEditModal={closeEditModal}
        />
      )}
    </div>
  );
};

export default TaskList;
