import { useState } from "react";
import { Circle, CircleX, CircleArrowLeft, CircleCheck } from 'lucide-react';

const Quiz = ({ onClose }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [options, setOptions] = useState([
        { option: 'Lorem Ipsum Dolor', correct: true, clicked: false },
        { option: 'Lorem Ipsum Dolor', correct: false, clicked: false },
        { option: 'Lorem Ipsum Dolor', correct: false, clicked: false },
        { option: 'Lorem Ipsum Dolor', correct: false, clicked: false },
    ]);

    const handleOptionClick = (index) => {
        setOptions(prevOptions => {
            const newOptions = [...prevOptions];
            newOptions[index].clicked = !newOptions[index].clicked;
            if (newOptions[index].clicked) {
                setSelectedOption(newOptions[index].option);
            } else {
                setSelectedOption('');
            }
            return newOptions;
        });
    };

    const handleSubmit = () => {
        alert(`You selected: ${selectedOption}`);
        onClose();
    };

    return (
        <div className="bg-white rounded-3xl shadow-lg w-full max-w-xl absolute ">
            <div className="text-center flex items-center justify-center h-[3rem] quiz_gradiant relative">
                <CircleArrowLeft className="absolute left-[20px] top-[25%] cursor-pointer" onClick={onClose} />
                <span className="text-white font-medium text-center">Time for some Questions</span>
            </div>
            <div className="text-left mb-4 mx-6">
                <p className="text-lg font-semibold text-black">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?</p>
            </div>
            <div className="space-y-4 mx-6">
                {options.map((item, index) => (
                    <label key={index} onClick={() => handleOptionClick(index)} className="flex font-medium items-center text-black cursor-pointer">
                        {item.clicked ? (
                            item.correct ? (
                                <CircleCheck className="text-purple-600 cursor-pointer" />
                            ) : (
                                <CircleX className="text-purple-600 cursor-pointer" />
                            )
                        ) : (
                            <Circle className="text-purple-600 cursor-pointer" />
                        )}
                        <span className="ml-2">{item.option}</span>
                    </label>
                ))}
            </div>
            <div className="flex justify-between mt-6">
                <button
                    onClick={onClose}
                    className="bg-purple-500 mx-6 mb-6 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                >
                    Skip
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-purple-500 mx-6 mb-6 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Quiz;
