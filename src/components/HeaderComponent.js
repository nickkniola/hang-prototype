import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Home
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/pairing">
                                    Pairing
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/suggest">
                                    Suggestion
                                    </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <NavbarBrand className="text-center" href="/">
                        Hang
                    </NavbarBrand>
                    <NavLink className="nav-link" to="/"><i className="fa fa-android  fa-fw fa-lg" ></i></NavLink>
                    <NavLink className="nav-link" to="/"><i className="fa fa-apple fa-fw fa-lg"></i></NavLink>
                    <NavLink className="nav-link" to="/"><i className="fa fa-envelope fa-fw fa-lg"></i></NavLink>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;