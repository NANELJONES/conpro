import React from 'react'

const Anniversary = () => {
  return (
    <div id="Anniversary" className='p-8 bg-[rgba(256,256,256,0.6)] shadow-md backdrop-blur-md lg:backdrop-none lg:shadow-none lg:bg-none w-full'>

                <div className=' gap-5'>
                    <h2>Our 25th <br /> Anniversary</h2>
                    <br/>
                    <div>
                            <h5 className=''>
                            For two decades, ConPro has been at the forefront of transforming ideas into reality. Our 20th Anniversary marks a significant milestone, reflecting years of dedication, innovation, and trusted partnerships. <br/> <br/>  From humble beginnings to becoming an industry leader, we’ve built more than just structures—we’ve built lasting relationships and a legacy of quality.
                            
                            </h5>
                            <br/>
                            <p className=''> <strong>Date:</strong> 3rd November 2024</p>
                    <p className=''> <strong>Time:</strong>12:00pm</p>
                    <p className=''> <strong>Location:</strong>Spintex East Avenue Link</p>
                

                
                    </div>

                
                    
                </div>
                <br/>
                <div className='w-full '>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5670845350414!2d-0.09139822525436386!3d5.630735894350373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf853924552137%3A0xd763f04a6688616d!2sCONPRO%20LIMITED!5e0!3m2!1sen!2sgh!4v1729691436282!5m2!1sen!2sgh"
                width="100%"
                height="450"
                style={{ border: 0 ,borderRadius:20,maxHeight:350}} // Use an object for styles
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" ></iframe>
                </div>
    </div>
  )
}

export default Anniversary