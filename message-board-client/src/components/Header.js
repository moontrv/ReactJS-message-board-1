import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <div id="main-nav" className="container">
                    <Navbar.Brand href="#home">Message Board</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink exact to="/" >Channel</NavLink>
                            <NavLink to="/message" >Message List</NavLink>
                            <NavLink exact to="/" >Editor</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}