import React from 'react';
import './App.css';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';

const WhyABIV = () => {
  return (
    <div className="why-abiv-container">
      <div className="content-container">
        <h2 className="title">Why ABIV</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid-container">
          <div className="ccard card-left">
            <div className="ccard-content">
              <h3 className="ccard-title">Text to Video</h3>
              <p className="ccard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
              <a href="#" className="ccard-link">See full review ⟶</a>
            </div>
            <img src={image4} alt="Text to video" className="image" />
          </div>

          <div className="ccard card-right">
            <div className="ccard-content">
              <h3 className="ccard-title">MCQs</h3>
              <p className="ccard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
              <a href="#" className="ccard-link">See full review ⟶</a>
            </div>
            <img src={image1} alt="MCQs" className="image" />
          </div>

          <div className="ccard ccard-left">
            <img src={image3} alt="Interview" className="image" />
            <div className="ccard-content">
              <h3 className="ccard-title">DOUBTS</h3>
              <p className="ccard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
              <a href="#" className="ccard-link">See full review ⟶</a>
            </div>
          </div>

          <div className="ccard ccard-right">
            <img src={image2} alt="Doubts" className="image" />
            <div className="ccard-content">
              <h3 className="ccard-title">INTERVIEW</h3>
              <p className="ccard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
              <a href="#" className="ccard-link">See full review ⟶</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyABIV;
