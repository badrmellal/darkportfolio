import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import CvBadr from "../../assets/cvBadr.pdf";
import IMG20231220210628 from "../../assets/IMG20231220210628.png";
import circle from "../../assets/circle.png";
import { FiDownload } from 'react-icons/fi';

const Hero = () => {

  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className="container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px] flex sm:flex-col-reverse sm:pt-0 ">
        <div className="left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2 data-aos="fade-up" className="text-5xl font-bold sm:text-[2rem]">
              Hello, I'm Badr Mellal
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Software Developer",
                2000,
                "Freelancer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-purple-500 text-4xl font-bold sm:text-3xl"
            />
            <p className="text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]">
              I'm an undergraduate student at University of London
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold hover:text-indigo-500 cursor-pointer"
            >
              <span>Contact Me</span>
            </ScrollLink>
            <a
              href={CvBadr}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold hover:text-indigo-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul data-aos="fade-up" data-aos-duration="1500" className="flex gap-5">
              <li>
                <a href="https://github.com/badrmellal?tab=repositories">
                  <AiFillGithub className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/badr-mellal-207a34201/">
                  <FaLinkedinIn className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/badr_wireshark/">
                  <AiFillInstagram className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className="h-[90%] w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src={IMG20231220210628}
              alt="mine"
            />
            <div className="absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div data-aos="zoom-in" data-aos-duration="1000" className="relative cursor-pointer">
                <img
                  className="w-[135px] md:w-[90px] circle-text"
                  src={circle}
                  alt="circle"
                />
                <FaPlay className="text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
