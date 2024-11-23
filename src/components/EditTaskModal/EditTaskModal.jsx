import React, { useState } from "react";
import "./EditTaskModal.css";

const EditTaskModal = ({ task, updateTask, closeEditModal }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [status, setStatus] = useState(task.status);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      ...task,
      title,
      description,
      dueDate,
      status,
    };

    updateTask(updatedTask);
    closeEditModal();
  };

  return (
    <div className="modal">
      <form className="edit-task-form" onSubmit={handleSubmit}>
        <h2>Edit Task</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={closeEditModal}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditTaskModal;
