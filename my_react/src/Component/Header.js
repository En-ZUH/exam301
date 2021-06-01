import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" >

                    <Nav className="m-auto">
                        <Nav.Link href="/">Homepage</Nav.Link>
                        <Nav.Link href="/favorite">Favoritepage</Nav.Link>

                    </Nav>

                </Navbar>
            </div>
        )
    }
}

export default Header
