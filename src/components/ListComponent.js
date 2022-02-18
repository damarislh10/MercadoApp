import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { url as endpoint } from "../helpers/url";
import MercadoCard from "./MercadoCard";
import "../styles/listC.css";
const ListComponent = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await fetch(endpoint);
    const { data } = await resp.json();
    setProduct(data);
  };
  return (
    <div>
      <Container>
        <Row style={{ boxShadow: "none" }} className="row-card" lg={4}>
          {product.map((pr) => (
            <MercadoCard key={pr.id} {...pr} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ListComponent;
