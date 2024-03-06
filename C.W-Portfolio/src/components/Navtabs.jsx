import React from "react";
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavTabs() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="nav nav-tabs">
                        <NavLink to="/"end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}  >Home</NavLink>
                        <NavLink to="projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
                        <NavLink to="contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavTabs;