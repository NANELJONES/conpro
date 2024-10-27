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

export default function Home() {
  return (
    <>
    <Header></Header>
    <Intro></Intro>
    <Layout1>
    <div className="flex  flex-col lg:flex-row gap-4 relative h-auto bg-black-200 w-full  ">
    
      <AbstractCube></AbstractCube>
      <div className="flex flex-col lg:w-[60%]  z-10 gap-20 w-full " >

           <OurServices/>
   
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
