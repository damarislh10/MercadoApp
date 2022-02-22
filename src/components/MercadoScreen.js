import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import GetProductById from "../selectors/GetProductById";
import "../styles/detalle.css";

const MercadoScreen = () => {
  const { id } = useParams();

  let nameP = "";
  let imgP = "";
  let priceP = "";
  let pumP = "";

  let product = GetProductById(id);

  if (product !== undefined) {
    const { attributes } = product;
    const { name, image_medium_url, price, pum } = attributes;
    nameP = name;
    imgP = image_medium_url;
    priceP = price;
    pumP = pum;
  } else {
    product = "";
  }

  return (
    <div>
      <Container className="container my-5">
        <Row className="row">
          <Col sm={5} className="col-img">
            <img
              style={{ border: "none" }}
              src={imgP}
              alt=""
              className="img-thumbnail animate__animated animate__fadeInLeft"
            />
          </Col>
          <Col sm={6}>
            <div className="contain-detail">
              <h3 className="fw-bold">{nameP}</h3>
              <label>{pumP}</label>
              <div>
                <label className="fw-bold fs-4">$ {priceP.toLocaleString("en-US")}</label>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MercadoScreen;
