"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { sample_projects } from '../Data/Data'
import Layout1 from '../layout/Layout1'
import Image from 'next/image'
import Link from 'next/link'
import axios, { all } from 'axios'
import { getProjects } from '../lib'
import { StateContext } from '../Context/StateContext'
import { useStateContext } from '../Context/StateContext'

const page = () => {
  const {all_projects} = useStateContext();
 
  
  


  return (
    <div className="relative">
      <div className='w-full bg-primary_color'>
        


      
      <div className='layout  flex flex-col md:flex-row md:p-20  max-h-[500px] bg-primary_color'>
      
            <div className=' w-full  md:w-1/2'>
                <h1 className=' text-white'>Our <br/> Projects</h1>
                <h6 className='text-white'>Our Projects section highlights the journey from concept to completion across multiple sectors, including housing developments, office complexes, retail spaces, and infrastructure.</h6>
            </div>

            <div className='relative flex w-full  md:w-1/2'>
              <Image
              alt="this is here" 
              src={"/our_project.png"}
              className="w-full object-contain " 
              fill 
          />
            </div>
        
    


      </div>

      </div>



      <Layout1>

       


        <div className="flex p-10 md:p-20 items-center justify-around flex-wrap gap-4 relative">
          {all_projects.map((each_project, index) => {
            return (
              <Link href= {`/projects/${each_project?.node?.slug}`}>
              <motion.div 
                key={index} 
                className="w-auto h-auto"
                initial={{ opacity: 0, y: -70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div
          
                  className={`relative border   w-[20em] h-[30em] md:h-[45em] max-w-[250px] max-h-[300px] 
                    ${index % 2 === 0 ? 'mt-20' : 'mt-0'}`}
                >
                  <Image
                    alt="this is here"
                    src={each_project?.node.projectImages[0].url }
                    className="w-full h-full object-cover "
                    fill
                  />
                </div>

                <div className='flex items-center flex-col  border-b-8 border-secondary_color'>
                <h6 className='text w-full text-center' > <strong>{each_project?.node?.projectName}</strong></h6>
                    <p>{each_project?.node?.projectField}</p>
                    {/* <p>{each_project.Project_Status}</p> */}
                </div>

             
              </motion.div>
              </Link>
            );
          })}
        </div>
      </Layout1>
    </div>
  );
};


export default page;

