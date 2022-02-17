import React from "react";
import { useParams } from "react-router-dom";
import GetProductById from "../selectors/GetProductById";

const MercadoScreen = () => {
  const { id } = useParams();
  console.log(id);
  let product = GetProductById(id);
  console.log(product);

  if(product !== undefined){
    const { attributes } = product;
  }else{
    product=""
  }
  // const {name,image_medium_url,price,pum} = attributes;
  // console.log(name,image_medium_url,price,pum)

  return (
    <div>

    </div>
  );
};

export default MercadoScreen;

// <div className="row mt-5">
// <div className="col-4">
//   <img
//     src={attributes.image_large_url}
//     alt=""
//     className="img-thumbnail animate__animated animate__fadeInLeft"
//   />
// </div>

// <div className="col-8 animate__animated animate__fadeIn">
//   <ul className="list-group list-group-flush">
//     <li className="list-group-item">
//       {" "}
//       <b> {attributes.name} </b>
    
//     </li>
//     <li className="list-group-item">
//       {" "}
//       <b>{attributes.pum} </b>{" "}
//     </li>
//   </ul>
// </div>
// </div>