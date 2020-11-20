import React from 'react';
import './Navbar.css'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {Link} from "react-router-dom";


class AppNavbar extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          path:"/hist"
        };
      }
    render() {
        return(
        <>
            <Navbar className="navbar" variant="dark" expand="lg">
                <Navbar.Brand href="#home">MKDD React</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse>
                    <Nav className="mr-auto" activeKey={window.location.pathname}>
                        <Nav.Link as={Link} to="/hist" 
                            className={this.state.path === "/hist" ? 'link active' : ''}
                            onClick={(e)=>{this.setState({path:e.target.pathname})}}
                        >Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/new"
                        className={this.state.path === "/new" ? 'link active' : ''}
                        onClick={(e)=>{this.setState({path:e.target.pathname})}}
                        >New GC</Nav.Link>

                        <Nav.Link as={Link} to="/login"
                        className={this.state.path === "/login" ? 'link active' : ''}
                        onClick={(e)=>{this.setState({path:e.target.pathname})}}
                        >Login</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )}
}

export default AppNavbar;