import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapStagger = () => {
  // TODO: Implement the gsap.stagger() method
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 100,
      repeat: -1,
      ease: "reverse",
      yoyo: true,
      duration: 3,
      borderRadius: "25%",
      stagger: {
        amount: 2,
        axis: "x",
        from: "right",
      },
    });
  }, []);

  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-200 rounded-lg stagger-box">
            <h2 className="text-3xl font-bold text-white">L</h2>
          </div>
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-300 rounded-lg stagger-box">
            <h2 className="text-3xl font-bold text-white">U</h2>
          </div>
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-400 rounded-lg stagger-box">
            <h2 className="text-3xl font-bold text-white">T</h2>
          </div>

          <div className="w-20 h-20 flex items-center justify-center bg-indigo-600 rounded-lg stagger-box">
            <h2 className="text-3xl font-bold text-white">A</h2>
          </div>
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-600 rounded-lg stagger-box">
            <h2 className="text-3xl font-bold text-white">P</h2>
          </div>
          <div className="w-20 h-20 flex items-center justify-center  rounded-lg stagger-box">
            <h2 className="text-3xl font-bold text-white">.</h2>
          </div>
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-600 rounded-lg stagger-box">
            <h2 className="text-3xl font-bold text-white">A</h2>
          </div>
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-600 rounded-lg stagger-box">
            <h2 className="text-3xl font-bold text-white">I</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
