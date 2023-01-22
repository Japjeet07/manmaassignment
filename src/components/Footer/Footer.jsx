import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <h1
          style={{ fontSize: "larger", fontWeight: "bolder", color: "black" }}
        >
          Resi.
          <h2 style={{ marginLeft: "-3rem" }}>
            A108 Adam Street <br /> New York, NY 535022 <br /> United States
          </h2>
          <h2 style={{ marginLeft: "-3rem" }}>
            Phone: +1 12345 654321 21 <br />
            Email: info@example.com
          </h2>
        </h1>
        <h1
          style={{ fontSize: "larger", fontWeight: "bolder", color: "black" }}
        >
          Useful Links
          <h2 style={{ marginLeft: "2rem" }}>Home</h2>
          <h2 style={{ marginLeft: "1.35rem" }}> About us</h2>
          <h2 style={{ marginLeft: "1.5rem" }}> Services</h2>
          <h2 style={{ marginLeft: "0rem" }}> Terms of Services</h2>
          <h2 style={{ marginLeft: "0.5rem" }}> Privacy Policy</h2>
        </h1>
        <h1
          style={{ fontSize: "larger", fontWeight: "bolder", color: "black" }}
        >
          Our Services.
          <h2 style={{ marginLeft: "1rem" }}>Web Design</h2>
          <h2 style={{ marginLeft: "0rem" }}>Web Development</h2>
          <h2 style={{ marginLeft: "-0.5rem" }}>Product Management</h2>
          <h2 style={{ marginLeft: "1.5rem" }}> Marketing</h2>
          <h2 style={{ marginLeft: "0.5rem" }}>Graphic Design</h2>
        </h1>
      </div>
      
    </div>
  );
};

export default Footer;
