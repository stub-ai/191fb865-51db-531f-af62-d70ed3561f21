import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (val: string) => {
    setInput(input + val);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="p-10 bg-white rounded shadow-md w-80">
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={input}
            disabled
          />
          <div className="text-right mt-2 text-gray-500">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"].map((item, index) => (
            <button
              key={index}
              className="p-2 bg-gray-200 rounded border"
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          ))}
          <button className="col-span-2 p-2 bg-green-500 text-white rounded border" onClick={calculate}>
            Calculate
          </button>
          <button className="col-span-2 p-2 bg-red-500 text-white rounded border" onClick={clearInput}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;