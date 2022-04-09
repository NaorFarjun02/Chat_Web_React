import "./App.css";
import LoginCreateAccount from "./login-createaccount";
import Chat from "./chat";
import { useState, useEffect } from "react";
// import Date;
function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loginStatus, setLoginStatus] = useState(true);

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
    console.log("login-ok");
    setCurrentUser(userToLogin);
    setLoginStatus(true);
  };
  const sendMsg = (msg) => {
    // var today=new Data
    const newMsg = {
      text: msg,
      userId: currentUser.id,
      username: currentUser.username,
      timeStamp: "",
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMsg),
    };
    fetch("http://localhost:3000/messages", requestOptions) //send request to the json-server
      .then((response) => response.json()) //get respons from the json-server that incloud the item i just add
      .then((newuser) => {
        console.log(newuser);
      });
  };
  return (
    <div className="App">
      <Chat user={currentUser} sendMsg={sendMsg}/>
      {/* {loginStatus === true && <Chat user={currentUser} sendMsg={sendMsg} />} */}
      {/* {loginStatus === false && (
        <LoginCreateAccount createAccount={createAccount} login={login} />
      )} */}
    </div>
  );
}

export default App;
