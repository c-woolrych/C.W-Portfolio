import React from 'react'
import Card from 'react-bootstrap/Card';
import CardFooter from 'react-bootstrap/CardFooter'
import Button from 'react-bootstrap/Button';


function Footer() {
  return (
    <>
        <CardFooter className="fixed-bottom bg-dark">
        <Card.Body >
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
        </CardFooter>
    </>
  )
}

export default Footer