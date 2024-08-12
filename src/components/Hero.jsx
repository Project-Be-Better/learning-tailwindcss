import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  // Decide the  width of the view port and switch the video
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo,
  );

  // handle the resize
  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    };

    // Add Event listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // GSAP
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5, duration: 4 });
    gsap.to("#cta", { opacity: 1, delay: 1.5, duration: 2, y: -50 });
  }, []);

  return (
    <section className="nav-height relative w-full">
      <div className="flex-center h-5/6 w-full flex-col bg-black">
        {/* Heading */}
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>

        {/* Video */}
        <div className="w-9/12 md:w-10/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex translate-y-20 flex-col items-center opacity-0"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="text-xl font-normal">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
