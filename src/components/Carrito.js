import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../styles/carrito.css";

const Carrito = () => {
  const getCarrito = () => {
    let datosCar = JSON.parse(localStorage.getItem("carrito"));
    datosCar = datosCar !== null ? datosCar : [];
    return datosCar;
  };

  const vaciarCar = () => {
    let items = [];
    localStorage.setItem("carrito", JSON.stringify(items));
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div>
      <h2 className="title-car">Mi carrito</h2>
      {getCarrito().map((pr, index) => (
        <Container key={index} className="my-5">
          <Row className="row">
            <Col sm={5} className="col-img">
              <img
                style={{ border: "none" }}
                src={pr.image_medium_url}
                alt="imgProduct"
                className="img-thumbnail animate__animated animate__fadeInLeft"
              />
            </Col>
            <Col sm={6}>
              <div className="contain-detail">
                <h3 className="fw-bold">{pr.name}</h3>
                <label>{pr.pum}</label>
                <div>
                  <label className="fw-bold fs-4">
                    Precio normal: $ {pr.price}
                  </label>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ))}
      <Container className="my-5">
        <Row className="row py-5">
          <Col>
            <div className="contain-detail w-50 m-auto">
              <Button className="btnvaciar" onClick={vaciarCar}>
                Eliminar todos los productos
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Carrito;
