import React from "react";
import Toggle from "../Toggle/Toggle";
import image  from "../../img/yo.jpeg";
import "./Navbar1.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n1-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
      <div class="logo-image">
            <img src={image} class="img-fluid" style={{height:"90px"}}/>
      </div>
        <div className="n-name" style={{color:"blue",left:"10px"}}>ManMa
        {/* <div style={{color:"black"}}> */}<h1 style={{fontSize:"2px", color:"black",marginTop:"-5px"}}>Your Digital Partner</h1></div> 
        
        
        
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          {/* <ul style={{ listStyleType: "none" }}> */}
           <div style={{fontsize:"5px", marginTop:"10px"}}>Email Us Today
           <h1 style={{fontSize:"1px", color:"black",marginTop:"10px",marginLeft:"-29px"}}>Contact@manmaservices.com</h1>
           </div>
           <div style={{fontsize:"5px", marginTop:"10px"}}>Call Us For More Details
           <h1 style={{fontSize:"1px", color:"black",marginTop:"10px",marginLeft:"40px"}}>+91-8255825582</h1>
           </div>
          {/* </ul> */}
        </div>
        
      </div>
    </div>
  );
};

export default navbar;
