import React,{useState,useRef} from 'react';
import './Qna.css';
import logo from "./logo.png";
import { useNavigate } from 'react-router-dom';
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import axios from 'axios';

// Function to call the TTS API
const callTTSApi = async (textToConvert) => {
    try {
        const response = await axios.post('https://abiv.rnpsoft.com/tts', { text: textToConvert });
        console.log(response.data); // Handle the response as needed
    } catch (error) {
        console.error("Error calling TTS API:", error);
    }
};

// Example usage

const math_explanation_instruction=`
Find the solutionn like a real teacher, explain like it happens in books. Use human readable format like 3x^2+2x+3/5=0 strictly
now heres another thing return the answer in a format which makes easy for students to understand
here's a sample example
to solve the quadratic equation
<underline>3x2+5x2+9=0</underline> we can use the formla
<red>-b+-...</red>
now as we continue
</star><bold>Note:</bold> The solution contains

this way, the attributes you have are
1. underline - to underline any thing important
2. bold - to focus emphasis on certain keywords
4. star - to note certain things - it has just one closing bracket
5. red - to focus certain
`
const math_to_word_explanation_instruction = `
convert this to into this format
[
  {text:x=2+345\n,decoration=[box],
  text:Now, we substitute these values into the quadratic formula\n,decoration:[]....upto n}
]
  i will directly apply JSON.parse on your output so make sure its in the right format
`
function App1() {
  const [question, setQuestion] = useState('');
  const [activeTextarea, setActiveTextarea] = useState(null);
  const [answer, setAnswer] = useState('');
  const questionRef = useRef(null);
  const nav = useNavigate();
  const answerRef = useRef(null);
  const insertSymbol = (symbol) => {
    if (activeTextarea === 'question') {
      setQuestion((prev) => prev + symbol);
      questionRef.current.focus();
    } else if (activeTextarea === 'answer') {
      setAnswer((prev) => prev + symbol);
      answerRef.current.focus();
    }
  };
  async function explainMath(question, answer) {
    try {

      const message = `Question: ${question}\nAnswer: ${answer}`;
  
      const payload = { message, prompt: math_explanation_instruction };
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

  return (
    <div className="container ">
      <h1 className='h1h'>Put in your questions and answers:</h1>
      <div className="Qoutline">
        <div className="question-answer-box">
          <div className="question-box">
            <div className="questionlabel"> 
              <p className='p11'>Question :</p>
            </div>
            <textarea
        className="questiontextarea"
        placeholder="Type the question...."
        style={{ color: 'black' }}
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        onFocus={() => setActiveTextarea('question')}
        ref={questionRef}
      ></textarea>              
    <div className="symbols">
        {['d/dy', '_', '∧', '/', 'Σ', 'π', '√', '∫', '∞'].map((symbol) => (
          <button key={symbol} onClick={() => insertSymbol(symbol)}>
            {symbol}
          </button>
        ))}
      </div>
          </div>
          <div className="answer-box">
          <div className="answerlabel"> 
              <p className='p11'>Answer :</p>
            </div>
            <textarea
          placeholder="Type the answer (optional)..."
          style={{ color: 'black' }}
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          onFocus={() => setActiveTextarea('answer')}
          ref={answerRef}
        ></textarea>           
       <button className="proceed-button" onClick={async()=>{
       let solution = await explainMath(question,answer.length>=1?answer:`I don't know the solution, guide me to reach the solution.`)
       let solution1 = await explainMath1(solution)
       let p=JSON.parse(solution1)
       let s=""
       for(let i=0;i<p.length;i++){
        s=s+p[i].text
        p[i].text=p[i].text+'\n\n'
       }
       localStorage.setItem('numericals',JSON.stringify(p))
       s=s.replace("<box>","").replace("</box>","").replace("<underline>","").replace("</underline>","").replace("<bold>","").replace("</bold>","").replace('/','divide').replace('*','multiple').replace('+','plus').replace('√','under root').replace('^','to the power')
       console.log('i passed here')
       let c =await callTTSApi(s);
       console.log(JSON.parse(solution1));
setTimeout(()=>{nav('/numericals')},2000)
       }}>
            <img src={logo} alt="Logo" className='playlogo'/>
            proceed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App1;

