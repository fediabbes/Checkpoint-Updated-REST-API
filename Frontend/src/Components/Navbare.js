import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Navbare() {
    return <div>
        <Navbar bg="dark" variant="dark" sticky="top" >
            <Container>
                <Link style={{ textDecoration: "none" }} to='/'  > <Navbar.Brand href="#home">Welcome to my site</Navbar.Brand></Link>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/' href="#home">Home</Nav.Link>
                </Nav>
                
            </Container>
        </Navbar>
    </div>;
}

export default Navbare
    ;
