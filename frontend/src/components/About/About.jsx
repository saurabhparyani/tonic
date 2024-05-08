import React, { useState, useEffect } from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import aboutcarddoc from '../../assets/images/doccardabout.png'
import aboutImg2 from "../../assets/images/doctor04.jpg";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const HandleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);

    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, []);
  const parallaxProps = useSpring({
    transform: `translateY(${scrollY / 2}px)`,
    opacity: 1 - scrollY / 1000,
  });

  return (
    <section className="p-4 md:p-8 lg:p-12 lg:mt-12">
      <div className="container">
        <div className="flex  items-center justify-between gap-[20px] lg:gap-[3px]  flex-col lg:flex-row">
          {/**=====about image */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 lg:left-[50px] mr-20 ">
            <img src={aboutImg2} alt="" />
            <div className="absolute z-20 bottom-3 w-[150px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] left-[40%] ml-20">
              <img className="rounded-lg  mb-9" src={aboutcarddoc} alt="" />
            </div>
          </div>
          {/**=======about content=======*/}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 flex-col justify-center lg:text-left text-center">
            <h2 className="heading">Proud to be recognized as one of the nation's best.</h2>
            <p className="text__para">
              {" "}
              Dr. Mitchell Starc, Chief Medical Officer of Tonic, is devoted to providing compassionate, personalized care. He understands that each patient is unique and takes the time to address their individual needs and concerns. Dr. Starc works closely with his patients to develop tailored treatment plans, fostering a strong sense of trust and ensuring the best possible outcomes.
            </p>
            <p className="text__para mt-[30px]">
              Dr. Mitchell Starc is a highly experienced cardiologist specializing in the diagnosis and treatment of complex heart conditions. From common ailments to advanced coronary issues, he offers a wealth of knowledge.  Committed to innovation, Dr. Starc incorporates cutting-edge medical technology to provide his patients with the most effective and up-to-date treatment options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
