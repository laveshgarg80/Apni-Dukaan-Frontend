import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

function SigninScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function logIn() {
    var body = {
      username: username,
      password: password,
    };
    var response = await axios.post(`${baseUrl}/auth/signin`, body);
    console.log(response.data.id);
    return response.data;
  }
  return (
    <>
      <div className="form-group">
        <label>Username enter this as a username (atuny0)</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(event) => {
            console.log(event.target.value);
            setUsername(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Password enter this as a password (9uQFF1Lh)</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={(event) => {
            console.log(event.target.value);
            setPassword(event.target.value);
          }}
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={async () => {
          var data = await logIn();
          if (data.id !== undefined) {
            navigate("/home");
          } else {
            alert("Enter the correct credentials");
          }
        }}
      >
        Submit
      </button>
    </>
  );
}

export default SigninScreen;
