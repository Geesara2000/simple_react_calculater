import { useState } from 'react';
import './index.css'

function App() {
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    setInput(input + e.target.name);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleSignChange = () => {
    if (input) {
      setInput((prev) => (prev[0] === '-' ? prev.substring(1) : '-' + prev));
    }
  };

  const handlePercentage = () => {
    if (input) {
      setInput((prev) => (parseFloat(prev) / 100).toString());
    }
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (

    
    <div className="App">
      
      <div className="header">
        <h1>Simple React Calculator</h1>
      </div>

      <div className="calculator">
        <input type="text" value={input} readOnly className="screen" />
        <div className="keypad">
          <button className="gray" onClick={handleClear}>AC</button>
          <button className="gray" onClick={handleSignChange}>+/-</button>
          <button className="gray" onClick={handlePercentage}>%</button>
          <button className="orange" name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className="orange" name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className="orange" name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className="orange" name="+" onClick={handleClick}>+</button>
          <button className="zero" name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button className="orange" onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}



export default App;
