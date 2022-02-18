import { useState } from "react";

const useCounter = (value = 0) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    localStorage.setItem("itemCar", counter + 1);
  };

  const handleSubstract = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      localStorage.setItem("itemCar", counter);
    }
  };
  return {
    counter,
    handleAdd,
    handleSubstract,
  };
};

export default useCounter;
