import React, { useState, useEffect } from "react";



const LoadingSequence = ({ steps }) => {

  const [progress, setProgress] = useState(Array(steps.length).fill(0)); 

  const [currentStep, setCurrentStep] = useState(0); 


  useEffect(() => {

    if (currentStep < steps.length) {

      const speed = steps[currentStep].speed;

      const intervalTime = 50; 

      const increment = (100 / (speed / intervalTime)).toFixed(2);



      const progressInterval = setInterval(() => {

        setProgress((prevProgress) => {

          const newProgress = [...prevProgress];

          newProgress[currentStep] = Math.min(newProgress[currentStep] + parseFloat(increment), 100);

          return newProgress;

        });

      }, intervalTime);



      const timeout = setTimeout(() => {

        clearInterval(progressInterval);

        setCurrentStep((prev) => prev + 1); 

      }, speed);



      return () => {

        clearInterval(progressInterval);

        clearTimeout(timeout);

      };

    }

  }, [currentStep, steps]);



  return (

    <div className="flex flex-col items-center space-y-4">

     

      <div className="flex space-x-6">

        {steps.map((step, index) => (

          <div key={index} className="flex items-center space-x-4">

            

            <img

              src={step.gif}

              alt={`Step ${index + 1}`}

              className={`w-52 h-52 object-contain transition-opacity duration-500 ${

                currentStep >= index ? "opacity-100" : "opacity-50"

              }`}

            />

            

            {step.speed && (

              <div className="flex flex-col items-center">

                <div className="w-36 h-2 bg-gray-700 rounded-full overflow-hidden">

                  <div

                    className="h-full bg-green-500 transition-all"

                    style={{

                      width: `${progress[index]}%`,

                    }}

                  ></div>

                </div>

              

                {index < steps.length - 1 && (

                  <p className="mt-1 text-sm">

                    {progress[index] < 100 ? `${Math.floor(progress[index])}% loaded` : "Complete"}

                  </p>

                )}

              </div>

            )}

          </div>

        ))}

      </div>

   

      {currentStep >= steps.length && (

        <h1 className="text-2xl font-bold mt-4">🎉 Loading Complete!</h1>

      )}

    </div>

  );

};



export default LoadingSequence;