import  { useEffect, useState } from "react";
import { url as endpoint } from "../helpers/url";

const GetProductById = (id) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await fetch(endpoint);
    const { data } = await resp.json();
    setProduct(data);
  };

  return product.find((p) => p.id === id);
};

export default GetProductById;
