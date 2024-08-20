import React from 'react';
import demoVideoSrc from '../../assets/alter.mp4';
import "./DemoContent.css"
const DemoContent = () => {
  return (
    <main>
      <div className="headline">
        <h1>Lorem Ipsum gaienre nor trablerize form</h1>
      </div>
      <div className="video-section">
        <video controls>
          <source src={demoVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
};

export default DemoContent;
