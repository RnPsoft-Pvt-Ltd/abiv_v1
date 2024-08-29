import React, { useState } from "react";
import avatar from "./images/avatar.png";
import bot from "./images/bot.png";
import chat from "./images/chat-icon.png";
import send from "./images/Vector.png";
import "./bot.css";
import axios from 'axios'
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {role: 'assistant', content: "Hello I am ABIV virtual assistant, How may i help you today?"}
 ]);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello I am ABIV virtual assistant, How may i help you today?" }
  ]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const userMessage = e.target.elements.message.value;
    if (userMessage) {
      let message=userMessage
      setMessages([...messages, { sender: "user", text: userMessage }]);
      const newChatHistory = [...chatHistory, { role: 'user', content: userMessage }];
      // Add bot's response
      const response = await axios.post('https://abiv.rnpsoft.com/chat', {
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: 'You are a helpful assistant in an application.' },
            ...newChatHistory // Include the chat history in the request
        ]
    });

    const botResponse = response.data.choices[0].message.content;

    // Add bot's response to the chat history
    setChatHistory([...newChatHistory, { role: 'assistant', content: botResponse }]);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `${botResponse}`}
      ]);
      e.target.elements.message.value = "";
    }
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <img src={chat} alt="Chatbot Icon" />
        <p className="chatbot-icon-text">CHAT WITH US HERE!</p>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <img className="chatbot-avatar" src={'https://assets-v2.lottiefiles.com/a/4bf1141e-1167-11ee-8a8b-d7fba4b8c5e1/LbKxL7PDpt.gif'} alt="Chatbot Avatar" />
            <div className="chatbot-header-info">
              <h2>ChatBot</h2>
              <div className="online-status">
                <span className="online-dot"></span> Online
              </div>
            </div>
            <button className="exit-button" onClick={toggleChatbot}>Exit</button>
          </div>

          {/* Chat messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "bot" ? "message-bot-container" : "message-user"}>
                {msg.sender === "bot" && (
              <div className="message-bot-avatar">
                <img className="chatbot-avatar" src={'https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg'} alt="Bot Avatar" />
              </div>
              )}
              <div className={msg.sender === "bot" ? "message-bot-text" : ""}>
              <p>{msg.text}</p>
              </div>
            </div>
            ))}
          </div>
          
          {/* Message input */}
          <form className="chatbot-input" onSubmit={sendMessage}>
            <input
              type="text"
              name="message"
              placeholder="Ask your question..."
              autoComplete="off"
            />
            <button type="submit">
              <img src={send} alt="Send Icon" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
