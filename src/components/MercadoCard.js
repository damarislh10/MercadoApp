import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCounter from "../hooks/useCounter";

import "../styles/card.css";

const MercadoCard = ({ id, attributes }) => {
  const { counter, handleAdd, handleSubstract } = useCounter();
  const [show, setShow] = useState(1);



  const comprar = () => {
    setShow(0);
  };
  return (
    <div className="containerCard">
      <Card className="card" style={{ width: "14rem", height: "22rem" }}>
        <Link to={`/product/${id}`}>
          <Card.Img className="card-img" src={attributes.image_large_url} />
        </Link>

        <Card.Body>
          <Card.Title className="text-center">{attributes.name}</Card.Title>

          <Card.Text className="text-center">
            <span className="fw-bold">
              <span>$</span>{attributes.price}
              {localStorage.setItem("priceProduct", attributes.price)}
            </span>
          </Card.Text>
          {show === 1 && counter === 0 ? (
            <Button className="w-100" onClick={comprar}>
              Comprar
            </Button>
          ) : (
            <div className="container-item">
              <button
                className="btn-item btn-subtract"
                onClick={handleSubstract}
              >
                -
              </button>
              <label className="counterItem">{counter}</label>
              <button
                className="btn-item btn-add btn btn-primary"
                onClick={handleAdd}
              >
                +
              </button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MercadoCard;
