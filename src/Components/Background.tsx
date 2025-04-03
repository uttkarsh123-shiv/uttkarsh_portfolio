import gsap from "gsap";
import { useEffect } from "react";

const Background = () => {
  useEffect(() => {
    gsap.from(".line", {
      y: "-100%",
      duration: 1,
      ease: "power1.in",
    });
  }, []);

  return (
    <div className="w-full absolute h-[356.9vh] flex justify-between px-[2%] pointer-events-none">
      <div className="w-[0.5px] h-full bg-gray-300 line"></div>
      <div className="w-[0.5px] h-full bg-gray-300 line"></div>
      <div className="w-[0.5px] h-full bg-gray-300 line"></div>
      <div className="w-[0.5px] h-full bg-gray-300 line"></div>
      <div className="w-[0.5px] h-full bg-gray-300 line"></div>
    </div>
  );
};

export default Background;
