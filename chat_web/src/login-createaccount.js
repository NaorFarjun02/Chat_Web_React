import React from "react";
import "./logincreateaccount.css";
import { useState, useEffect } from "react";
function LoginCreateAccount(props) {
  const switchBarClick = (e) => {
    document.getElementsByClassName("container")[0].style.display = "none";

    const login_switch = document.querySelector("[data-loginswitch]");
    const create_switch = document.querySelector("[data-createswitch]");
    if (e.target.id === "switch_login_btn") {
      login_switch.className = "box_div_active";
      create_switch.className = "box_div";
      // console.log("login");
    } else if (e.target.id === "switch_create_account_btn") {
      create_switch.className = "box_div_active";
      login_switch.className = "box_div";
      // console.log("cerate");
    }
  };

  //get users
  const [users, setUsers] = useState([]);
  function getUsers() {
    console.log("get users");
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        // console.log(users);
      });
  }
  useEffect(() => {
    getUsers();
  }, []);

  // login status
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  function chackLoginValidate() {
    var validateEmail = /\S+@\S+\.\S+/;
    if (login.email === "" || login.password === "") {
      alert("Fill all the cells");
      return false;
    } else if (validateEmail.test(login.email) !== true) {
      alert("Please enter an email");
      return false;
    }
    return true;
  }
  function checkIfUserExist() {
    // console.log(users);
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.email == login.email && user.password == login.password) {
        // console.log(user.id);
        return user;
      }
    }
    return null;
  }
  const loginButton = () => {
    getUsers();
    if (chackLoginValidate() === false) {
      return;
    }
    var user = checkIfUserExist();
    // console.log(userId);
    if (user != null) {
      props.login(user);
      // document.getElementsByClassName("container")[0].style.display = "none";
      // setLogin({ email: "", password: "" });
      return;
    } else {
      alert("Email or Password are incorrect");
      console.log(user);
    }
  };

  // create account status
  const [createaccount, setCreateAccount] = useState({
    username: "",
    password: "",
    email: "",
  });
  function checkIfUserInfoInUse(email, username) {
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.email == email) {
        alert("The email you entered exists in the system");
        return false;
      } else if (user.username == username) {
        alert("The username you entered exists in the system");
        return false;
      }
    }
    return true;
  }

  const addUserButton = () => {
    getUsers();
    var validateEmail = /\S+@\S+\.\S+/;
    if (
      createaccount.username === "" ||
      createaccount.password === "" ||
      createaccount.email === ""
    ) {
      alert("Fill all the cells");
      return;
    } else if (validateEmail.test(createaccount.email) !== true) {
      alert("Please enter an email");
      return;
    }
    if (
      checkIfUserInfoInUse(createaccount.email, createaccount.username) == true
    ) {
      props.createAccount(createaccount);
      setCreateAccount({ username: "", password: "", email: "" });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="switch_bar_div" id="switch_bar">
          <button
            className="switch_btn"
            id="switch_login_btn"
            onClick={(e) => switchBarClick(e)}
          >
            Login
          </button>
          <button
            className="switch_btn"
            id="switch_create_account_btn"
            onClick={(e) => switchBarClick(e)}
          >
            Create Account
          </button>
        </div>

        {/* login div */}
        <div className="box_div_active" id="login_div" data-loginswitch>
          <h1>Login to your account</h1>
          <input
            type="email"
            placeholder="Email"
            value={login.email}
            required
            onChange={(e) =>
              setLogin({
                email: e.target.value,
                password: login.password,
              })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={login.password}
            required
            onChange={(e) =>
              setLogin({
                email: login.email,
                password: e.target.value,
              })
            }
          />
          <button
            type="button"
            className="box_btn"
            id="login_btn"
            onClick={loginButton}
          >
            Login
          </button>
        </div>

        {/* create account div */}
        <div className="box_div" id="create_div" data-createswitch>
          <h1>Create your account</h1>
          <input
            type="email"
            placeholder="Email"
            value={createaccount.email}
            required
            onChange={(e) =>
              setCreateAccount({
                username: createaccount.username,
                password: createaccount.password,
                email: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Username"
            value={createaccount.username}
            required
            onChange={(e) =>
              setCreateAccount({
                username: e.target.value,
                password: createaccount.password,
                email: createaccount.email,
              })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={createaccount.password}
            required
            onChange={(e) =>
              setCreateAccount({
                username: createaccount.username,
                password: e.target.value,
                email: createaccount.email,
              })
            }
          />

          <button
            type="button"
            className="box_btn"
            id="create_btn"
            onClick={addUserButton}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
export default LoginCreateAccount;
