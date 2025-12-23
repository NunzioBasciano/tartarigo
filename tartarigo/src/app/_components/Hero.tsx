"use client";
import { useEffect, useState } from "react";

function Hero() {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  useEffect(() => {
    const updateSize = () => {
      const header = document.querySelector("header");

      if (header) {
        console.log("header height:", header.clientHeight);
        setHeaderHeight(header.clientHeight);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div
      style={{
        top: `${headerHeight}px`,
        height: `calc(100dvh - ${headerHeight}px)`,
      }}
      className="absolute left-0 w-full flex items-center justify-center text-black z-1 bg-transparent"
    >
      <div className="max-w-2xl px-4 text-center">
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
        <p className="text-[#fcf7ed] leading-8.75">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <button>Lorem</button>
      </div>
    </div>
  );
}

export default Hero;
