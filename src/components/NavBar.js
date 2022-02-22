import React, { useEffect, useState, useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";
import "../styles/navBar.css";

const NavBar = () => {
  const { itemCar, setItemCar } = useContext(UserContext);
  const navigate = useNavigate();

  const [totalCarrito, setTotalcar] = useState({
    items: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    getItemCar();
  }, [itemCar]);

  const getItemCar = () => {
    let totalCar = JSON.parse(localStorage.getItem("total"));
    let totalprice = JSON.parse(localStorage.getItem("totalprice"));
    setTotalcar({
      items: totalCar.countItem,
      totalPrice: totalprice,
    });
  };
  let prueba = itemCar.price * totalCarrito.items;
  prueba = prueba.toLocaleString("en-US");
  let totalItems = totalCarrito.items;

  const Allcar = {
    items: totalItems,
    precioTotal: prueba,
  };
  let totalcar = JSON.parse(localStorage.getItem("totalCar"));
  totalcar = totalcar !== null ? totalcar : [];

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
                <button
                  className="btnCar"
                  onClick={() => {
                    navigate("/product/car");
                  }}
                >
                  <img
                    className="img-car"
                    style={{ width: "30px" }}
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1645154462/pruebaTecnicaMerqueo/icons8-carrito-de-compras-48_yzapu5.png"
                    alt="img-car"
                  />
                  <label className="text-header text-light fw-bold label-item">
                    {totalcar.items}
                  </label>
                </button>
              </div>
              <span
                style={{ fontSize: "15px" }}
                className="text-header text-light fw-bold"
              >
                Total:
              </span>
              <label className="text-header text-light fw-bold">
                <span style={{ fontSize: "15px" }}>$</span>
                <span style={{ fontSize: "15px" }}>
                  {totalcar.precioTotal}
                  {localStorage.setItem("total", JSON.stringify(itemCar))}
                  {localStorage.setItem("totalCar", JSON.stringify(Allcar))}
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
