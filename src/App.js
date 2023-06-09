import { useState } from 'react';
import './App.css';
import Addition from './Addition';
import { Button } from 'reactstrap';

function App() {
  const[score, setScore] = useState(0)
  
  return (
    <>
      <h1>Welcome to the Math Olympics!</h1>
      <div>
        <span>
          Here's your current score:
          <div>{score}</div>
        </span>
        <h3>Which math challenge do you want?</h3>
        <h4>Addition:</h4>
        <Button
          title='Click me'
          onClick={<Addition />}
        >
          Increase score
        </Button>
      </div>
    
    </>
  );
}

export default App;
