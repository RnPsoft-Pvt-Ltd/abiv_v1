import React, { useState, useEffect } from 'react';
import './mcqexam.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
  const nav = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10800); // 3 hours in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(30).fill(null)); // 30 questions
  const [markedForReview, setMarkedForReview] = useState(Array(30).fill(false)); // Track marked questions
  const [data,setData]=useState('')
  const [startfetching,setfetch]=useState(false)
  const [questions,setQuestion] = useState(Array.from({ length: 30 }, (_, i) => ({
    questionText: `Question ${i + 1}: `,
    options: ["", "", "", ""]
  })))
  const math_to_word_explanation_instruction=`
  Make a unique difficult question based on the data and return output in strictly this fromat as i will do Json.parse on it directly
  Format=
  {
    "questionText": "Who is PM Of India?",
    "options": ["dolor", "modi", "gandhi", "nehru"],
    "correctoption":"2"
  }
  `
  async function explainMath1(question) {
    try {

      const message = question;

      const payload = { message, prompt: math_to_word_explanation_instruction };
      const headers = { 'Content-Type': 'application/json' };
  
      const response = await fetch('https://abiv.rnpsoft.com/prompt', {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.output_text;
      } else {
        throw new Error(`Error: Request failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      return ""; // Or some other default value
    }
  }  

  const fetchresult1=async()=>{
    const fetchUrl = 'https://abiv.rnpsoft.com/interview';
    const headers = {
      'Content-Type': 'application/json',
    };
    try{
    const response1 = await axios.post(fetchUrl, {}, { headers });
    if (response1.status === 200) {
      const result = response1.data;
      console.log(result.receivedData[0][3].length)
      if(result.receivedData[0][3].length>=1){
      setData(result.receivedData[0][3]);
      
    } }else {
      console.error('Failed to fetch data:', response1.statusText);
    }}catch(error){}}
    useEffect(()=>{
      const Interval=setInterval(async()=>{
        await fetchresult1()
        if(data.length>=1){
          setfetch(true)
          console.log(true)
        }
      },1000)
    },[])
    useEffect(() => {
      let d = 2;
    let stored=[]
      if (d === 2) {
        if (data.length >= 1) {
          const fetchData = async () => {
            for(let i=0;i<30;i++){
            try {
              const q1 = [...stored,...questions.slice(i,questions.length-1)];
              let b = await explainMath1(data);
              console.log(b);
              q1[i] = JSON.parse(b); // Assuming b is a JSON string here
              stored.push(q1[i])
              setQuestion(q1);
              d = 3;
            } catch (error) {
              console.error("Error parsing JSON or updating question:", error);
            }}
          };
          fetchData();
        }
      }
    }, [data,startfetching]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);

    const newMarkedForReview = [...markedForReview];
    newMarkedForReview[currentQuestion] = false;
    setMarkedForReview(newMarkedForReview);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleMarkForReview = () => {
    const newMarkedForReview = [...markedForReview];
    newMarkedForReview[currentQuestion] = !newMarkedForReview[currentQuestion]; 
    setMarkedForReview(newMarkedForReview);
  };

  const handleSubmit = () => {
    console.log('Submit exam', answers);
    nav('/report')
  };

  return (
    <div className="bbody">
    <div className="app">
      <header className="app-header">
        <div className="all">
          <h1 className="large">All The Best!</h1>
          <p className="large-text">Choose the correct option, and submit your exam after</p>
          <p className="large-text"> reviewing all questions.</p>
        </div>
        <div className="candidate-details">
          <p><strong>Name:</strong> abcdef</p>
          <p><strong>Candidate ID:</strong> 567</p>
          <p><strong>Age:</strong> 20</p>
          <p><strong>Subject:</strong> Geography</p>
        </div>
      </header>

      <div className="exam-body">
        <div className="one">
        <div className="question-section">
          <div className="question-header">
            <h3>Question {currentQuestion + 1}</h3>
            <div className="question-info">
              <p className="question-number">Section A</p>
              <p className="question-number">{currentQuestion + 1}/30</p>
            </div>
          </div>

          <p className="question-text">{questions[currentQuestion].questionText}</p>

          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="option">
                <input 
                  type="radio" 
                  id={`option-${currentQuestion}-${index}`} 
                  name={`question-${currentQuestion}`} 
                  checked={answers[currentQuestion] === index}
                  onChange={() => handleAnswerSelect(index)} 
                />
                <label htmlFor={`option-${currentQuestion}-${index}`}>{option}</label>
              </div>
            ))}
          </div>

<div className="navigation">
  <div className="navigation-left">
    <button className="nav-btn next-btn" onClick={handleNextQuestion}>Next</button>
  </div>
  <div className="navigation-right">
    <button className="nav-btn mark-review-btn" onClick={handleMarkForReview}>
      {markedForReview[currentQuestion] ? "Unmark Review" : "Mark for Review"}
    </button>
    <button className="nav-btn submit-btn" onClick={handleSubmit}>Submit</button>
  </div>
  
</div>
<div className="footer">
<p>total number of questions: 30</p>
<p>total marks: 30</p></div>
</div>

</div>

        <div className="timer-section">
          <h2><strong>Time Left</strong></h2>
          <div className="timer">{formatTime(timeLeft)}</div>
          <p> </p>
          <p></p>
                   <h3>Section A</h3>

          <div className="question-nav">
            {questions.map((_, index) => (
              <button 
                key={index} 
                className={`question-nav-btn 
                  ${answers[index] !== null ? 'answered' : ''} 
                  ${markedForReview[index] ? 'marked' : ''}`} 
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button className="submit-final-btn" onClick={handleSubmit}>Confirm and Submit</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
