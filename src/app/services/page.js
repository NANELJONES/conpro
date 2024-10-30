"use client";
import React from "react";
import { services_data } from "../Data/Data"; // Ensure this is correctly defined
import Image from "next/image";
import Layout1 from "../layout/Layout1";
import { motion } from "framer-motion";
import { useStateContext } from "../Context/StateContext";
import { AllLines } from "../components/AllLines";
const Page = () => {
  const { services } = useStateContext();

  return (
    <div className="realtive  h-auto ">
   
    
    <div className="p-10  relative lg:py-20 relative flex flex-col gap-10 max-w-[1500px] mx-auto">
    <AllLines line_color={"#14173E"}></AllLines>
      {services?.map((each_service, index) => (
        <motion.div
        id={`${each_service?.node?.serviceName}`}
          key={index}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`flex items-center gap-5 ${
            index % 2 === 0
              ? "flex-col gap-10 md:flex-row-reverse"
              : "flex-col md:flex-row"
          }`}
        >
          <div
            className={`w-full md:w-1/2 flex items-center relative h-[20em] md:h-[20em] lg:h-[30em] justify-center`}
          >
            <Image
              alt="Service Image"
              src={each_service?.node?.serviceImage?.url}
              className="object-cover rounded-[2em] md:rounded-none"
              fill
            />
          </div>

          <div className="w-full flex flex-col gap-5 md:w-2/3">
            <h3 className="w-2/3">
              {index + 1}. {each_service?.node?.serviceName}
            </h3>
            <h6 className="md:w-[80%] border-l-8 border-secondary_color px-2">
              {each_service?.node?.serviceDetail}
            </h6>
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Page;
