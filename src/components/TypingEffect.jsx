import React, { useState, useEffect } from 'react';

const TypingEffectWithStyles = ({ htmlContent }) => {
  const [displayedContent, setDisplayedContent] = useState([]); // Holds the list of rendered elements
  const typingSpeed = 50; // Typing speed in milliseconds

  useEffect(() => {
    // Parse the HTML content into nodes
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const elements = doc.body.childNodes;

    // Flatten the elements into an array of characters with styles
    const charsWithStyles = [];
    elements.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        // Text node, add each character
        node.textContent.split('').forEach(char => {
          charsWithStyles.push({ char, style: {} });
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Element node, add each character with style
        const style = node.style;
        node.textContent.split('').forEach(char => {
          charsWithStyles.push({ char, style: { color: style.color } }); // Add more styles as needed
        });
      }
    });

    // Function to simulate typing effect
    let currentIndex = 0;
    setDisplayedContent([]); // Reset displayed content

    const interval = setInterval(() => {
      // Add one character at a time
      setDisplayedContent((prev) => [...prev, charsWithStyles[currentIndex]]);
      currentIndex++;

      // Clear interval when all characters have been typed
      if (currentIndex >= charsWithStyles.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    // Clean up function to clear interval if component unmounts or htmlContent changes
    return () => clearInterval(interval);
  }, [htmlContent]);

  return (
    <div>
      {displayedContent.map((item, index) => (
        <span key={index} style={item.style}>{item.char}</span>
      ))}
    </div>
  );
};

export default TypingEffectWithStyles;
