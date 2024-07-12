import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import VehicleDetail from "./components/VehicleDetail";

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vehicle/:id" element={<VehicleDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
