import './App.css';
import { Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <Container className="App" id='myapp'
    style={{
      height:"100vh",
      minHeight:"100vh"
    }}>
      <Row className='topBar'>
        <Col className='leftNav'>
          <Row className='hello' id='hello'>
            <Col>
             DiversiFi</Col>
            <Col>Trade</Col>
            <Col>Swaps</Col>
            <Col>Yield</Col>
            <Col>Post</Col>
            <Col>Send</Col>
          </Row>
        </Col>
        <Col>
         <button className="claimBtn">Claim DVF</button>
         <button className="claimBtn">Connect Wallet</button>
        </Col>
      </Row>
      
      <Container id='dialogcontain'>
      <Row className='dialogBox'>
      <br />
          Time to claim

          <span className='textboxx'> Great News- This address is eligible for airdrop! To claim your Token click below to connect to 
          diversiFi with this address. 
          </span>

          <button className='mainConnect'>Connect Wallet</button>
      </Row>
      </Container>
    </Container>
  );
}

export default App;
