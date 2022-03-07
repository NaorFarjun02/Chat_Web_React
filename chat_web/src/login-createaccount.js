import React from "react";
import "./logincreateaccount.css";
function LoginCreateAccount(params) {
  const switchBarClick = (e) => {
    const login_switch = document.querySelector("[data-loginswitch]");
    const create_switch = document.querySelector("[data-createswitch]");
    if (e.target.id === "switch_login_btn") {
      login_switch.className = "box_div_active";
      create_switch.className = "box_div";
      console.log("login");
    } else if (e.target.id === "switch_create_account_btn") {
      create_switch.className = "box_div_active";
      login_switch.className = "box_div";
      console.log("cerate");
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
        <div className="box_div_active" id="login_div" data-loginswitch>
          <h1>Login to your account</h1>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="button" className="box_btn" id="login_btn">
            Login
          </button>
        </div>
        <div className="box_div" id="create_div" data-createswitch>
          <h1>Create your account</h1>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Password" required />

          <button type="button" className="box_btn" id="create_btn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default LoginCreateAccount;
