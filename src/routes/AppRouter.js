import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import ListComponent from "../components/ListComponent";
export const AppRouter = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ListComponent />} />

        </Routes>
      </Router>
    </div>
  );
};
