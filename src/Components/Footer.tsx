// import React from 'react'
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#1a1919] overflow-hidden">
        
        
        
        <h1 className="text-6xl">Let's <span className="text-8xl dynalight-regular">connect</span></h1>
        <div className="connect w-[50vw] float-right text-white">
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
