import React, { useEffect, useState } from 'react'
import { url as endpoint } from "../helpers/url";

const GetProductById = (id) => {
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

  return product.find(p => p.id === id)
  
}

export default GetProductById
