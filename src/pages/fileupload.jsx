import React, { useState } from "react";
import "./ImageUploader.css";

const ImageUploader = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleImageRemove = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log("Submitting images:", images);
    // Add your upload logic here
  };

  return (
      <div className="uploader-box">
        <div className="image-container">
          {images.map((image, index) => (
            <div key={index} className="image-wrapper">
              <img src={image.preview} alt="Uploaded" className="uploaded-image" />
              <button
                className="delete-button"
                onClick={() => handleImageRemove(index)}
              >
                &times;
              </button>
            </div>
          ))}
          <div className="upload-box">
            <label htmlFor="file-input" className="plus-icon">
              +
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
  );
};

export default ImageUploader;
