import React from 'react'
import Card from 'react-bootstrap/Card';

const cardStyle = {
  maxWidth: '50rem',
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

function Home() {
  return (
    <>
    <container style={containerStyle} >
    <Card data-bs-theme="dark" style={cardStyle}>
      <Card.Img variant="top" src="../assets/portrait.jpg" />
      <Card.Body>
        <Card.Title>Christine Woolrych</Card.Title>
        <Card.Text>
          Welcome to my Portoflio.
        </Card.Text>
      </Card.Body>
    </Card>
    </container>
    <container style={containerStyle}>
    <Card style={cardStyle} data-bs-theme="dark">
      <Card.Body>Aspiring Web Developer with a background in hospitality and sales.</Card.Body>
    </Card>
    </container>
    </>
  )
}

export default Home