import React, { useEffect, useRef } from "react";
import Hero from "./components/hero";
import Navbar from "./components/Nav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; 
import StarBackground from "./components/StarBackground";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Clean up on unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
        <StarBackground/>
      <div ref={scrollRef} data-scroll-container className="w-full min-h-screen">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
