import React from "react";
import Vehicles from "./Vehicles";


const Home = () => (
  <div className="home-container">
    
    <h2 className="main-title">  SwazzZ AUTO</h2>
    
    <p className="title">Vehicle & Automotive Tech Bro's</p>

 
    <div className="banner-container">
    <img src="/b.jpg" alt="Banner" className="home-banner" />
    </div>

    <Vehicles />

   
  </div>
);

export default Home;