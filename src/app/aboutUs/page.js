"use client"
import React from 'react'
import Layout1 from '../layout/Layout1'
import { team } from '../Data/Data'
import Image from 'next/image'
import Link from 'next/link'
import { motion ,useScroll, useTransform, useMotionValue} from 'framer-motion'
import { useStateContext } from '../Context/StateContext'
import { useRef } from 'react'


const Page = () => {

  const {team} = useStateContext()
  const parent_div = useRef(null)
  const { scrollYProgress } = useScroll({
    target:parent_div
  }
  )

  const height = useTransform(
    scrollYProgress,
    [0,1],
    ["0%","100%"]

  )


  return (



    <div className=' transition ease-in-out duration-600 p-4 mx-auto max-w-[1500px] md:py-20  gap-6  flex items-start   relative  '>

      <div className='w-full relative hidden md:block md:w-[20%] flex px-4  sticky top-[70px]'>
        <div >
        <Link href={"/aboutUs/#who_we_are"}> <h6 className='hover:text-[1.5em] duration-500 '>Who we are?</h6></Link>
       <Link href={"/aboutUs/#philosophy"}><h6 className='hover:text-[1.5em] duration-500 '>Philosphy</h6></Link>
       <Link href={"/aboutUs/#mission&vision"}><h6 className='hover:text-[1.5em] duration-500 '>Mission & Vision</h6></Link>
       <Link href={"/aboutUs/#ourgoal"}><h6 className='hover:text-[1.5em] duration-500 '>Our Goal</h6></Link>
       <Link href={"/aboutUs/#ourculture"}><h6 className='hover:text-[1.5em] duration-500 '>Our Culture</h6></Link>
       <Link href={"/aboutUs/#teammates"}><h6 className='hover:text-[1.5em] duration-500 '>Meet the Team</h6></Link>
        </div>

      {/*  */}
       <motion.div style={{height}}  className='w-[1px]  bg-secondary_color absolute left-0 top-0'>  </motion.div>






      </div>

 


      <div 
      ref={parent_div}
      className='w-full flex flex-col items-start justify-start gap-10 md:w-[70%]   '>
        {/* who we are */}
        <div  id="who_we_are">
            <h3>Who are we?</h3>
            <div className='w-full h-[15em] lg:h-[30em] max-h-[400px] bg-blue-600 rounded-2xl'></div>
            <br/>
            <h6 className='border-l-4 border-secondary_color px-6'>{`CONPRO Limited is a Civil Engineering and Construction Firm which provides a wide range of services in construction and development-related activities. With professionals from various disciplines, CONPRO Limited comprehensively provides services to our clients ranging from Consulting, Civil Services and Cost Engineering. `}</h6>
            <br/>

            <h6 className='border-l-4 border-secondary_color px-6'>{`We have been in operation and existence since 2004 and have delivered the best of works to clients timely and accordingly. Our drive is to satisfy our clients and we ensure that they are sustained by the rapport we have with them. `}</h6>
            <br/>

        </div>


        <h3 className='hidden md:block' >We are an multi-national award winning Constrution, Consulting Civil Service and Cost Engineers that provide top notch civil services for over 20 years </h3>
        <h4 className='md:hidden block' >We are an multi-national award winning Constrution, Consulting Civil Service and Cost Engineers that provide top notch civil services for over 20 years </h4>

     {/* pHILO*/}
     <div id="philosophy" >
            <h3>Our Philosophy</h3>
            <div className='w-full h-[15em] md:h-[30em] max-h-[400px] bg-blue-600 rounded-2xl'></div>
            <br/>
            <h6 className='border-l-4 border-secondary_color px-6' >{`At our company, we recognize the transformative power of
collaboration, integrity, and continuous growth within the
construction industry. We are dedicated to forging strong
partnerships that drive mutual success and innovation in every
project we undertake.  `}</h6>
            <br/>

            <h6 className='border-l-4 border-secondary_color px-6'>{`Our employees are our greatest asset, and we
prioritize their satisfaction and professional development to ensure
they thrive in their roles. By fostering a supportive and inclusive
work environment, we empower our team to excel and make
meaningful contributions to our clients and the communities we
serve.`}</h6>
            <br/>

      </div>


        {/*mission and vision*/}
         <div  id="mission&vision">


           <h4>Mission & Vision</h4>
           <br/>
            <h6 className='border-l-4 border-secondary_color px-6'>{`Mission Limited is a Civil Engineering and Construction Firm which provides a wide range of services in construction and development-related activities. With professionals from various disciplines, CONPRO Limited comprehensively provides services to our clients ranging from Consulting, Civil Services and Cost Engineering. `}</h6>
           <br/>
            <h6 className='border-l-4 border-secondary_color px-6'>{`Vision Limited is a Civil Engineering and Construction Firm which provides a wide range of services in construction and development-related activities. With professionals from various disciplines, CONPRO Limited comprehensively provides services to our clients ranging from Consulting, Civil Services and Cost Engineering. `}</h6>

            <br/>


        </div>


            {/*Our goal*/}
            <div  id="ourgoal">

           <h4>Our Goal</h4>
           <br/>
            <div className='w-full p-6 bg-secondary_color'>
            <h4 className='text-white'>{`Strengthen partnerships by collaborating with 5 key industry leaders
to enhance project outcomes, improve employee satisfaction by
15%, and provide comprehensive training and development
programs to 90% of our staff within the next 12 months.  `}</h4>


            </div>


        </div>



     {/* Our culture*/}
     <div id="ourculture" >
            <h3>Our Culture</h3>
            <div className='w-full h-[15em] md:h-[30em] max-h-[400px] bg-blue-600 rounded-2xl'></div>
            <br/>
            <h6>{`Our company culture is built on a foundation of collaboration,
respect, and a commitment to continuous improvement within the
construction industry. We promote an inclusive environment where
every team member’s voice is valued, fostering creativity and
innovation in our projects. We emphasize work-life balance to
ensure that our employees feel supported in both their personal and
professional lives.`}</h6>
            <br/>

            <h6>{`Our commitment to ongoing training and
development equips our team with the skills necessary to excel in a
rapidly evolving industry. We celebrate achievements, both big and
small, recognizing that our collective success is driven by strong
partnerships and a shared vision. Together, we cultivate a positive
workplace culture that inspires excellence and delivers
transformative results for our clients and communities.`}</h6>
            <br/>




      </div>





          {/* Meet Our Team*/}
     <div  id="teammates">
            <h4>Meet our hardworking team</h4>
            <h6>{`CONPRO Limited is a Civil Engineering and Construction Firm which provides a wide range of services in construction and development-related activities. With professionals from various disciplines, CONPRO Limited comprehensively provides services to our clients ranging from Consulting, Civil Services and Cost Engineering. `}</h6>
            <br/>
            <div className="flex items-center justify-center  md:justify-start gap-[1em] 2xl:gap-[3em] w-full  flex-wrap ">
          {team.map((each_team, index) => {
            return (
              <div
                key={index}
                className="w-[60vw]  md:w-[20em]   shadow-2xl max-w-[300px] "
              >
                <div className="relative w-full h-[70vw] md:h-[25vw] max-h-[300px]">
                  <Image
                    src={each_team?.node?.employeeImage?.url}
                    fill
                    unoptimized
                    className="object-cover"
                  ></Image>
                </div>
                {/* <img
                  src={each_team.team_image}
                  className="w-full    object-cover "
                /> */}
                <div className="w-full hover:text-amber-500 duration-500  bg-secondary_color  p-5 md:p-5  flex flex-col items-center justify-evenly ">
                  <h6 className=" text-center  text-white md:text-left w-full   ">
                    {each_team?.node?.employeeName}
                  </h6>

                  <p className="italic text-white  text-center md:text-left w-full    ">
                    {each_team?.node?.employeePosition}
                  </p>
                </div>
              </div>
            );
          })}
        </div>


      </div>



      </div>





    </div>

  )
}

export default Page