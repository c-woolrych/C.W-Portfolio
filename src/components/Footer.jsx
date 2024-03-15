import React from 'react'
import Card from 'react-bootstrap/Card';
import CardFooter from 'react-bootstrap/CardFooter'
import Button from 'react-bootstrap/Button';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../css/footerCSS.css';

function Footer() {
  return (
    <>
        <CardFooter className="bg-dark">
        <div className="footer-links">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={24} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={24} />
        </a>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Christine Woolrych. All rights reserved.
      </div>
        </CardFooter>
    </>
  )
}

export default Footer