import React, { useState } from "react";
import Input from "./Input";
function Login(props) {
  const [mouse, setMouse] = useState(false);
  const onMouseOverClick = () => {
    setMouse(true);
  };
  const onMouseOutClick = () => {
    setMouse(false);
  };
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      {!props.isRegister && (
        <Input type="password" placeholder="confirm password" />
      )}
      <button
        type="submit"
        style={{ backgroundColor: mouse ? "black" : "white" }}
        onMouseOver={onMouseOverClick}
        onMouseOut={onMouseOutClick}
      >
        {props.isRegister ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Login;
