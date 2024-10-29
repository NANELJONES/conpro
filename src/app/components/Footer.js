import React from 'react'
import Layout1 from '../layout/Layout1'
import Link from 'next/link'

const Footer = () => {
  return (
    <div  className='w-full flex flex-col items-center justify-between  mt-2 md:mt-[20px]   md:max-h-[1000px] md:py-20 bg-primary_color'>

    <Layout1>
    <h2 className='text-white text-center w-full   md:text-left'>{`Let's`} <br/>Connect</h2>
      <br/>
      <div className='normal_div gap-10 '>
              <div className='w-full md:w-[50%]  '>
                        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5670845350414!2d-0.09139822525436386!3d5.630735894350373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf853924552137%3A0xd763f04a6688616d!2sCONPRO%20LIMITED!5e0!3m2!1sen!2sgh!4v1729691436282!5m2!1sen!2sgh"
                width="100%"
                height="450"
                style={{ border: 0 ,borderRadius:20,maxHeight:350}} // Use an object for styles
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" ></iframe>
              </div>

              <div className='w-full md:w-[30%] md:w-flex flex-col items-center gap-4 md:block'>
                <h2 className='text-white text-center md:text-left'>{`Our`} <br/>Socials</h2>
                

                  {/*Location  */}
                <span  className='flex flex-col md:flex-row  items-center gap-2 md:gap-5 '>  <img src='/location.svg' className='w-[30px]'></img> <p className='text-white text-center md:text-left'>BAC 52, 3rd Street, Baatsonaa, Tema.
                <br/>   Plot 86 block E, Daban, Kumasi</p> </span>
                <br/> 
                <span  className='flex flex-col md:flex-row  items-center gap-2 md:gap-5'>

                <img src='/phone.svg' className='w-[30px]'></img>

                  <span className='flex flex-col  items-center md:items-start'>

                  <p className='text-white '>(233) 20 211 4432</p> 
                 <p className='text-white'>024 432 8880</p> 
                 <p className='text-white'>024 858 5116</p> 

                  </span>
                
                
                </span>
                <br/> 
                <span  className='flex flex-col md:flex-row  items-center gap-2 md:gap-5'>  <img src='/email.svg' className='w-[30px]'></img> <p className='text-white'>info@conprolimited.com</p> </span>
              
              </div>

              <div className=' w-full md:w-[20%]    h-full flex  flex-col items-center justify-center  '>
              <svg width="114" height="133" viewBox="0 0 114 133" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M68.0484 2.07391L67.014 0.796082L66.0046 2.09381L56.8725 13.8352L56.2552 14.6288L56.8654 15.4279L111.659 87.1808L114 90.247V86.389V30.2913V28.9867H112.695H89.835L68.0484 2.07391ZM59.5493 14.6434L67.0549 4.99344L88.1986 31.1122L88.5902 31.5959H89.2126H111.391V82.5311L59.5493 14.6434ZM100.682 107.772L98.3438 104.732V108.567V129.441V130.745H99.6483H112.694H113.999V129.441V125.527V125.083L113.728 124.732L100.682 107.772ZM100.953 128.136V112.403L111.39 125.971V128.136H100.953ZM57.9018 51.7363L58.904 52.939L65.427 60.7666L65.7294 61.1294V61.6017V120.309H76.1662V78.5615V74.6477L78.5145 77.7787L86.342 88.2155L86.603 88.5634V88.9983V129.441V130.745H85.2984H51.3788H50.0742V129.441V61.6017V61.1294L50.3766 60.7666L56.8996 52.939L57.9018 51.7363ZM52.6834 62.0741V128.136H83.9938V89.4332L78.7754 82.4753V121.613V122.918H77.4708H64.4248H63.1202V121.613V62.0741L57.9018 55.812L52.6834 62.0741ZM39.6369 78.5615V74.7592L37.3025 77.7605L28.1703 89.5019L27.8955 89.8552V90.3029V129.441V130.745H29.2001H38.3323H39.6369V129.441V78.5615ZM30.5047 128.136V90.7505L37.0277 82.3638V128.136H30.5047ZM0.5 30.2913H1.8046H44.8563H47.5405L45.8822 32.4019L2.83043 87.195L0.5 90.161V86.389V31.5959V30.2913ZM3.1092 32.9005V82.617L42.1722 32.9005H3.1092ZM16.1552 108.567V104.732L13.8165 107.772L0.770542 124.732L0.5 125.083V125.527V130.745V132.05H1.8046H14.8506H16.1552V130.745V108.567ZM3.1092 129.441V125.971L13.546 112.403V129.441H3.1092Z" fill="white"/>
</svg> 

        <h4 className='text-white'>Conpro Ltd</h4>
        <h6 className='text-center text-white'>Consulting Civil Service And Cost Engineers</h6>



              </div>


      </div>
      <br/>
      <div className='normal_div '>
          <Link href={"#"}> <h6 className='text-white border-b-2 md:border-l-4 p-2'>Our Company</h6></Link>
          <Link href={"/services"}> <h6 className='text-white border-b-2 md:border-l-4 p-2 w-full'>Our Services</h6></Link>
          <Link href={"/projects"}> <h6 className='text-white border-b-2 md:border-l-4 p-2'>Projects</h6></Link>
          <Link href={"/aboutUs"}> <h6 className='text-white border-b-2 md:border-l-4 p-2'>About Us</h6></Link>
          <Link href={"/contactUs"}> <h6 className='text-white border-b-2 md:border-l-4 p-2'>Contact Us</h6></Link>

      </div>

      <br/>

      <p className='text-white text-center'>© 2024 Conpro Construction Company All rights reserved</p>
      <br/>
    <Link href={"https://kr8tos.vercel.app/"}>  <p className='text-white text-center'>Developed by Kr8tos</p></Link>
   
   
    </Layout1>


    </div>
 
 
  )
}

export default Footer