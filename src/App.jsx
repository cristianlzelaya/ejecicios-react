import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NumbersCards from './components/NumbersCards'
const App = () => {


  return (
    <Container>
      <Col className='d-flex justify-content-center'>
        <h1>Number Generator</h1>
      </Col>
      <Row className='d-flex justify-content-center'>
        <NumbersCards  />
      </Row>
    </Container>
  )
}

export default App