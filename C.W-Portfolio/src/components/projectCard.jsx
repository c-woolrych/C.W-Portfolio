import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import projects from './projects.json';


function ProjectCard(props) {
    const [image, setImage] = useState(projects);

    useEffect(() => {
        const importImage = async () => {
            const img = await import(`../assets/${props.imagePath}`);
            setImage(img.default);
        };
        importImage();
    }, [props.imagePath]);
    return (
        <Container style={containerStyle} >
        <Card data-bs-theme="dark" style={cardStyle}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Link href={props.deployedSite}>Deployed Site</Card.Link>
                <Card.Link href={props.githubRepo}>GitHub Repository</Card.Link>
                {image && <Image src={image}/>}
                {/* <Image src={require(`../assets/${props.image}`).default} /> */}
            </Card.Body>
        </Card>
        </Container>
    )
}

export default ProjectCard

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
