import React from 'react';
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Navbarcomp extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link href="/">Menu Title Here</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/brokenlink">
                <NavItem eventKey={1} >Error</NavItem>
            </LinkContainer>
            <LinkContainer to="/signup">
                <NavItem eventKey={2}>Signup</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}