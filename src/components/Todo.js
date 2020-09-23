import React, { useState } from "react";

// import { Container } from './styles';

const Todo = () => {
  const [task, updateTask] = useState("");
  const [tasks, updateTasks] = useState([]);

  const handleInputChange = (e) => updateTask(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      updateTasks([...tasks, task]);
      updateTask("");
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          data-testid="form-field"
          onChange={handleInputChange}
          placeholder="Type a new task here"
          type="text"
          value={task}
        />
        <button data-testid="form-btn" type="submit">
          Add new task
        </button>
      </form>
      <table data-testid="table">
        <thead>
          <tr>
            <li>Task</li>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, index) => (
            <tr key={index}>
              <td>{t}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Todo;
