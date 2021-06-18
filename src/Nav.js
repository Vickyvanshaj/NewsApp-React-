import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Nav1() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/login">Login</Link>
                </Nav>
               
            </Navbar>
        </div>
    )
}

export default Nav1;
