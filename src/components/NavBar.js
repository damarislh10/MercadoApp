import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/navBar.css";
const NavBar = () => {
  const [items, setItems] = useState({
    item: 0,
    priceS: 0,
  });

  useEffect(() => {
    getItemCar();
  }, []);
  const getItemCar = () => {
    let itemCar = JSON.parse(localStorage.getItem("itemCar"));
    itemCar = itemCar !== null ? itemCar : [];

    let priceProduct = JSON.parse(localStorage.getItem("priceProduct"));
    priceProduct = priceProduct !== null ? priceProduct : [];

    let totalP = itemCar * priceProduct;
    setItems({
      priceS: totalP,
      item: itemCar,
    });
    console.log(items.item, items.priceS);
  };

  return (
    <div>
      <Navbar className="nav">
        <Container className="py-2">
          <Navbar.Brand
            as={Link}
            to="/"
            className="text-header text-light fs-3"
            style={{ fontStyle: "italic" }}
          >
            Mercado
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div>
                <img
                  className="img-car"
                  style={{ width: "30px" }}
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1645154462/pruebaTecnicaMerqueo/icons8-carrito-de-compras-48_yzapu5.png"
                  alt="img-car"
                />
                <label className="text-header text-light fw-bold label-item">
                  {items.item}
                </label>
              </div>
              <span style={{fontSize:"15px"}} className="text-header text-light fw-bold"> Total: </span>
              <label className="text-header text-light fw-bold">
                <span style={{fontSize:"15px"}}>$</span>
                <span style={{fontSize:"15px"}}>{items.priceS}</span>
              </label>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
