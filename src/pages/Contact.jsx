import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

function Contact() {
  return (
    <Container style={containerStyle} >
    <Card  >
      <Card.Title >Contact Me</Card.Title>
      <Card.Text>c.woolrych@gmail.com</Card.Text>
      <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Control as="textarea" rows={3} type="message" placeholder="Message" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    </Card>
    </Container>
  )
}

export default Contact