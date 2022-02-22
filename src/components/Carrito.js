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

  const deleteProduct = (id) => {
    const local = getCarrito();

    local.forEach((element, index) => {
      if (Number(element.idS) === Number(id)) {
        local.splice(index, 1); // elimine
        localStorage.setItem("carrito", JSON.stringify(local));
      }
    });
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div>
      <h2 className="title-car">Mi carrito</h2>
      {getCarrito().map((pr) => (
        <Container key={pr.idS} className="my-5">
          <Row className="row">
            <Col sm={5} className="col-img">
              <img
                style={{ border: "none" }}
                src={pr.atribute.image_medium_url}
                alt="imgProduct"
                className="img-thumbnail animate__animated animate__fadeInLeft"
              />
            </Col>
            <Col sm={6}>
              <div className="contain-detail">
                <h3 className="fw-bold">{pr.atribute.name}</h3>
                <label>{pr.atribute.pum}</label>
                <div>
                  <label className="fw-bold fs-4">
                    Precio normal: $ {pr.atribute.price.toLocaleString("en-US")}
                  </label>
                  <Button
                    variant="danger"
                    className="btnDelete"
                    onClick={() => deleteProduct(pr.idS)}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ))}

      <div className="contain-detail w-50 m-auto">
        <Button className="btnvaciar" onClick={vaciarCar}>
          Eliminar todos los productos
        </Button>
      </div>
    </div>
  );
};

export default Carrito;
