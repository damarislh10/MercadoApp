import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import ListComponent from "../components/ListComponent";
import MercadoScreen from "../components/MercadoScreen";

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ListComponent />} />
          <Route path="/product/:id" element={<MercadoScreen />} />
        </Routes>
      </Router>
    </div>
  );
};
