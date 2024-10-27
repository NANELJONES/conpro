"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Link from 'next/link';
import { services_data } from '../Data/Data';
import { useStateContext } from '../Context/StateContext';

const OurServices = () => {
  const {services} = useStateContext()
  const [show_img, set_show_img] = useState("");

  return (
    <motion.div 
    initial={{ opacity: 0, y: 40, }}
    whileInView={{ opacity: 1, y: 0,}}
    transition={{duration:1,   }}

    
    
    
    className='p-4 md:p-10   bg-[rgba(256,256,256,0.6)]  shadow-md backdrop-blur-md lg:backdrop-none lg:shadow-none lg:bg-none'>
      <div className='flex flex-col flex-wrap md:flex-row md:items-center md:justify-between  gap-5 md:items-start justify-start'>
        <h1>Our <br /> Services</h1>
        <h6 className=''>
        {`  At ConPro, we provide a wide range of construction services tailored to meet the specific needs of each client. Whether you're building from the ground up or transforming an existing space, our expert team delivers with precision and care.`}
          <br /><br />
          Explore the diverse range of our services, spanning multiple disciplines to meet various needs and challenges.
        </h6>
      </div>

      <br /><br />

      <div className='flex flex-col gap-2 md:gap-10'>
        {services.map((each_service, index) => (
          <motion.div
          initial={{ opacity: 0, y: 40, }}
          whileInView={{ opacity: 1, y: 0,}}
          transition={{duration:1, delay: index / 10 + 0.3  }}


            key={index}
            onMouseEnter={() => set_show_img(each_service.Service_Name)}
            onMouseLeave={() => set_show_img("")}
            className='md:p-4 flex items-center border-b-2 gap-2 border-primary_color justify-around relative'
          >
            {show_img === each_service?.node?.serviceName && (
              <img 
                src={"/man.jpg"} 
                className='absolute max-w-[200px]  w-full top-[-3em] right-10 z-10' 
              />
            )}

            <h5 className='p-2 w-[75%] gap-2 md:w-[60%] flex'>
            <img src={each_service?.node?.serviceIcon?.url ? each_service?.node?.serviceIcon?.url  :"/services icons/structure engineering.svg"} width={35} className='md:hidden' alt="Service Icon" />  {index + 1}. {each_service?.node?.serviceName}
            </h5>

            {each_service?.node?.serviceIcon?.url ?  <img src={each_service?.node?.serviceIcon?.url} width={35} className='hidden md:flex' alt="Service Icon" /> :  <img src={"/services icons/structure engineering.svg"} width={35} className='hidden md:flex' alt="Service Icon" />}
           

            <Link href={'#'}>
              <button className='bg-none p-0 border-none md:p-2'>Read More ..</button>
            </Link>
          </motion.div>



        ))}
      </div>
      

    </motion.div>
  );
};

export default OurServices;
