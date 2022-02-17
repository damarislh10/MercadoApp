import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/card.css";

const MercadoCard = ({ id, attributes }) => {
  return (
    <div className="containerCard">
      <Card className="card" style={{ width: "14rem", height: "22rem" }}>
        
        <Link to={`/product/${id}`}>
        <Card.Img className="card-img" src={attributes.image_large_url} />
        </Link>
        
        <Card.Body>
          <Card.Title className="text-center">{attributes.name}</Card.Title>
         
          <Card.Text className="text-center">
            <span>$ </span>
            {attributes.price}
          </Card.Text>
          <Button className="w-100" variant="primary">
            Comprar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MercadoCard;

