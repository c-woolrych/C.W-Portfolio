import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';


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

function ProjectCard(props) {
    return (
        <Container style={containerStyle} >
        <Card data-bs-theme="dark" style={cardStyle}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Link href={props.deployedSite}>Deployed Site</Card.Link>
                <Card.Link href={props.githubRepo}>GitHub Repository</Card.Link>
                <Image  src={props.image} />
            </Card.Body>
        </Card>
        </Container>
    )
}

export default ProjectCard