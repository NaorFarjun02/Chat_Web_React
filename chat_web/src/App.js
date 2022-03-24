import "./App.css";
import LoginCreateAccount from "./login-createaccount";
import Chat from "./chat";
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "Mandalflik19",
    password: "2",
    email: "naorfarjun@gmail.sdf",
    id: 1,
  });
  let check = false;
  const createAccount = (userToCreate) => {
    console.log("create account");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userToCreate),
    };
    fetch("http://localhost:3000/users", requestOptions) //send request to the json-server
      .then((response) => response.json()) //get respons from the json-server that incloud the item i just add
      .then((newuser) => {
        console.log(newuser);
      });
  };
  const login = (userToLogin) => {
    console.log("login-end");
    setCurrentUser(userToLogin);
  };
  return (
    <div className="App">
      <Chat user={currentUser} />

      {/* <LoginCreateAccount createAccount={createAccount} login={login} /> */}
    </div>
  );
}

export default App;
