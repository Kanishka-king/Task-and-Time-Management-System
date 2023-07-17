import React, { useState } from 'react';
import './chat.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSendMessage = () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, currentMessage]);
      setCurrentMessage('');
    }
  };

  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value);
  };

  return (
    <div>
        <Navbar/>
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="input-container7">
        <input
          type="text"
          placeholder="Type your message..."
          value={currentMessage}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <Footer/>
    </div>
  );
};

export default Chat;
