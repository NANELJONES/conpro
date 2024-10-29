
import { SingleLine } from "./components/Lines";
import Image from "next/image";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Layout1 from "./layout/Layout1";
import AbstractCube from "./components/3D/AbstractCube";
import OurServices from "./components/OurServices";
import SampleProject from "./components/SampleProject";
import Anniversary from "./components/Anniversary";
import SampleGallery from "./components/SampleGallery";
import Society from "./components/Society";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import {TextAnimation, WordAnimation} from "./components/TextAnimation";

export default function Home() {
  return (
    <>
    <Header></Header>
    <Intro></Intro>
    <Layout1>
    <div className="flex  flex-col lg:flex-row gap-4 relative h-auto bg-black-200 w-full  ">
    
      <AbstractCube></AbstractCube>
      <div className="flex flex-col p-2 md:p-8 lg:w-[60%]  z-10 gap-10 w-full " >

           <OurServices/>

    <div className="p-8 bg-[rgba(256,256,256,0.6)] shadow-md md:backdrop-blur-md md::backdrop-none md:shadow-none md::bg-none">
    <WordAnimation text="We specialize in delivering top-tier civil engineering, construction, and consulting services."></WordAnimation>
     <br/>
     <WordAnimation text="Certified by industry leading bodies, our team of experts is dedicated to upholding the highest standards of quality and safety in every project we undertake."></WordAnimation>
    
    </div>
    
       
        <div className=" p-8 bg-[rgba(256,256,256,0.6)] shadow-md md:backdrop-blur-md md::backdrop-none md:shadow-none md::bg-none">
       
        <TextAnimation text="Intergrity"></TextAnimation>
        <TextAnimation text="Innovation"></TextAnimation>
        <TextAnimation text="Sustainabliity"></TextAnimation>
        <SingleLine delay_time="1"/>
   
        </div>
                  
           
   
           <SampleProject/>
        
           <Anniversary/>
         
           <Society></Society>
           <SampleGallery/>
           
         
           
          
          
       </div>



    </div>
    <br/>
    <br/>
    <Clients></Clients>
    <br/>
    <br/>
    <Testimonials></Testimonials>
    

    </Layout1>



    
    

    
    </>
    
  );
}
