// import React, { useState } from 'react';
// import './chat.css'
// import Navbar from '../navbar/Navbar';
// import Footer from '../footer/Footer';
// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [currentMessage, setCurrentMessage] = useState('');

//   const handleSendMessage = () => {
//     if (currentMessage.trim() !== '') {
//       setMessages([...messages, currentMessage]);
//       setCurrentMessage('');
//     }
//   };

//   const handleInputChange = (e) => {
//     setCurrentMessage(e.target.value);
//   };

//   return (
//     <div>
//         <Navbar/>
//       <div className="message-container">
//         {messages.map((message, index) => (
//           <div key={index} className="message">
//             {message}
//           </div>
//         ))}
//       </div>
//       <div className="input-container7">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={currentMessage}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Chat;
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Collabrate Employee && Users</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;