import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
          img: profilePic1,
        name:"Mira Peterson",
          position: "CEO Company",
      review:
                "\"Seofy's clients and their results are the best proof that our methodologies work. But we've received numerous awards and praise from the media and peers.\"",
    },
    {
        img: profilePic2,
        name: "Ronald Dunkan",
      position: "SMM Manager",
      review:
        "\"Seofy consistently delivers excellent results. We enjoy working with them and have seen a strong return on our investment.\"",
    },
    {
        img: profilePic3,
      name: "Ronald Dunkan",
      position: "Chairman MD",
      review:
        "\"Seofy consistently delivers excellent results. We enjoy working with them and have seen a strong return on our investment.\"",
    },
    //{
    //  img: profilePic4,
    //  review:
    //    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    //},
  ];

    return (

      <div className="t-wrapper" id="testimonial">
            {/*<button className="button s-button">Hire Me</button>*/}
      <div className="t-heading">
        <span>What Clients </span>
        <span>Say About </span>
        <span>Us...</span>
              
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                      <img src={client.img} alt="" />
                      <span>{client.name}</span>
                      <span>{client.position}</span>
                      <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;