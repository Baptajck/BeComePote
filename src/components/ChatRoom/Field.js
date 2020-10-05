import React, { useState, useEffect } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5000";

const Field = () => {

  const [response, setResponse] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }, []);

  return (
    <div className="chatroom-reply-container">
      
      <form action="" id="form" className="chatroom-reply-form">
        <input
          id="m"
          type="text"
          className="chatroom-reply-input"
          placeholder="&nbsp;envoyer un message..."
        />
        <button type="button" title="envoyer un message" className="chatroom-reply-button">
          <i type="button" className="chatroom-reply-icon">
            <FaRegPaperPlane />
          </i>
        </button>
      </form>
    </div>
  )
}

export default Field;


// <p>
//   It's <time dateTime={response}>{response}</time>
// </p>
