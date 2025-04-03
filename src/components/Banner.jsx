/* eslint-disable no-unused-vars */
"use client";
import React from "react";
import { techData } from "../techData";
import { motion } from "framer-motion";
import { Tooltip } from "antd";

const Banner = () => {
  return (
    <section id="banner" className="py-20 bg-gray-900">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-extrabold text-yellow-400 mb-10"
      >
        My Tech Stack
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 place-items-center max-w-screen-xl mx-auto">
        {techData.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="cursor-pointer"
          >
            <Tooltip title={item.name}>
              <motion.img
                src={item.url}
                alt={item.name}
                className="rounded-lg h-14 sm:h-16 md:h-20 lg:h-24 w-auto shadow-lg"
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              />
            </Tooltip>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
