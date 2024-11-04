import React from 'react';
import logo from './logo2.png'
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white">
          <nav className="bg-blue-900 p-4 flex items-center">
      <img src={logo} alt="ABIV logo" className="h-10 mr-2" />
      <span className="text-white text-2xl font-semibold"></span>
    </nav>
    <div className="bg-gradient-to-b from-blue-900  justify-center items-start p-1 text-white">
      <div className="ml-16">
        <p className="text-lg mb-2">Date : 04-11-2024</p>
        <p className="text-lg mb-2">Time : 01:00:00</p>
        <p className="text-lg mb-2">Topic: Geography</p>
        <p className="text-lg">Time Taken : 0hrs 5min</p>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center w-full">Performance Report</h1>

    </div>
    <div className="mt-8 p-6 text-white rounded-lg shadow-lg max-w-md mx-auto ">
      <table className="w-full text-center border-collapse border border-white">
        <tbody>
          <tr className="border border-white">
            <td className="px-4 py-2 border-r border-white">Total Questions</td>
            <td className="px-4 py-2">15</td>
          </tr>
          <tr className="border border-white">
            <td className="px-4 py-2 border-r border-white">Attempted Questions</td>
            <td className="px-4 py-2">3</td>
          </tr>
          <tr className="border border-white">
            <td className="px-4 py-2 border-r border-white">Missed Questions</td>
            <td className="px-4 py-2">12</td>
          </tr>
          <tr className="border border-white">
            <td className="px-4 py-2 border-r border-white">Correct Answers</td>
            <td className="px-4 py-2">0</td>
          </tr>
          <tr className="border border-white">
            <td className="px-4 py-2 border-r border-white">Incorrect Answers</td>
            <td className="px-4 py-2">3</td>
          </tr>
          <tr className="border border-white">
            <td className="px-4 py-2 border-r border-white">Result</td>
            <td className="px-4 py-2">Fail</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6">
        <p className="mb-2">Remarks</p>
        <div className="border-b border-white w-full mb-4"></div>  {/* Increased margin */}
        <p className="mb-2">Needs a lot of improvement</p>
        <div className="border-b border-white w-full"></div>      {/* No bottom margin */}
      </div>
    </div> 
    <footer className="bg-blue-950 text-white p-4 text-center mt-8">
      <p className="text-sm">
        The AI-generated report is based on your test input; use for informational purposes, not professional advice.
      </p>
      <a href="https://www.abiv.in" className="text-white underline mt-2">
        www.abiv.in
      </a>
    </footer>
    </div>
  );
}

export default App;
