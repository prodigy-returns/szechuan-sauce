import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    const { value, name } = e.target;
    setState((state) => ({ ...state, [name]: value }));
  };

  const onLogin = () => navigate("/account");

  return (
    <div className="App">
      <input
        data-test="name-input"
        type="text"
        name="name"
        value={state.name}
        onChange={onChange}
      />
      <input
        data-test="password-input"
        type="text"
        name="password"
        value={state.password}
        onChange={onChange}
      />
      <button onClick={onLogin}>Log In</button>
    </div>
  );
};

export { Login };
