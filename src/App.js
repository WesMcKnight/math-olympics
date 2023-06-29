import { useState } from 'react';
import './App.css';
import Addition from './Addition';

function App() {
  const[score, setScore] = useState()
  
  return (
    <>
      <h1>Welcome to the Math Olympics!</h1>
      <div>
        <span>
          Here's your current score:
          <div>score</div>
        </span>
        <h3>Which math challenge do you want?</h3>
        <h4>Addition:</h4>
        <Addition />
      </div>
    
    </>
  );
}

export default App;
