import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector20.png";
import boy from "../../img/hero.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "with global edge helping businesses  grow online","with global edge helping businesses  grow online","with global edge helping businesses  grow online" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (







    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>An Indian Digital Marketing Agency</span>
         
          {/* <span>
            with global edge helping buisnesses grow Online
          </span> */}
          <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "with global edge helping businesses  grow online"]'><span>{text}</span></span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button" style={{color:"black", background:"white"}}>Call us today</button>
        </Link>
        {/* social icons */}
       </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ top:"25%",left: "10%" }}
          whileInView={{ left: "0%", top:"20%" }}
          transition={transition}
          src={glassesimoji}

          alt=""
        />
        

        <motion.div
          initial={{ top: "40%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="App" text2="Design" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "28%", top: "25rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
         
          <FloatinDiv img={thumbup} text1="web" text2="Development" />
        </motion.div>
       
{/* 
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div> */}
      </div>
    </div>
    
  );
};

export default Intro;