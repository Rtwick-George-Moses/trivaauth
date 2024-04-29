"use client";
import React from "react";
import { WiTornado } from "react-icons/wi";

import anime from "animejs";
const GRID_WIDTH = 18;
const GRID_HEIGHT = 15;
const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded p-2 transition-colors hover:bg-gray-300"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2  bg-gradient-to-r rounded from-orange-800 to-orange-800 opacity-50 group-hover:from-gray-800 group-hover:to-gray-800"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};
const Hero = () => {
  return (
    <section className="">
      <div className="min-h-screen min-w-full flex flex-col justify-center p-10">
        <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
          <div className="absolute inset-0 -mr-3.5 bg-gradient-to-br from-purple-700 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
          <div className="relative bg-gray-100 shadow-lg sm:rounded-3xl">
            <div className="flex items-center justify-start pt-6 pl-6">
              <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
            </div>
            <div className="px-20 py-6">
              {/* nav */}
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <div className="text-purple-800 text-3xl">
                    <WiTornado />
                  </div>
                  <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                    TriviaAuth
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <a
                    href="#"
                    className="mr-5 text-lg font-medium text-orange-800 hover:text-gray-700 hover:bg-gray-200 px-6 py-3 rounded-3xl  transition duration-150 ease-in-out"
                  >
                    Try it
                  </a>
                  <button className="px-6 py-3 rounded-xl font-medium bg-orange-800 text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">
                    Validate
                  </button>
                </div>
              </div>
              {/* /nav */}
              {/* hero section */}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="">
                  <div className=" mt-20 lg:mt-40 lg:ml-16 text-left">
                    <div className="text-6xl p-3 font-extrabold text-gray-600 leading-none">
                      Simple Login
                    </div>
                    <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
                      A better experience for your users and less stress for
                      you.
                    </div>
                    <button className="mt-6 px-8 py-4 rounded-xl font-normal tracking-wide bg-purple-700  text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
                      Try it now
                    </button>
                  </div>
                </div>
                <div className="py-20">
                  <DotGrid />
                </div>
              </div>

              {/* /hero section */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
