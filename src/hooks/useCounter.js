import { useState, useContext } from "react";
import { UserContext } from "../components/userContext";

const useCounter = (value = 0) => {
  const [counter, setCounter] = useState(value);
  const { itemCar, setItemCar } = useContext(UserContext);

  let priceProduct = JSON.parse(localStorage.getItem("priceProduct"));
  priceProduct = priceProduct !== null ? priceProduct : [];

  const handleAdd = () => {
    setItemCar({
      price: priceProduct,
      countItem: counter + 1,
    });
    setCounter(counter + 1);

    localStorage.setItem("itemCar", JSON.stringify(itemCar));
  };

  const handleSubstract = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setItemCar({
        price: priceProduct,
        countItem: counter - 1,
      });
      localStorage.setItem("itemCar", JSON.stringify(itemCar));
    }
  };
  return {
    counter,
    handleAdd,
    handleSubstract,
  };
};

export default useCounter;
