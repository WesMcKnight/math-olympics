import { Row, Container, Nav, Button } from 'reactstrap';
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <h1>Welcome to the Math Olympics!</h1>
      </Row>
      <Nav>
        <Button type='button' color='blue'>Click ME!</Button>
      </Nav>
    </Container>

  );
}

export default App;
