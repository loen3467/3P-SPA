import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Dashboard } from "../components/Dashboard";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="*"
            element={<div>Error 404 - Recurso no encontrado</div>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { Navigation };
