// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { styles } from "./style";
import Computers from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hello, I'm <span className="text-[#915eff]">Tracy Miranja</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            Welcome to my Portfolio
          </p>
        </div>
      </div>
      <Computers />
    </section>
  );
};

export default Hero;
