import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  // TODO: Implement the gsap scroll trigger
  const scrollRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      ".para",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 1, stagger: 0.1 }
    );
  }, []);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box, index) => {
        gsap.to(box, {
          x: 100 * (index + 1),
          borderRadius: "50%",
          scale: index + 1.5,
          rotate: 180,
          duration: 4,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 50%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>
        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
        <div ref={textRef} className="mt-96">
          <h1 id="text" className="opacity-0 ">
            GsapText
          </h1>

          <p className="mt-5 text-gray-500 para">
            We can use same method like <code>gsap.to()</code>,{" "}
            <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
            <code>gsap.timeline()</code> to animate text.
          </p>

          <p className="mt-5 text-gray-500 para">
            Using these methods we can achieve various text animations and
            effects like fade in, fade out, slide in, slide out, and many more.
          </p>

          <p className="mt-5 text-gray-500 para">
            For more advanced text animations and effects, you can explore the
            GSAP TextPlugin or other third-party libraries that specialize in
            text animations.
          </p>

          <p className="mt-5 text-gray-500 para">
            Read more about the{" "}
            <a
              href="https://greensock.com/docs/v3/Plugins/TextPlugin"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              TextPlugin
            </a>{" "}
            plugin.
          </p>
        </div>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
        <div
          id="scroll-yellow"
          className="scroll-box w-20 h-20 rounded-lg bg-yellow-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
