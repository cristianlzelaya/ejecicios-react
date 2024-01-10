import React from 'react'
import { Card } from 'react-bootstrap'
import { numbers } from './numbers.js'


const NumbersCards = () => {
  const esPrimo = (numero) => {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  };

    return (<>
        {numbers.map((number,i) => ( 
            <Card key={i}
            bg={esPrimo(number) ? "danger" : (number%2 === 0)? "success": "primary"}
            style={{ width: '10rem', height:"10rem" }}
            className="m-2"
          >
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-item-center fs-1'>
                {number}
            {console.log(number)}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>)
     
}

export default NumbersCards