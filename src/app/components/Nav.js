"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [show_nav, set_show_nav] = useState(false);

  const nav_options = [
    { nav_name: "Home", nav_icon: "./menu.svg", nav_link: "/" },
    { nav_name: "Services", nav_icon: "./menu.svg", nav_link: "/services" },
    { nav_name: "Projects", nav_icon: "./menu.svg", nav_link: "/projects" },
    { nav_name: "Gallery", nav_icon: "./menu.svg", nav_link: "/gallery" },
    { nav_name: "About Us", nav_icon: "./menu.svg", nav_link: "/aboutUs" },
    { nav_name: "Anniversary", nav_icon: "./menu.svg", nav_link: "/#Anniversary" },
    { nav_name: "Contact Us", nav_icon: "./menu.svg", nav_link: "/contactUs" },
  ];

  return (
    <div className="fixed w-full font-thin z-[20] backdrop-blur-md">
      {/* Toggle button for small screens */}
      <Image
        src={show_nav ? "/close.svg" : "/menu.svg"}
        alt="menu"
        width={30}
        height={30}
        className="absolute top-4 left-4 md:hidden bg-secondary_color p-2 rounded-sm z-[200] cursor-pointer"
        onClick={() => set_show_nav(!show_nav)}
      />

      {/* Navigation menu */}
      <div
        className={`${
          show_nav ? "block pt-20" : "hidden"
        } md:flex flex-col-reverse items-start  md:flex-row md:gap-10 md:items-center p-4 md:p-2 w-[80%] md:w-full h-[100vh] max-h- min-h-[400px] md:min-h-[15px] md:h-auto justify-around    shadow-md backdrop-blur-md lg:backdrop-none lg:shadow-none bg-bg_gradient`}
      >
       <img
          src="/conpro_logo.png"
          alt="Company Logo"
          
          className="w-full hidden md:block  md:w-[6em]"
        />

        <div className="flex flex-col md:flex-row gap-4  h-auto items-start justify-start md:items-center">
          {nav_options.map((each_value) => (
            <Link href={each_value.nav_link} key={each_value.nav_name}>
             <p 
              onClick={()=>{ set_show_nav(false)}}
             
             className="text-white md:hover:text-[1.3em] md:hover:font-semibold transition-all duration-500 text-center text-[2em] md:text-[0.8em]  cursor-pointer">

                {each_value.nav_name}
              </p>
            </Link>
          ))}
        </div>
        
        {show_nav ? <img
          src="/conpro_logo.png"
          alt="Company Logo"
          
          className="w-[15em] mt-2 md:hidden md:w-[6em]"
        />:""}
      </div>
    </div>
  );
};

export default Nav;
