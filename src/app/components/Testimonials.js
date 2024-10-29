"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination ,Navigation,Autoplay} from "swiper/modules";
import { useStateContext } from '../Context/StateContext';

import "/node_modules/swiper/swiper-bundle.min.css";
import "/node_modules/swiper/swiper.min.css";

const Testimonials = () => {
 const {testimonials} =  useStateContext()
  const testimonaials_data =  [
    {"Client_Name":"Areon Marques",
      "Client_Image":"/man.jpg",
      "Client_Position":"Head of It",
       "Client_Testimony":"This question was asked when Tailwind 1.2 was in use. Since version 1.7 Tailwind supports pseudo classes in @apply directive. In first it was experimental feature that had to be turned on manually in config, but currently it is normal functionality."
    },
    {"Client_Name":"Areon Marques",
      "Client_Image":"/man.jpg",
      "Client_Position":"Head of It",
       "Client_Testimony":"This question was asked when Tailwind 1.2 was in use. Since version 1.7 Tailwind supports pseudo classes in @apply directive. In first it was experimental feature that had to be turned on manually in config, but currently it is normal functionality."
    },
    {"Client_Name":"Areon Marques",
      "Client_Image":"/man.jpg",
      "Client_Position":"Head of It",
       "Client_Testimony":"This question was asked when Tailwind 1.2 was in use. Since version 1.7 Tailwind supports pseudo classes in @apply directive. In first it was experimental feature that had to be turned on manually in config, but currently it is normal functionality."
    },
    {"Client_Name":"Areon Marques",
      "Client_Image":"/man.jpg",
      "Client_Position":"Head of It",
       "Client_Testimony":"This question was asked when Tailwind 1.2 was in use. Since version 1.7 Tailwind supports pseudo classes in @apply directive. In first it was experimental feature that had to be turned on manually in config, but currently it is normal functionality."
    },
    {"Client_Name":"Areon Marques",
      "Client_Image":"/man.jpg",
      "Client_Position":"Head of It",
       "Client_Testimony":"This question was asked when Tailwind 1.2 was in use. Since version 1.7 Tailwind supports pseudo classes in @apply directive. In first it was experimental feature that had to be turned on manually in config, but currently it is normal functionality."
    },
    {"Client_Name":"Areon Marques",
      "Client_Image":"/man.jpg",
      "Client_Position":"Head of It",
       "Client_Testimony":"This question was asked when Tailwind 1.2 was in use. Since version 1.7 Tailwind supports pseudo classes in @apply directive. In first it was experimental feature that had to be turned on manually in config, but currently it is normal functionality."
    },
  ]
  return (
     <div className='w-full border p-8 border-secondary_color'>
       <div className=' gap-8'>
                <h1 className=''>Clients <br /> Testimonials</h1>
                <br/>
                 <h5 className=' md:w-2/3'>
                {` At ConPro, we believe that our clients’ satisfaction is not just a metric; it's the very foundation of our success and the driving force behind everything we do. `}
                <br /><br />
                Our clients’ satisfaction is the foundation of everything we do. Here’s what they have to say about working with ConPro:
         </h5>
               
        </div>
      

    <br/>
    <br/>
      <Swiper 
        slidesPerView="auto"
        spaceBetween={30}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
         className="mySwiper"
        modules={[Pagination, Navigation]}
    >
      {testimonials.map((each_client, index)=>{
        return(
          <SwiperSlide key={index} className=' md:w-[40em]  border-t-4  h-[30em] items-center border-secondary_color justify-around p-10  max-w-[400px] max-h-[600px] '> 
            <div className='flex gap-4 h-full'>
            <img src={each_client?.node?.personImage?.url } className='w-[3em] h-[3em] object-cover  rounded-full   '/>
            
            <h5> <strong>{each_client?.node?.personName} </strong><br/> <p>{each_client?.node?.personPosition}</p> </h5>
             
            </div>
              <br/>
              <p className='border-t p-2'>{each_client.node?.testimony}</p>
          </SwiperSlide>
        )
      })}


      </Swiper>

      
    </div>
  )
}

export default Testimonials