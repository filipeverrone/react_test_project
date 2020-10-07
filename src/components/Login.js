import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Users from "../authenticate.js";

// import { Container } from './styles';
const Todo = (data) => {
  const [user, updateUser] = useState("");
  const [users, updateUsers] = useState([]);

  const [password, updatePassword] = useState("");

  const handleInputPassChange = (e) => updatePassword(e.target.value);

  const handleInputChange = (e) => updateUser(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (user.trim() === "" || password.trim() === "") {
      updateUsers([...users, "All fields is required"]);
    } else if (user.trim() || password.trim() || password == "") {
      updateUsers([...users, user]);
      updateUser("");
      updatePassword("");
    }
  };

  return (
    <Grid
      alignItems="center"
      display="flex"
      justify="center"
      direction="row"
      wrap="wrap"
      style={{
        margin: 0,
        background: "black",
        height: "97vh",
        width: "100%",
        fontWeight: "12",
      }}
    >
      <Grid
        style={{
          height: "42%",
        }}
      ></Grid>
      <Grid
        container
        justify="center"
        alignItems="space-between"
        alignContent="center"
        direction="column"
      >
        <form onSubmit={handleFormSubmit}>
          <Grid item>
            <input
              data-testid="form-field-user"
              onChange={handleInputChange}
              placeholder="User name or e-mail"
              type="text"
              value={user}
            />
          </Grid>
          <Grid item>
            <input
              style={{
                marginTop: 5,
              }}
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
            <button
              style={{
                border: "none",
                WebkitBorderRadius: "8px",
                marginTop: 5,
                color: "black",
                backgroundColor: "#009cde",
                width: "100%",
                height: "5vh",
                WebkitTextFillColor: "white",
              }}
              data-testid="form-btn"
              type="submit"
            >
              Login
            </button>
          </Grid>
        </form>
      </Grid>
      <Grid justify="center" alignContent="center" alignItems="center">
        <table
          data-testid="table"
          style={{
            color: "#009cde",
          }}
        >
          <thead>
            <tr>
              <line>Status Authentication</line>
            </tr>
          </thead>
          <tbody>
            {users.map((t, index) => (
              <tr key={index}>
                <td>{t}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Grid>
    </Grid>
  );
};

export default Todo;
