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
          slidesToShow: 1, // Show 1 slide
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
    
    className='p-8 overflow-x-hidden flex flex-col gap-4 bg-[rgba(256,256,256,0.6)] shadow-md backdrop-blur-md lg:backdrop-none lg:shadow-none lg:bg-none w-full'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5'>
        <h1>Our <br /> Projects</h1>
        <p>
        Our Projects section highlights the journey from concept to completion across multiple sectors, including housing developments, office complexes, retail spaces, and infrastructure.
          <br /><br />
          Each project reflects our expertise in managing timelines, budgets, and client expectations with precision. Explore the multifaceted categories of our meticulous projects. 
        </p>

      </div>
   
    <Link href={"/projects"}>  <button className="bg-none">Explore Our Projects</button>    </Link>
      <div className='w-[100vw]  bg-secondary_color border p-10 slider-container relative md:max-w-[1000px] mx-auto'>
        <Slider {...settings}>
          {all_projects.map((each_project, index) => (
            <Link key={index}  href= {`/projects/${each_project?.node?.slug}`} >
            <div className=' md:p-10  '>
              <div className='relative w-[15em] h-[15em]          md:w-[25em]  md:h-[25em]   md:max-w-[400]  md:max-h-[400px]'>
                <Image
                  alt='Project Image'
                  src={each_project?.node.projectImages[0].url}
                  className='w-full object-cover'
                  fill={true}
                />
              </div>
              <h5 className='w-full  text-white text-left'>{each_project?.node?.projectName}</h5>
              <p className='w-full border-l-4 border-white px-2 text-white text-left font-italic'>{each_project?.node?.projectStatus}</p>
            </div>
            </Link>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default SampleProject;
