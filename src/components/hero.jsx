import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import img from "../assets/download.png";

const Hero = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "MERN Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <div
      id="home"
      className="bg-transparent text-white flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-6 sm:px-10 lg:px-20 m-20 py-16 sm:py-20"
    >
      {/* Left Side */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl sm:text-3xl text-gray-400">
          Hey There, 👋 I'm
        </h2>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-2">
          Anuj Gour
        </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mt-2 h-[60px]">
          <span ref={typedRef}></span>
        </h1>
        <p className="text-gray-400 mt-4 text-base sm:text-lg">
          I design beautiful simple things, <br className="hidden sm:block" />
          and I love what I do.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
          <a
            href="https://www.canva.com/design/DAGary-O6vs/KEDHlPkP3USwMNlxHusv6w/view?utm_content=DAGary-O6vs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf95e643f45"
            className="hover:bg-white hover:text-black border-2 transition-transform duration-300 px-6 py-2 rounded-lg font-semibold hover:scale-105"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="hover:bg-white hover:text-black border-2 transition-transform duration-300 px-6 py-2 rounded-lg font-semibold hover:scale-105"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <img
          src={img}
          alt="3D Robot"
          className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto rounded-xl shadow-lg object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
