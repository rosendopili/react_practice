import React from 'react'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../assets/logo.png'; 

function NavBar(){
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">
                <a href="/">
                <img
                    alt="Rosendo Pili"
                    src={Logo}
                    className="logo"
                /></a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Projects" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="/projects">All Projects</NavDropdown.Item>
                    <NavDropdown.Divider /> 
                    <NavDropdown.Item href="/projects/#Project1">Project 1</NavDropdown.Item>
                    <NavDropdown.Item href="/projects/#Project2">Project 2</NavDropdown.Item>
                    <NavDropdown.Item href="/projects/#Project3">Project 3</NavDropdown.Item>
                    <NavDropdown.Item href="/projects/#Project4">Project 4</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar; 