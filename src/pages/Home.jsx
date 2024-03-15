import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.css";
import portrait from "../assets/portrait.jpg";
import Image from 'react-bootstrap/Image';

const cardStyle = {
  maxWidth: '20rem',
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const imgStyle = {
  maxWidth: '100%',
  height: 'auto'
}

function Home() {
  return (
    <>
    <Container style={containerStyle} >
    <Card data-bs-theme="dark" style={cardStyle}>
      <Image style={imgStyle} variant="top" src={portrait} roundedCircle />
      <Card.Body>
        <Card.Title>Christine Woolrych</Card.Title>
        <Card.Text>
          Welcome to my Portoflio.
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
    <Container style={containerStyle}>
    <Card style={cardStyle} data-bs-theme="dark">
      <Card.Body>Future Web Developer with a background in hospitality and sales.</Card.Body>
    </Card>
    </Container>
    </>
  )
}

export default Home