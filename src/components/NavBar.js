import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../styles/navBar.css'
const NavBar = () => {
  return (
    <div>
      <Navbar className="nav">
        <Container className="py-2">
          <Navbar.Brand className="text-header text-light fs-3" style={{fontStyle:"italic"}}>Mercado</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <AiOutlineShoppingCart /><label className="text-header text-light" >3</label><span className="text-header text-light">Total:</span><label className="text-header text-light">$7655</label>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
