import { useState } from "react";
import { UserContext } from "./components/userContext";
import { AppRouter } from "./routes/AppRouter";

function App() {
  const [itemCar, setItemCar] = useState({
    countItem:0,
    price:0
})

return (
    <UserContext.Provider value={{itemCar,setItemCar}}>
        <AppRouter/>
    </UserContext.Provider>
  )

  
}

export default App;
