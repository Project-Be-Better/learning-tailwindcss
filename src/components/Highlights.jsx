import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { watchImg, rightImg } from "../utils";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section>
      <div className="common-padding h-full w-screen bg-zinc">
        <div className="screen-max-width">
          {/* Heading for the highlights section */}
          <div className="mb-12 w-full items-end justify-between md:flex">
            <h1 id="title" className="section-heading">
              Get the Highlights
            </h1>
            <div className="flex flex-wrap items-end gap-5">
              <p className="link">
                Watch the film{" "}
                <img src={watchImg} alt="watch image" className="ml-2" />
              </p>
              <p className="link">
                Watch the event{" "}
                <img src={rightImg} alt="right image" className="ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
