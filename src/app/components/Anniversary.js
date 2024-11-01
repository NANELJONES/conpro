import React from 'react'
import AnimateUp from './AnimateUp'
import Link from 'next/link'

const Anniversary = () => {
  return (
    <>
    <AnimateUp>
    <div id="Anniversary" className='p-4 bg-[rgba(256,256,256,0.6)] flex flex-col items-center shadow-md backdrop-blur-md lg:backdrop-none lg:shadow-none lg:bg-none w-full'>

                <div className=' gap-5'>
                    <h2>Our 20th <br /> Anniversary</h2>
                    <br/>
                    <div>
                            <h5 className=''>
                       {`  Conpro Limited, an engineering consultancy firm, 
is Celebrating its 20th anniversary this year, 2024. 
As we mark our anniversary, Conpro Limited 
extends heartfelt gratitude to all who have been 
part of this journey. We thank God for His guid
ance and sustaining presence throughout these 
two decades, enabling us to reach this significant 
milestone. `}
                            
                            </h5>
                            <br/>
                            <p className=''> <strong>Date:</strong> 1st November 2024</p>
                    <p className=''> <strong>Time:</strong>5:00pm - 9:00pm</p>
                    <p className=''> <strong>Location:</strong>Conpro Corporate Head Office </p>
                

                
                    </div>

                
                    
                </div>
                <br/>

                <video className='w-[100vw]  rounded-xl' muted autoPlay  controls src='/AnniversaryVideo.mp4'>
              

                </video>
                <br/>
                <Link href={"/Conpro Brochure 20th Revison 2.pdf"}> <button className='text-secondary_color border-2 mx-auto  border-secondary_color  bg-none '> Get Our Anniversary Brochure</button></Link>
                {/* <br/>
                <div className='w-full '>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5670845350414!2d-0.09139822525436386!3d5.630735894350373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf853924552137%3A0xd763f04a6688616d!2sCONPRO%20LIMITED!5e0!3m2!1sen!2sgh!4v1729691436282!5m2!1sen!2sgh"
                width="100%"
                height="450"
                style={{ border: 0 ,borderRadius:20,maxHeight:350}} // Use an object for styles
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" ></iframe>
                </div> */}
              
    </div>
    </AnimateUp>
    </>
  )
}

export default Anniversary