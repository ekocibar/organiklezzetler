import React, { Component } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
        <Navbar color="light" light expand="md">
          <NavbarBrand to="/" tag={Link}>Organik Lezzetler</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink to="/İletişim" tag={Link}>İletişim</NavLink>
              </NavItem>   
              <NavItem>
                <NavLink to="/Ürünler" tag={Link}>Ürünler</NavLink>
              </NavItem>        
              <NavItem>
                <NavLink to="/Neden-Organik" tag={Link}>Neden Organik?</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;  