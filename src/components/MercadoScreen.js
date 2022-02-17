import React from "react";
import { useParams } from "react-router-dom";
import GetProductById from "../selectors/GetProductById";

const MercadoScreen = () => {
  const { id } = useParams();
  console.log(id);
  let product = GetProductById(id);
  console.log(product);

  if (product !== undefined) {
    const { attributes } = product;
    const { name, image_medium_url, price, pum } = attributes;
    console.log(name, image_medium_url, price, pum);
  } else {
    product = "";
  }

  return (
    <div>
      {/* <div className="row mt-5">
        <div className="col-4">
          <img
            src={image_medium_url}
            alt=""
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <b> {name} </b>
            </li>
            <li className="list-group-item">
              {" "}
              <b>{pum} </b>{" "}
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default MercadoScreen;
