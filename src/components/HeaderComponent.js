import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Media } from 'reactstrap';
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
                        <Nav navbar className="mr-auto">
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
                        <NavbarBrand className="navbar-brand d-none d-md-block" href="/">
                            <img src="/assets/images/hang_logo.png" height="30" width="30" alt="Hang Logo" />Hang
                        </NavbarBrand>
                        <div className="ml-auto xs={mx-auto}">
                            <NavLink className="nav-link-icon" to="/"><i className="fa fa-android  fa-fw fa-lg" ></i></NavLink>
                            <NavLink className="nav-link-icon" to="/"><i className="fa fa-apple fa-fw fa-lg"></i></NavLink>
                            <NavLink className="nav-link-icon" to="/"><i className="fa fa-envelope fa-fw fa-lg"></i></NavLink>
                        </div>
                    </Collapse>
                    <NavbarBrand className="navbar-brand text-white d-block d-md-none mx-auto pr-4" href="/">
                        <img src="/assets/images/hang_logo.png" height="30" width="30" alt="Hang Logo" />Hang
                    </NavbarBrand>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;