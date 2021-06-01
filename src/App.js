import React from 'react';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Container, Row, Col, NavbarBrand } from 'react-bootstrap';
import { Link, Switch, Redirect, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Gallery from './Gallery';
import Apparel from './Apparel';
import Accessories from './Accessories';
import About from './About';
import Contact from './Contact';
import Customs from './Customs';
import notFound from './notFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand href="#home">Len Customs</Navbar.Brand>
        </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>  
            <LinkContainer to="/About">
              <Nav.Link href="/About">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </LinkContainer>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
              <LinkContainer to="/Customs">
                <NavDropdown.Item href="/Customs">Custom Orders</NavDropdown.Item>
              </LinkContainer>              
                <NavDropdown.Item href="https://www.shopify.ca">Products</NavDropdown.Item>              
              </NavDropdown>
              <Navbar.Brand href="https://www.instagram.com/customsby.len/?hl=en">
                <img src="/instagramIcon.png" width="30" height="30" alt="" loading="lazy"/>
              </Navbar.Brand>
              <Navbar.Brand href="https://www.tiktok.com/@customsby.len?lang=en">
                <img src="/tiktokIcon.png" width="35" height="35" alt="" loading="lazy"/>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <Container>
          <Row>
            <Col md={12}>
              <Switch>
                <Route exact path="/" render={() => (<Gallery />)} />
                <Route exact path="/apparel" render={() => (<Apparel />)} />
                <Route exact path="/accessories" render={() => (<Accessories />)} />
                <Route exact path="/about" render={() => (<About />)} />
                <Route exact path="/contact" render={() => (<Contact />)} />
                <Route exact path="/Customs" render={() => (<Customs />)} />                
                {/* <Route render={() => (<notFound />)} /> */}
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
