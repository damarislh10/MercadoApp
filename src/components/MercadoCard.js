import { Button, Card } from "react-bootstrap";
import "../styles/card.css";

const MercadoCard = ({ id, type, attributes }) => {
  console.log(id, type);
  return (
    <div className="containerCard">
      <Card className="card" style={{ width: "14rem", height: "22rem" }}>
        <Card.Img className="card-img" src={attributes.image_large_url} />
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

{
  /* <div className="card ms-3 animate__animated animate__fadeIn" style={{ maxWidth: 540 }}>
<div className="row no-gutters">
    <div className="col-md-4">
        <img src={`./assets/movies/${id}.jpg`} className="card-img" alt="" />
    </div>
    <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">{attributes.name}</h5>
            <Link to={`/movie/${id}`}>
                Más...
            </Link>
        </div>

    </div>
</div>
</div> */
}
