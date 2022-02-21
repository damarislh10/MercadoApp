import React, { useEffect, useState, useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";
import "../styles/navBar.css";


const NavBar = () => {
  const { itemCar, setItemCar } = useContext(UserContext);
  const [totalCarrito, setTotalcar] = useState({
    items: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    getItemCar();
  }, [itemCar]);

  const getItemCar = () => {
    let totalCar = JSON.parse(localStorage.getItem("total"));
    setTotalcar({
      items: totalCar.countItem,
      totalPrice: totalCar.price,
    });
  };
  console.log(totalCarrito);

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
                  {totalCarrito.items}
                </label>
              </div>
              <span
                style={{ fontSize: "15px" }}
                className="text-header text-light fw-bold"
              >
                {" "}
                Total:{" "}
              </span>
              <label className="text-header text-light fw-bold">
                <span style={{ fontSize: "15px" }}>$</span>
                <span style={{ fontSize: "15px" }}>
                  {itemCar.price * totalCarrito.items}
                  {localStorage.setItem("total", JSON.stringify(itemCar))}
                </span>
              </label>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
