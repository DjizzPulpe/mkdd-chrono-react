import React from 'react';
import './Navbar.css'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {Link} from "react-router-dom";


class AppNavbar extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          currentPath:window.location.href
        };
      }
    render() {
        return(
        <>
            <Navbar className="navbar" variant="dark" expand="lg">
                <Navbar.Brand href="#home">MKDD React</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link
                            className={'active'}
                            as={Link} 
                            to="/hist">
                        Home</Nav.Link>

                        <Nav.Link as={Link} to="/new" >New GC</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )}
}

export default AppNavbar;