"use client"
import React from 'react'
import { motion } from 'framer-motion'





const HorizontalLine = ({props}) =>{
 return (
    <div className='  transition ease-in-out w-[100%] h-[0.3px]  absolute top-20   bg-secondary_color '>
    
</div>
 )
}

const Lines = () => {
    return (
      <div>Lines</div>
    )
  }


  const SingleLine =(props)=>{
    return (     <motion.div 
      initial={{width:0}}
      whileInView={{width:"100%"}}
    
      transition={{duration:2, delay: Number(props.delay_time)}}
      className="w-full h-[5px] bg-secondary_color"></motion.div>
                )
  }

export  {HorizontalLine, Lines,SingleLine}