import React from "react";
// import "./logincreateaccount.css";
import { useState, useEffect } from "react";
function Profile(props) {
  return (
    <div className="container=pro">
      <div className="box_div_active">
        <div className="user-data">
          <h2>{props.user.username}Mandalflik</h2>
          <h6>{props.user.id}3</h6>
        </div>
        <div className="friend-list">
          <ul>
            <li>naor</li>
            <li>mosha</li>
            <li>dan</li>
            <li>ban</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Profile;
