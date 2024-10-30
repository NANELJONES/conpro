"use client";
import Link from 'next/link';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { sample_projects } from '../Data/Data';
import { motion } from 'framer-motion';
import { useStateContext } from "@/app/Context/StateContext";

const SampleProject = () => {
  
  const {all_projects} = useStateContext();
  const settings = {
    dots: true,
    infinite: false, // Set to false to prevent endless scrolling
    speed: 500,
    slidesToShow: 2, // Show 3 slides on large screens
    slidesToScroll: 1, // Scroll one slide at a time
    centerMode: false, // Disable center mode for strict slide control
    
    responsive: [
      {
        breakpoint: 1024, // For medium screens (tablets, etc.)
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For small screens
        settings: {
          slidesToShow: 2, // Show 1 slide
          slidesToScroll: 1,
        },
        

        
        

        

        
      },

      
      
    ],
  };

  return (
    <motion.div 
    initial={{ opacity: 0, y: 40, }}
          whileInView={{ opacity: 1, y: 0,}}
          transition={{duration:2  }}
    
    className='p-8 overflow-x-hidden flex flex-col gap-4 bg-[rgba(256,256,256,0.6)] shadow-md md:backdrop-blur-md lg:backdrop-none lg:shadow-none lg:bg-none w-full'>
      <div className='flex flex-col  md:items-start md:justify-between gap-5'>
        <h1>Our <br /> Projects</h1>
        <p>
        At Conpro Limited , we pride ourselves on
being a leader in infrastructure and building
projects, dedicated to transforming visions into
reality for a diverse range of clients.
          <br /><br />
          With a
strong commitment to quality, innovation, and
sustainability, we deliver tailored solutions that
meet the unique needs of each project.
        </p>

      </div>
   
    <Link href={"/projects"}>  <button className="text-secondary_color border-2  border-secondary_color  bg-none ">Explore Our Projects</button>    </Link>
      <div className='w-[100vw]  bg-secondary_color border p-10 slider-container relative md:max-w-[1000px] mx-auto'>
        <Slider {...settings}>
          {all_projects.map((each_project, index) => (
        
            <div className=' md:p-10  ' key={index}>
              <div className='relative w-[10em] h-[10em]          md:w-[18em]  md:h-[18em]   md:max-w-[400]  md:max-h-[400px]'>
                <Image
                  alt='Project Image'
                  src={each_project?.node?.projectImages[0]?.url ? each_project?.node?.projectImages[0]?.url :"/gallery_bg.jpg"}
                  className='w-full object-cover'
                  fill={true}
                />
              </div>
              <Link key={index}  href= {`/projects/${each_project?.node?.slug}`} > <h6 className='w-full  text-white text-left'>{each_project?.node?.projectName}</h6>    </Link>
              <p className='w-full border-l-4 border-white px-2 text-white text-left font-italic'>{each_project?.node?.projectStatus}</p>
            </div>
        
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default SampleProject;
