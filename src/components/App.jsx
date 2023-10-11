import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
// import Register from "./Register";

var userIsRegistered = true;

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Login isRegister={userIsRegistered} />
      </div>
      <Footer />
    </>
  );
}

export default App;
