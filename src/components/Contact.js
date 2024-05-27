import React from "react";
import logo from '../logo.jpg'; 

const Contact = () => (
  <div className="container">
    

    <div class="card">
  <div class="card-header">
  <img src={logo} alt="Logo" className="profile-picture"/>
    <h2 class="name">Gustavo Swazz</h2>
  </div>
  <div class="card-body">
    <div class="info-row">
      <span class="label">Age:</span>
      <span class="value">25</span>
    </div>
    <div class="info-row">
      <span class="label">Occupation:</span>
      <span class="value">Tech Bro</span>
    </div>
    <div class="info-row">
      <span class="label">Email:</span>
      <span class="value">guzzz@xyz.com</span>
    </div>
    <div class="info-row">
      <span class="label">Phone:</span>
      <span class="value">+254790817xxxx</span>
    </div>
  </div>
</div>

  </div>
);

export default Contact;
