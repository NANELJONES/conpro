import React from 'react'

const Clients = () => {
  const client_logos = [
    "/clients/uew_064622.jpg",
    "/clients/gaec_064615.jpg",
    "/clients/getfund_064617.jpg",
    "/clients/gnpc1_064620.jpg",
    "/clients/kcl_064620.jpg",
    "/clients/moe_064621.jpg",
  ];

  return (
    <div className="w-full border p-8 border-secondary_color">
      <div className=" gap-5 items-start">
        <h1 className=''>Our <br /> Partners & Clients</h1>
      </div>

      <h5 className='w-full md:w-2/3'>
      We are proud to collaborate with trusted partners and serve clients across various industries. Our success is built on strong relationships with developers, architects, suppliers, and corporate clients, all sharing a commitment to high standards.

      
      </h5>

      <br /><br />

      {/* Wrapper for client logos */}
      <div className="flex flex-wrap gap-4 justify-center items-center w-full mx-auto">
        {client_logos.map((each_client, index) => (
          <div
            key={index}
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] border-2 border-[rgba(186, 186, 186, 0.7)] flex items-center justify-center p-4"
          >
            <img src={each_client} className="w-full h-full object-cover" alt={`client-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
