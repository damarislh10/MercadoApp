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
    console.log(data);
    setProduct(data);
  };
  console.log(product);
  return (
    <div>
      <Container>
        <Row className="row-card" lg={4}>
          {product.map((pr) => (
            <MercadoCard key={pr.id} {...pr} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ListComponent;