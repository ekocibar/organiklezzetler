import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Navigation extends Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
  }
  render(){
    return(
      <div>
        <Navbar color="inverse" light expand="md">
          <NavbarBrand to="/" tag={Link}>Organik Lezzetler</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/Hakkinda" tag={Link}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Urunler" tag={Link}>Products</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;  