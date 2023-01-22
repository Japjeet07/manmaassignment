import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/icon.png";
import Glasses from "../../img/icon2.png";
import Humble from "../../img/icon.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
 

 
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Services</span>
        <span></span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
       
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            img={HeartEmoji}
           
            heading={"Web Design"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
          />
          {/* <img class="card-img-top" src="HeartEmoji" alt="Card image cap"/>
          <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a> */}
  
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            img={Glasses}
            heading={"Social Media Marketing"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            img={Humble}
            heading={"APP Design"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 4th */}
        <motion.div
          initial={{ left: "-11rem", top: "30rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            img={Glasses}
            heading={"Email Marketing"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
          />
        </motion.div>
        {/* 5th */}
        <motion.div
          initial={{ top: "37rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            img={Humble}
            heading={"Web Development"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 6th */}
        <motion.div
          initial={{ left: "-11rem", top: "48rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            img={Glasses}
            heading={"Digital Content &  Video"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
          />
        </motion.div>
  
        {/* <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div> */}
      </div>
    </div>
    
  );
};

export default Services;