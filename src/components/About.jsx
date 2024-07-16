import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import styles from "./style";
import { services } from "./Service";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-1 rounded-[20px] shadow-card"
      >
        <div
          option={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="icon" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.dev variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.dev>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] text-center leading-[30px] "
      >
        As a Full-stack developer and graphic designer, I possess a distinctive
        combination of creative and technical skills that enable me to deliver
        high-quality work for company success. My preferred stack is JavaScript,
        React, mangodb,nodejs,postgresql, and Ruby.Tools & Methods like Git,
        GitHub, Heroku, Netlify,Mobile/Responsive Development, RSpec, TDD.
        Skilled in effective time management, collaborating remotely, Creative
        problem solving, Debugging, Testing, API's, and communicating clearly
        through visuals and writing.I am seeking roles at companies that value
        innovation, collaboration, and staying ahead of the curve in web
        development
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
