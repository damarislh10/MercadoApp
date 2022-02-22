import React from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import ListComponent from "../components/ListComponent";
import MercadoScreen from "../components/MercadoScreen";
import Carrito from "../components/Carrito";

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ListComponent />} />
          <Route path="/product/:id" element={<MercadoScreen />} />
          <Route path="/product/car" element={<Carrito/>} />
          <Route path="*" element={<Navigate to="/"/>}/>  

        </Routes>
      </Router>
    </div>
  );
};
