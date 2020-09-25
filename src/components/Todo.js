import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

// import { Container } from './styles';
const Todo = () => {
  const [task, updateTask] = useState("");
  const [tasks, updateTasks] = useState([]);

  const [password, updatePassword] = useState("");
  const [passwords, updatePasswords] = useState("");

  const handleInputPassChange = (e) => updatePassword(e.target.value);

  const handleInputChange = (e) => updateTask(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (task.trim() || password.trim()) {
      updateTasks([...tasks, task]);
      updateTask("");
      updatePasswords([...password]);
      updatePassword("");
    }
  };

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="column"
        alignContent="center"
      >
        <form onSubmit={handleFormSubmit}>
          <Grid item>
            <input
              data-testid="form-field-user"
              onChange={handleInputChange}
              placeholder="User name or e-mail"
              type="text"
              value={task}
            />
          </Grid>
          <Grid item>
            <input
              data-testid="form-field-pass"
              onChange={handleInputPassChange}
              placeholder="Insert password"
              type="password"
              maxLength="10"
              minLength="5"
              value={password}
            />
          </Grid>
          <Grid>
            <button data-testid="form-btn" type="submit">
              Submit
            </button>
          </Grid>
        </form>
      </Grid>
      <Grid justify="center" alignContent="center" alignItems="center">
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
      </Grid>
    </>
  );
};

export default Todo;
