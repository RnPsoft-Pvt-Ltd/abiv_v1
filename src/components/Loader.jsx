import React from "react";
import LoadingSequence from "./LoadingScreen";
import analyzing from "./analyzing.gif";
import summarizing from "./summerizing.gif";
import aiVideo from "./Ai_vid_generate.gif";

function App() {
  const steps = [
    { gif: `${analyzing}`, speed: 28000 }, 
    { gif: `${summarizing}`, speed: 32000 }, 
    { gif: `${aiVideo}`, speed: 0 , height: "10px", width: "10px" }, 
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <LoadingSequence steps={steps} />
    </div>
  );
}

export default App;
