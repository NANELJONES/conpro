"use client";
import React, { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useStateContext } from "../Context/StateContext";
import Layout1 from "../layout/Layout1";
import Modal from "../components/Modal";

const GalleryPage = () => {
  const { gallery, fetchGallery ,set_url, set_show_modal,show_modal} = useStateContext();
  

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500
    ) {
      fetchGallery(); // Fetch more images when near bottom
    }
  }, [fetchGallery]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const backgroundStyle = {
    backgroundImage:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/gallery_bg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="relative">
     {show_modal && <Modal></Modal>}
      <div className="w-full" style={backgroundStyle}>
        <div className="layout flex flex-col md:flex-row md:p-20 max-h-[500px]">
          <div className="w-full md:w-1/2">
            <h1 className="text-white">
              Our <br /> Gallery
            </h1>
            <h6 className="text-white">
            Explore our portfolio of completed works in the Gallery section. From stunning residential spaces to large-scale commercial projects, each image showcases our dedication to craftsmanship and attention to detail. Browse through to see the quality that defines ConPro in every brick, beam, and finish.
            </h6>
          </div>
          <div className="relative flex w-full md:w-1/2">
            <Image
              alt="Gallery Banner"
              src={"/our_gallery.png"}
              className="w-full object-contain"
              fill
            />
          </div>
        </div>
      </div>

      <Layout1>
        <div className="flex p-10 md:p-20 items-center justify-around flex-wrap gap-4">
          {gallery.map((item, index) =>
            item.node.imageContent.map((img, imgIndex) => (
              <motion.div
                key={`${index}-${imgIndex}`}
                initial={{ opacity: 0, y: -70 }}
                whileInView={{ opacity: 1, y: -30 }}
                transition={{ duration: 1, delay: index / 10 + 0.4 }}
                className={`w-[15em] relative border rounded-2xl lg:w-[40%] h-[30em] md:h-[45em] lg:w-[20em] max-w-[250px] max-h-[350px] ${
                  imgIndex % 2 === 0 ? "mt-20" : "mt-0"
                }`}

                onClick={()=>{ set_show_modal(true), set_url(img.url)}}
              >
                <Image
                  alt={`Gallery Image ${imgIndex + 1}`}
                  src={img.url}
                  className="w-full object-cover rounded-2xl"
                  fill
                />
              </motion.div>
            ))
          )}
        </div>
      </Layout1>
    </div>
  );
};

export default GalleryPage;
