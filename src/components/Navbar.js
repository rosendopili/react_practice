import React from 'react'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBar(){
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">Rosendo Pili</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Projects" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/projects">Project 1</NavDropdown.Item>
                <NavDropdown.Item href="/projects">Project 2</NavDropdown.Item>
                <NavDropdown.Item href="/projects">Project 3</NavDropdown.Item>
                <NavDropdown.Item href="/projects">Project 4</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar; 