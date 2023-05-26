import { useState } from 'react';
import './App.css';
import Addition from './Addition';

function App() {
  // const[score, setScore] = useState(() =>{

  // })
  return (
    <>
      <h1>Welcome to the Math Olympics!</h1>
      <div>
        <span>
          Here's your current score:
          <div id='score'>score</div>
        </span>
        <h3>Which math challenge do you want?</h3>
        <button type='button' onClick= {Addition()}>Addition</button>
        
      </div>
    
    </>
  );
}

export default App;
