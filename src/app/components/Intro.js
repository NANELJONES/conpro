"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Layout1 from '../layout/Layout1';
import { AllLines } from './AllLines';
import {Swiper, SwiperSlide} from 'swiper';

const Intro = () => {
  return (
    <div className='w-full'>
      
  
    <div className='h-auto  md:p-20 p-10 gap-10  justify-between md:flex-row items-center max-w-[1500px] mx-auto flex-col-reverse border  max-h-fit flex items-center  bg-secondary_color'>
        {/* Texts */}
   
            
    
         <motion.div 
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2,  }}
     className='w-full md:w-1/2 '>
             <motion.h3 className='text-white ' 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay:0.5 }}
             >About Us</motion.h3>
              <br/>
            <motion.h6 
             initial={{ opacity: 0, y: 80 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 2, delay:0.8}}
            className='text-white  w-full'>CONPRO Limited is a Civil Engineering and Construction Firm which provides a wide range of services in construction and development-related activities. With professionals from various disciplines, CONPRO Limited comprehensively provides services to our clients ranging from Consulting, Civil Services and Cost Engineering.</motion.h6>
            <br/>
            <h6 className='text-white w-full '>We have been in operation and existence since 2004 and have delivered the best of works to clients timely and accordingly. Our drive is to satisfy our clients and we ensure that they are sustained by the rapport we have with them.</h6>
            <br></br>

            <div className='w-full  h-[10em] overflow-hidden'>

                <motion.div 
                
                initial={{ x: 80 }}
                whileInView={{  x: '-20%' }}
                transition={{ duration: 2}}
                className='w-full  h-[10em] w-[70vw] flex items-center  gap-10  '>
                    <img src="/Us/1.jpg" className='w-[10em]'/>
                    <img src="/Us/2.jpg" className='w-[10em]'/>
                    <img src="/Us/3.jpeg" className='w-[10em]'/>
                    <img src="/Us/4.jpeg" className='w-[10em]'/>
                    
                </motion.div>
            </div>
            <br/>
            <Link href={"/aboutUs"}><button className='border-2 w-2/3 max-w-[200px] bg-none  text-white rounded-full'>Learn More</button></Link>


       </motion.div>
     

        {/* Brics */}

        <div className='w-full overflow-hidden  md:w-1/2 items items-center md:opacity-[0.3] md:opacity-[1] gap-3 h-full flex flex-col'>
        <motion.div 
                initial={{ opacity: 0, y:-70, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, }}
                className='brick rotate-12'>
            </motion.div>
            {/* Brick Row 1 */}
            <div className='flex gap-3'>
            <motion.div 
                initial={{ opacity: 0, y: -50, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, delay:0.2 }}
                className='brick rotate-12'>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -100, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, delay:0.3 }}
                className='brick rotate-12'>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: -55, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, delay:0.6}}
                className='brick rotate-12'>
            </motion.div>
            
            
            </div>
            {/* Brick Row 2 */}
            <div className='ml-[-3em] flex gap-3'>
            <motion.div 
                initial={{ opacity: 0, y:-40, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, }}
                className='brick rotate-12'>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -45, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 1.6, }}
                className='brick rotate-12'>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: -60, }}
                whileInView={{ opacity: 1, y:0 ,}}
                transition={{ duration: 3, }}
                className='brick rotate-12'>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -60, }}
                whileInView={{ opacity: 1, y:0 ,}}
                transition={{ duration: 3, }}
                className='brick rotate-12'>
            </motion.div>
            
            
                </div>

        {/* Brick Row 3 */}
        <div className='flex gap-3'>
            <motion.div 
                initial={{ opacity: 0, y: -30, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, }}
                className='brick rotate-12'>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -45, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, }}
                className='brick rotate-12'>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: -100, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, }}
                className='brick rotate-12'>
            </motion.div>
            
            
            </div>

            <div className='flex gap-3'>
            <motion.div 
                initial={{ opacity: 0, y:-40, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, }}
                className='brick rotate-12'>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -45, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 1.6, }}
                className='brick rotate-12'>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: -60, }}
                whileInView={{ opacity: 1, y:0 ,}}
                transition={{ duration: 3, }}
                className='brick rotate-12'>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -60, }}
                whileInView={{ opacity: 1, y:0 ,}}
                transition={{ duration: 3, }}
                className='brick rotate-12'>
            </motion.div>
            
            
                </div>
        

        </div>



    </div>
    </div>
  )
}

export default Intro