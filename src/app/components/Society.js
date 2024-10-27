"use client";
import React, { useState } from 'react';

const Society = () => {
  const [showMore, setShowMore] = useState(null);

  const toggleDetails = (csrName) => {
    setShowMore(showMore === csrName ? null : csrName);
  };

  const csrData = [
    {
      Csr_Name: "Sustainability and Environmental Responsibility",
      Csr_Details: "Our team actively participates in charity programs, focusing on education, health, and poverty alleviation initiatives.",
      Csr_Icon: "/csr icons/carbon_sustainability.svg",
    },
    {
      Csr_Name: "Community Development and Social Impact",
      Csr_Details: "Our team actively participates in charity programs, focusing on education, health, and poverty alleviation initiatives.",
      Csr_Icon: "/csr icons/ri_user-community-line.svg",
    },
    {
      Csr_Name: "Employee Welfare and Safety",
      Csr_Details: "Our team actively participates in charity programs, focusing on education, health, and poverty alleviation initiatives.",
      Csr_Icon: "/csr icons/clarity_employee-line.svg",
    },
    {
      Csr_Name: "Ethical Business Practices and Governance",
      Csr_Details: "Our team actively participates in charity programs, focusing on education, health, and poverty alleviation initiatives.",
      Csr_Icon: "/csr icons/ri_government-fill.svg",
    },
  ];

  return (
    <div className="relative md:p-8 bg-[rgba(20,23,62,0.7)] shadow-md backdrop-blur-md lg:backdrop-none lg:shadow-none lg:bg-none md:bg-primary_color flex flex-col gap-10 p-10">
      <h3 className="text-white leading-[1.5em] md:w-[80%]">
        Corporate Social Responsibility (CSR)
      </h3>

      <p className="text-white">
        At Conpro Ltd., we believe in building not only world-class infrastructure but also thriving communities.
        <br />
        <br />
        Our commitment to Corporate Social Responsibility (CSR) reflects our dedication to sustainable development, environmental stewardship, and creating lasting positive impacts wherever we operate.
      </p>

      <div className="flex flex-wrap items-center justify-around gap-10">
        {csrData.map((csr, index) => (
          <div
            key={index}
            className="border-2 border-secondary_color p-4 w-[100%] h-[20em] max-w-[250px] max-h-[300px] flex flex-col justify-end relative"
          >
            <img
              className="w-[5em] absolute top-5 right-5 max-w-[40px]"
              src={csr.Csr_Icon}
              alt={csr.Csr_Name}
            />
            <div className="h-auto self-end">
              <h5 className="text-white text-[1em] leading-[1.4] md:text-[1.3em] md:leading-[1.5] 2xl:text-[20px] 2xl:leading-[1.6]">
                {csr.Csr_Name}
              </h5>
              {showMore === csr.Csr_Name && (
                <p className="text-white">{csr.Csr_Details}</p>
              )}
              <button
                className="bg-none border-none text-left border-b-2 border-white text-white p-2 w-2/3"
                onClick={() => toggleDetails(csr.Csr_Name)}
              >
                {showMore === csr.Csr_Name ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Society;
