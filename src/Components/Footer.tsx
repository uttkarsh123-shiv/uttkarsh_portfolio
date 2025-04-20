// import React from 'react'
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <div className="contact w-[100vw] h-[150vh] overflow-hidden">
        <h1 className="text-[110px] boldonse-regular leading-35  text-center">GET ON <br/> BOARD</h1>
        <div className="connect w-[50vw] bg-amber-50 relative top-30">
          <h1  onClick={() => window.location.href = "mailto:uttkarshsingh450@gmail.com"} className="cursor-pointer p-9 text-4xl  flex items-center justify-between gap-15 border-b border-dotted"><span className="text-[15px]">EMAIL</span> uttkarshsingh450@gmail.com</h1>
          <h1 className="cursor-pointer p-9 text-4xl flex items-center justify-between gap-15 border-b border-dotted"><span className="text-[15px]">MOBILE</span> +91-9582189958</h1>
        </div>
        <Marquee gradient={true} gradientColor="#1a1919" className="relative top-50">
    <h1 className="text-[200px] text-gray-300">PORTFOLIO @ PORTFOLIO @</h1>
  </Marquee>
    </div>
  )
}

export default Footer
