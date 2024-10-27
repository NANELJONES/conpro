"use client"

import React from 'react'
import Spline from '@splinetool/react-spline/next';
import { getProjects } from '../lib';
import axios from 'axios';
import { useStateContext } from '../Context/StateContext'
import { HorizontalLine } from '../components/Lines';
import Modal from '../components/Modal';



const page = () => {


  return (
    <>
    <Modal></Modal>
    <div className='w-full object-cover relative  h-[100vh]' >
      
    
      <div className='w-full h-[300px]'>

      </div>
      <HorizontalLine/>

        <button 
        className='border-secondary_color mt-  text-secondary_color'
        onClick={()=>{
            getProjects()
        }}> Click Me</button>
         {/* <Spline
        scene="https://prod.spline.design/bA3UgMiEOge2Xdtz/scene.splinecode" 
       className="w-full h-full"
      /> */}

 
    </div>
    </>
  )
}

export default page



