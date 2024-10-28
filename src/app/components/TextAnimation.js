"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const TextAnimation = (props) => {
  const ref = useRef(null);

  // Split by spaces and commas (any amount of whitespace or commas)
  const textArray = props.text.split(/[\s,]+/);

  return (
    <div className="flex flex-wrap items-start justify-start gap-2">
        
      {textArray.map((word, index) => (
        <motion.h1
          key={index}
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: (index / 10) * 0.9 }}
        >
          {word}
        </motion.h1>
      ))}
    </div>
  );
};

export default TextAnimation;
