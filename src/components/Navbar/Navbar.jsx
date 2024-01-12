import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand>Patch&Me</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/AboutUs" className="nav-link">Nosotros</Link>
                <NavDropdown title="Patchs">
                  <NavDropdown.Item href="#action3">Termoadhesivos</NavDropdown.Item>
                  <NavDropdown.Item href="#action4" variant="outline-secondary">
                    Cocidos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Outlet</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="¿Qué estás buscando?"
                  className="me-2"
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div style={{ marginTop: '70px' }}></div>
    </>
  );
}
