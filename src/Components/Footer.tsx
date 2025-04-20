// import React from 'react'
// import Marquee from "react-fast-marquee";
import { useState, useEffect} from 'react'
const Footer = () => {
    
  
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Updates every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div id='contact' className="contact w-[100vw] h-[125vh] overflow-hidden">
        <h1 className="text-[110px] W-[90VW] boldonse-regular leading-35  text-center">GET ON <br/> BOARD</h1>
        <div className="connect relative top-30 flex flex-col items-center justify-center ">
          <h1  onClick={() => window.location.href = "mailto:uttkarshsingh450@gmail.com"} className="inline-block Instrument-Serif font-semibold cursor-pointer text-[82px] p-25 pl-35 pr-35 border rounded-full border-dotted hover:text-white hover:bg-black">UTTKARSHSINGH450@GMAIL.COM</h1>
          {/* <h1 className="cursor-pointer p-9 text-4xl flex items-center justify-between gap-15 border-b border-dotted"><span className="text-[15px]">MOBILE</span> +91-9582189958</h1> */}
        </div>

        <div className="flex justify-between mt-60">
      <div className="left flex gap-10 ml-20  border-amber-600">
        <div className="region">
          <p className="text-gray-400 text-xl">Location</p>
          <p className="text-[20px]"> New Delhi, India</p>
        </div>
        <div className="time">
          <p className="text-gray-400 text-xl">Time</p>
          <p className="text-[20px]"> {currentTime.toLocaleTimeString()} GMT+</p>
        </div>
      </div>
      <div className="right flex flex-col justify-end mr-20">
        <p className="text-xl text-gray-400">Socials</p>
        <ul className="flex gap-5 text-[20px]">
          <li className='underline-hover'><a href="https://www.linkedin.com/in/uttkarsh-singh450/">LinkedIn</a></li>
          <li className='underline-hover'><a href="https://github.com/uttkarsh123-shiv">Github</a></li>
          <li className='underline-hover'><a href="https://www.behance.net/uttkarshsingh6">Behance</a></li>
          <li className='underline-hover'><a href="https://dribbble.com/uttkarsh4k">Dribble</a></li>

        </ul>
      </div>
    </div>
        {/* <Marquee gradient={true} gradientColor="white" className="relative top-80">
    <h1 className="text-[200px] text-gray-300">PORTFOLIO @ PORTFOLIO @</h1>
  </Marquee> */}
    </div>
  )
}

export default Footer
