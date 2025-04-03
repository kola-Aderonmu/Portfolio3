/* eslint-disable no-unused-vars */
import React from "react";
import { prevProject } from "../techData";
import { Button, Divider, Image } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const [ref, inView] = useInView();

  const variants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.section
      id="project"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, ease: "linear", bounce: 0.3 }}
    >
      <div id="project" className=" max-w-screen-2xl mx-auto space-y-8">
        <p className="text-center text-3xl tracking-widest">
          Featured Projects
        </p>
        <div className="flex flex-wrap gap-8 justify-center p-4  h-full">
          {prevProject.map((item) => (
            <div
              key={Math.random()}
              className="flex flex-col justify-between max-w-[25rem] hover:shadow-2xl px-4 rounded-xl w-full border-2 sm:border-2 border-inherit "
            >
              <h1 className="text-center text-lg sm:text-2xl font-extrabold p-3">
                {item.name}
              </h1>
              <Image
                src={item.bgImg}
                alt={item.name}
                className="h-full w-full align-middle object-contain rounded-xl"
              />

              <div className="grid grid-flow-col place-content-between p-4 rounded-lg">
                <Button className=" align-middle" size="large">
                  <a
                    href={item.repopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Source
                  </a>
                </Button>
                <Button size={"large"}>
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live URL
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
