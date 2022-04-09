import React from "react";
import { useState, useEffect } from "react";
import styles from "./profile.module.css";
function Chat(props) {
  const [msg, setMSG] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/messages") //send request to the json-server
      .then((response) => response.json()) //get respons from the json-server that incloud the item i just add
      .then((msgs) => {
        console.log(msgs);
        setMessages(msgs)
      });
  },[])



  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }
  function logout() {
    console.log("logout");
  }

  function sendMsg() {
    if (msg === "") {
      alert("you can't sand empty message");
      return;
    }
    console.log("send: " + msg);
    props.sendMsg(msg)
    setMSG("");
  }
  return (
    <div className={styles.container}>
      <div className={styles.profile_div}>
        <div className={styles.user_data_div}>
          <h3 className={styles.user_data} id={styles.usernmae}>
            Username: {props.user.username}
          </h3>
          <h6 className={styles.user_data} id={styles.uid}>
            UID: {pad(props.user.id, 8)}
          </h6>
        </div>
        <button className={styles.logout_btn} type="button" onClick={logout}>
          LOG OUT
        </button>
      </div>
      <div className={styles.chat_div}>
        <h1>Chat App</h1>
        <div className={styles.msg_view}>
          <div className={styles.msg_div}>
            <label className={styles.msg_username}>NAOR</label>|
            <label className={styles.msg}>hello there</label>
          </div>
        </div>
        <div className={styles.your_text_div}>
          <input
            className={styles.your_text}
            type="text"
            value={msg}
            onChange={(e) => setMSG(e.target.value)}
            id={styles.your_text}
            placeholder="Type your msg here"
          />
          <button
            className={styles.send_btn}
            id={styles.send_btn}
            type="button"
            onClick={sendMsg}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
export default Chat;
