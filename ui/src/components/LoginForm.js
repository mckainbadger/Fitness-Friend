import React from "react";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = () => {
    //Fetch request for login
  };
  return (
    <Grid>
      <form>
        <h1>Login</h1>
        <div>
          <label>Username: </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            required
            type="text"
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type={isPasswordVisible ? "text" : "password"}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={isPasswordVisible}
            onChange={(e) => {
              setIsPasswordVisible(e.target.checked);
            }}
            id="loginPasswordVisibleInput"
          />
          <label className="show-password" htmlFor="loginPasswordVisibleInput">
            Show&nbsp;Password
          </label>
        </div>

        <Button size="small" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default LoginForm;
