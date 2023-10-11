import React from "react";
import Input from "./Input";
function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      {!props.isRegister && (
        <Input type="password" placeholder="confirm password" />
      )}
      <button type="submit">{props.isRegister ? "Login" : "Register"}</button>
    </form>
  );
}

export default Login;
