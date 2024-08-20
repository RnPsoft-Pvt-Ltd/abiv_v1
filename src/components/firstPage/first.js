import React, { useState } from 'react';
import './style.css';
import robot from '../../assets/robot.png'; 
import inbox from '../../assets/inbox.svg';
import send from '../../assets/send.png';

const FirstComponent = () => {
  const [question, setQuestion] = useState('');

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };

  const sending = () => {
    if (question === '') {
      alert('Please enter something');
    } else {
      window.location.href = '/LoginSignUP';
    }
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      window.location.href = '/LoginSignUP';
    }
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      window.location.href = '/LoginSignUP';
    }
  };

  return (
    <section className="hero-background">
      <img src={robot} alt="Robot illustration" className="hero-image" />
      <div className="section-content">
        <h1>Study with any Text / Image / PDF</h1>
        <p className="description">
          Join millions of students, researchers and professionals to instantly
          answer questions and understand research with AI
        </p>

        <div
          className="file-drop"
          id="file-drop"
          onDrop={handleFileDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <input type="file" name="file" id="file" onChange={handleFileChange} />
          <label htmlFor="file">
            <img src={inbox} alt="Inbox icon" className="icon" />
            Drop PDF here
          </label>
          <p id="browsecomp">Browse my computer</p>
          <p id="fromurl">From URL</p>
        </div>

        <div className="question-input">
          <input
            type="text"
            placeholder="Ask a Question"
            value={question}
            onChange={handleInputChange}
          />
          <div className="send-button" onClick={sending}>
            <img src={send} alt="Send icon" />
          </div>
        </div>
      </div>

      <div className="popup" id="popup" style={{ display: 'none' }}>
        {/* Popup content (if any) */}
      </div>
    </section>
  );
};

export default FirstComponent;
