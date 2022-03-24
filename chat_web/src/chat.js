import React from "react";
// import { useState, useEffect } from "react";
import styles from "./profile.module.css";
function Chat(props) {
  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
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
      </div>
      <div className={styles.chat_div}>
        <h1>Chat App</h1>
        <textarea className={styles.msg_view}></textarea>
        <div className={styles.your_text_div}>
          <input
            className={styles.your_text}
            type="text"
            placeholder="Type your msg here"
          />
          <button className={styles.send_btn} type="button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
export default Chat;
