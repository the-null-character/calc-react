import React, { useState } from 'react';
import './Calculator.css'; // Import your CSS file for styling (create it later)

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(display); // WARNING: Using eval can be dangerous. Consider implementing a safer alternative.
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <div className="calculator">
      <input type="text" value={display} disabled />
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={clearDisplay}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
