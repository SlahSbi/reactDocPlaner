import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Navdoc extends React.Component {
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
  render() {
    return (
    <div className= "fixed-top bg-white " style={{'opacity':'0.8'}}>
        <Navbar light expand="md">
           <NavbarBrand href="/"><img className=" logo-docplanner_1 img-fluid col-4-lg col-xs-12"  src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" /></NavbarBrand>
             <NavbarToggler onClick={this.toggle} />
             <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="a_item">
                <NavLink > <a className="nav-link" href="https://www.docplanner.com/about-us">About us<span class="sr-only">(current)</span></a></NavLink>
              </NavItem>
              <NavItem className="a_item">
                <NavLink ><a className="nav-link" href="https://www.docplanner.com/career">Career</a></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="nav-link a_item">
                <DropdownToggle nav  >
                Departments
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <a className="dropdown-item" href="https://www.docplanner.com/department?dep=marketing">Action</a>
                  </DropdownItem>
                  <DropdownItem>
                  <a className="dropdown-item" href="https://www.docplanner.com/department?dep=customer">Customer Success & Sales</a>
                  </DropdownItem>
                  <DropdownItem>
                  <a class="dropdown-item" href="https://www.docplanner.com/department?dep=it">IT, Product, Design & UX</a>
                  </DropdownItem>
                  <DropdownItem>
                  <a className="dropdown-item" href="https://www.docplanner.com/department?dep=finance">Finance & Administration</a>
                  </DropdownItem>
                   <DropdownItem>
                   <a className="dropdown-item" href="https://www.docplanner.com/department?dep=hr">HR & more</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


