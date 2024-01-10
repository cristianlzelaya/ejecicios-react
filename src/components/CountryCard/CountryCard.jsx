import React from 'react'
import { Card, Button, Container, Col} from 'react-bootstrap'
import numeroRandom from '../helpers/generatorCountry'
import Paises from '../../Paises'


const CountryCard = ({imagen, nombre, capital, idioma, poblacion, moneda, simbolo}) => {
  return (<>
  <Container>
    <Col className='d-flex justify-content-center my-2'>
        <Card className='d-flex justify-content-center' style={{ width: '20rem', height:"30rem" }}>
            <Card.Img variant="top" src={imagen} />
                <Card.Title className='d-flex justify-content-center mt-3'>{nombre} </Card.Title>
            <Card.Body className='mt-5'>
                <Card.Text>
                    <ul>
                        <li>Capital: {capital} </li>
                        <li>Lenguaje: {idioma} </li>
                        <li>Poblacion: {poblacion}</li>
                        <li>Moneda: {moneda} </li>
                        <li>Simbolo: {simbolo}</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    <Col className='d-flex justify-content-center my-2'>
        <Button variant="primary">Cambiar pais</Button>
    </Col>
  </Container>
  </>)
}

export default CountryCard