"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css"; // Import Swiper styles

const Clients = () => {
  const client_logos = [
    "/clients/uew_064622.jpg",
    "/clients/gaec_064615.jpg",
    "/clients/getfund_064617.jpg",
    "/clients/gnpc1_064620.jpg",
    "/clients/kcl_064620.jpg",
    "/clients/moe_064621.jpg",
  ];

  return (
    <div className="w-full border p-8 border-secondary_color">
      <div className="gap-5 items-start">
        <h1>Our <br /> Partners & Clients</h1>
      </div>

      <h5 className="w-full md:w-2/3">
        We are proud to collaborate with trusted partners and serve clients across various industries. 
        Our success is built on strong relationships with developers, architects, suppliers, and corporate clients, 
        all sharing a commitment to high standards.
      </h5>

      <br /><br />

      {/* Swiper for client logos */}
      <Swiper
        slidesPerView={"auto"} // Adjust number of visible slides
        spaceBetween={1} // Space between slides
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
   
      >
        {client_logos.map((each_client, index) => (
          <SwiperSlide
            key={index}
            className="w-auto mx-auto h-auto md:w-[200px] flex items-center justify-around  md:h-[200px] md:max-w-[200px] md:max-h-[200px] border-2 border-[rgba(186, 186, 186, 0.7)] flex items-center justify-center p-4"
          >
            <img
              src={each_client}
              className="w-auto mx-auto  h-full object-contain"
              alt={`client-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
